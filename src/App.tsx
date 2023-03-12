import React from "react";
// dependencies
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
// components
import Main from "./screens/Main";
import Login from "./screens/Login";
import GeneralReport from "./screens/Report/General";
import InstalledODP from "./screens/Report/General/InstalledODP";
import FieldDataReport from "./screens/Report/FieldData";
import ListODP from './screens/Report/FieldData/ListOfODP'

function App() {
  return (
    <>
      <ProSidebarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/general" element={<GeneralReport />} />
            <Route path="/installedreport" element={<InstalledODP />} />
            <Route path="/fielddata" element={<FieldDataReport />} />
            <Route path="/listodpreport" element={<ListODP />} />
          </Routes>
        </Router>
      </ProSidebarProvider>
    </>
  );
}

export default App;
