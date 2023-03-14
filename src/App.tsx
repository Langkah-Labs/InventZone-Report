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
            <Route path="/report/general" element={<GeneralReport />} />
            <Route path="/report/general/installed-odp" element={<InstalledODP />} />
            <Route path="/report/field-data" element={<FieldDataReport />} />
            <Route path="/report/general/list-odp" element={<ListODP />} />
          </Routes>
        </Router>
      </ProSidebarProvider>
    </>
  );
}

export default App;
