import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav navbar navbar-light bg-light shadow">
      <div className="container ">
        <div className="d-flex justify-content-start gap-2 col">
          <Link to={"/"} className="navbar-brand text-uppercase fw-bold">
            Darkshots
          </Link>
        </div>
        <div className="d-flex justify-content-end gap-2 col">
          <Link to={"/login"} className="btn btn-primary">
            Login
          </Link>
          <Link to={"/register"} className="btn btn-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
