import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashbord/dashbord-screen";
import Product from "../pages/product/product-screen";

const PageRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Product" element={<Product />} />
    </Routes>
  );
};

export default PageRoutes;
