import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Link className="btn btn-primary" to={"/home"}>
        Login
      </Link>
    </div>
  );
};

export default Login;
