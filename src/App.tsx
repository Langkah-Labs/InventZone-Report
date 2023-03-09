import React from "react";
// dependencies
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// components
import Main from "./screens/Main";
import Login from './screens/Login'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
