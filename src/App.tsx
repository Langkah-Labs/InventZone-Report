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
import ListODP from "./screens/Report/FieldData/ListOfODP";
import ListCustomer from "./screens/Report/FieldData/ListOfCustomer";
import MainDataEntry from "./screens/DataEntry/Main";
import NFCForm from "./screens/DataEntry/ODPData/NFC/NFCForm";
import ListNFC from "./screens/DataEntry/ODPData/NFC";

function App() {
  return (
    <>
      <ProSidebarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/report/general" element={<GeneralReport />} />
            <Route
              path="/report/general/installed-odp"
              element={<InstalledODP />}
            />
            <Route path="/report/field-data" element={<FieldDataReport />} />
            <Route path="/report/field-data/list-odp" element={<ListODP />} />
            <Route
              path="/report/field-data/list-customer"
              element={<ListCustomer />}
            />
            <Route path="/data-entry/field-data" element={<MainDataEntry />} />
            <Route path="/data-entry/field-data/nfc" element={<ListNFC />} />
            <Route
              path="/data-entry/field-data/nfc/add"
              element={<NFCForm />}
            />
            <Route
              path="/data-entry/field-data/nfc/update/:id"
              element={<NFCForm />}
            />
          </Routes>
        </Router>
      </ProSidebarProvider>
    </>
  );
}

export default App;
