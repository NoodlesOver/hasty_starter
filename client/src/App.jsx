import React from "react";
import Register from "./components/auth/Register.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <main role="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Register />}></Route>
          </Routes>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
