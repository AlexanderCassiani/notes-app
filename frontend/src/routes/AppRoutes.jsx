import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "../pages/home/HomeLayout";
import App from "../App";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
