import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

export class App extends Component {

  state={
    progress: 0
  }

  apikey=import.meta.env.VITE_API_KEY;

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} category="general"  />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" category="sports" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" category="science" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
