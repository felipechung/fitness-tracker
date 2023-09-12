import { Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "../../pages/auth";
import { SignUp } from "../../pages/signUp";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};
