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
import NFCList from "./screens/DataEntry/ODPData/NFC";
import ODPForm from "./screens/DataEntry/ODPData/ODP/ODPForm";
import ODPList from "./screens/DataEntry/ODPData/ODP";
import ODPAttachedForm from "./screens/DataEntry/ODPData/ODPAttached/ODPAttachedForm";
import ODPAttachedList from "./screens/DataEntry/ODPData/ODPAttached";
import RoleForm from "./screens/DataEntry/UserData/Role/RoleForm";
import RoleList from "./screens/DataEntry/UserData/Role";

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
            <Route path="/data-entry/field-data/nfc" element={<NFCList />} />
            <Route
              path="/data-entry/field-data/nfc/add"
              element={<NFCForm />}
            />
            <Route
              path="/data-entry/field-data/nfc/update/:id"
              element={<NFCForm />}
            />
            <Route path="/data-entry/field-data/odp" element={<ODPList />} />
            <Route
              path="/data-entry/field-data/odp/add"
              element={<ODPForm />}
            />
            <Route
              path="/data-entry/field-data/odp/update/:id"
              element={<ODPForm />}
            />
            <Route
              path="/data-entry/field-data/odp-attached"
              element={<ODPAttachedList />}
            />
            <Route
              path="/data-entry/field-data/odp-attached/add"
              element={<ODPAttachedForm />}
            />
            <Route
              path="/data-entry/field-data/odp-attached/update/:id"
              element={<ODPAttachedForm />}
            />
            <Route path="/data-entry/user-data/role" element={<RoleList />} />
            <Route
              path="/data-entry/user-data/role/add"
              element={<RoleForm />}
            />
            <Route
              path="/data-entry/user-data/role/update/:id"
              element={<RoleForm />}
            />
          </Routes>
        </Router>
      </ProSidebarProvider>
    </>
  );
}

export default App;
