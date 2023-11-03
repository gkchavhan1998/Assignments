import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Test = () => {
  console.log(JSON.parse(localStorage.getItem("forms"))[0].formelement);
  return (
    <>
      <Button>Click Me</Button>
      <Link varient="primary">Click me Link</Link>
    </>
  );
};

export default Test;
