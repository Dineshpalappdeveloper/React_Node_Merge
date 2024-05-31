import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/user/Login";
import Users from "../components/user/Users";
import Register from "../components/user/Register";
import Dashboard from "../components/user/Dashboard";
import HomePage from "../components/home/HomePage";
import CheckoutPage from "../components/Product/CheckoutPage";
import AdminOrder from "../components/user/AdminOrder";

const RoutesAll = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/staff" element={<Users />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order" element={<AdminOrder />} />
      </Routes>
    </div>
  );
};

export default RoutesAll;
