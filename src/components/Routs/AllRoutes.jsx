import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../File/Home";
import Login from "../File/Login";
import Signup from "../File/Signup";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
