import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar";
import { Main } from "./pages";
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Routes>

            <Route path="/" element ={[<NavBar />, <Main />]} />

          </Routes>
        </div>
    </Router>
  );
}

export default App;
