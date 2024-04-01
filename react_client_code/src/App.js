import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterInfo from "./pages/RegisterInfo";
import MemberRegistration from "./pages/MemberRegistration";
import FamilyMembersDetails from "./pages/FamilyMembersDetails";
import CredentialFormPage from "./pages/CredentialFormPage";
import Dashboard from "./pages/Dashboard";
import FamilyDetailsPage from "./pages/FamilyDetailsPage";
import PersonalDetailsPage from "./pages/PersonalDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/info" element={<RegisterInfo />} />
        <Route
          path="/register/personal-details"
          element={<MemberRegistration />}
        />
        <Route
          path="/register/family-details"
          element={<FamilyMembersDetails />}
        />
        <Route
          path="/register/create-credentials"
          element={<CredentialFormPage />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/personal-details" element={<PersonalDetailsPage />} />
        <Route path="/family-details" element={<FamilyDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
