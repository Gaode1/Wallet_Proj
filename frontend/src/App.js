import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import User from "./components/User";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark mx-2 px-3">
        <a href="/" className="navbar-brand">
          Wallet
        </a>
        <div className="navbar-nav mr-auto float-right">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
      
        <Routes>
          <Route  path="/" element={<User/>} />
          <Route  path="/tutorials" element={<TutorialsList/>} />
          <Route  path="/add" element={<AddTutorial/>} />
          <Route path="/tutorials/:account_no" element={<Tutorial/>} />
        </Routes>
  
      </div>
    </div>
  );
}
export default App;
