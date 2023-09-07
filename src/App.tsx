import React from "react";
// dependencies
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
// components
import Main from "./screens/Main";
import Login from "./screens/Login";
import Register from "./screens/Register";
import GeneralReport from "./screens/Report/General";
import InstalledODP from "./screens/Report/General/InstalledODP";
import DismantleODP from "./screens/Report/General/DismantleODP";
import FieldDataReport from "./screens/Report/FieldData";
import ListODP from "./screens/Report/FieldData/ListOfODP";
import ListCustomer from "./screens/Report/FieldData/ListOfCustomer";
import MainDataEntry from "./screens/DataEntry/Main";
import NFCForm from "./screens/DataEntry/ODPData/NFC/Form";
import NFCList from "./screens/DataEntry/ODPData/NFC";
import ODPForm from "./screens/DataEntry/ODPData/ODP/Form";
import ODPList from "./screens/DataEntry/ODPData/ODP";
import ODPAttachedForm from "./screens/DataEntry/ODPData/ODPAttached/Form";
import ODPAttachedList from "./screens/DataEntry/ODPData/ODPAttached";
import RoleForm from "./screens/DataEntry/UserData/Role/Form";
import RoleList from "./screens/DataEntry/UserData/Role";
import UserForm from "./screens/DataEntry/UserData/User/Form";
import UserList from "./screens/DataEntry/UserData/User";
import TeamForm from "./screens/DataEntry/UserData/Team/Form";
import TeamList from "./screens/DataEntry/UserData/Team";

function App() {
  return (
    <>
      <ProSidebarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/report/general" element={<GeneralReport />} />
            <Route
              path="/report/general/installed-odp"
              element={<InstalledODP />}
            />
            <Route
              path="/report/general/dismantle-odp"
              element={<DismantleODP />}
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
            <Route path="/data-entry/user-data/user" element={<UserList />} />
            <Route
              path="/data-entry/user-data/user/add"
              element={<UserForm />}
            />
            <Route
              path="/data-entry/user-data/user/update/:id"
              element={<UserForm />}
            />
            <Route path="/data-entry/user-data/team" element={<TeamList />} />
            <Route
              path="/data-entry/user-data/team/add"
              element={<TeamForm />}
            />
            <Route
              path="/data-entry/user-data/team/update/:id"
              element={<TeamForm />}
            />
          </Routes>
        </Router>
      </ProSidebarProvider>
    </>
  );
}

export default App;
