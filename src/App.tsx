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
import ForgotPassword from "./screens/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <ProSidebarProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Main />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/report/general"
              element={
                <ProtectedRoute>
                  <GeneralReport />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/general/installed-odp"
              element={
                <ProtectedRoute>
                  <InstalledODP />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/general/dismantle-odp"
              element={
                <ProtectedRoute>
                  <DismantleODP />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/field-data"
              element={
                <ProtectedRoute>
                  <FieldDataReport />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/field-data/list-odp"
              element={
                <ProtectedRoute>
                  <ListODP />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/field-data/list-customer"
              element={
                <ProtectedRoute>
                  <ListCustomer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/field-data"
              element={
                <ProtectedRoute>
                  <MainDataEntry />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/field-data/nfc"
              element={
                <ProtectedRoute>
                  <NFCList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/field-data/nfc/add"
              element={
                <ProtectedRoute>
                  <NFCForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/field-data/nfc/update/:id"
              element={
                <ProtectedRoute>
                  <NFCForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/field-data/odp"
              element={
                <ProtectedRoute>
                  <ODPList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/field-data/odp/add"
              element={
                <ProtectedRoute>
                  <ODPForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/field-data/odp/update/:id"
              element={
                <ProtectedRoute>
                  <ODPForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/field-data/odp-attached"
              element={
                <ProtectedRoute>
                  <ODPAttachedList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/field-data/odp-attached/add"
              element={
                <ProtectedRoute>
                  <ODPAttachedForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/field-data/odp-attached/update/:id"
              element={
                <ProtectedRoute>
                  <ODPAttachedForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/user-data/role"
              element={
                <ProtectedRoute>
                  <RoleList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/user-data/role/add"
              element={
                <ProtectedRoute>
                  <RoleForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/user-data/role/update/:id"
              element={
                <ProtectedRoute>
                  <RoleForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/user-data/user"
              element={
                <ProtectedRoute>
                  <UserList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/user-data/user/add"
              element={
                <ProtectedRoute>
                  <UserForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/user-data/user/update/:id"
              element={
                <ProtectedRoute>
                  <UserForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/user-data/team"
              element={
                <ProtectedRoute>
                  <TeamList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/user-data/team/add"
              element={
                <ProtectedRoute>
                  <TeamForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/data-entry/user-data/team/update/:id"
              element={
                <ProtectedRoute>
                  <TeamForm />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </ProSidebarProvider>
    </>
  );
}

export default App;
