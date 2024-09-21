import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "@pages/signup";
import Login from "@pages/login";
import Dashboard from "@pages/dashboard";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
