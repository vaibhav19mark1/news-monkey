import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App=()=> {

  const [progress, setProgress] = useState(0);
  const apikey=import.meta.env.VITE_API_KEY;
  
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apikey={apikey} category="general"  />} />
            <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" category="sports" />} />
            <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" category="science" />} />
            <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
}

export default App;
