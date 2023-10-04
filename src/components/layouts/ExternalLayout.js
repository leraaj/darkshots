import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
const ExternalLayout = () => {
  // Send user details in Navbar
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ExternalLayout;
