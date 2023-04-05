import React from "react";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="App">
      Page Not Found
      <Link
        style={{ display: "block", width: "100px" }}
        className="btn btn-primary m-4"
        to={"/login"}
      >
        Back
      </Link>
    </div>
  );
}

export default PageNotFound;
