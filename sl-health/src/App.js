import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, AboutUs } from "./Pages";
import { NavBar } from "./Containers";
import "./app.css";

function App() {


  return (
    <Router>
        <div className="App">
          <Routes>

            <Route path="/" element ={[<NavBar/>, <Main />]} />
            <Route path="/about-us"  element ={[<NavBar/>, <AboutUs />]} />

          </Routes>
        </div>
    </Router>
  );
}

export default App;
