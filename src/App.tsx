import React from "react";
// dependencies
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// components
import Main from "./screens/Main";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
