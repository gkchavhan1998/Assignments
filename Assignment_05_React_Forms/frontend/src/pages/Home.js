import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link className="btn btn-info mt-1" to={"/createform"}>
        Create Form
      </Link>
      <Link className="btn btn-warning ms-1 mt-1" to={"/forms"}>
        {" "}
        View All Forms
      </Link>
    </div>
  );
};

export default Home;
