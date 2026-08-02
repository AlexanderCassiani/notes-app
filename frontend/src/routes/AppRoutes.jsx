import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "../pages/home/layout/HomeLayout";
import SignupLayout from "../pages/auth/layout/SignupLayout";

import App from "../App";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/signup" element={<SignupLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
