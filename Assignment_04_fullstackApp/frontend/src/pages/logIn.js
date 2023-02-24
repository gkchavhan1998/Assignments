import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const logIn = () => {
    // console.log("clicked login");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    };

    fetch("http://localhost:4000/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log("RESULT---", result[0]);
        // window.userType = result[0].user_type;
        localStorage.setItem("email", result[0].email);
        // localStorage.setItem(
        //   "objTest",
        //   JSON.stringify({
        //     testname: "gaurav",
        //     testdept: "dev",
        //   })
        // );
        // console.log(JSON.parse(localStorage.getItem("objTest")).testname);
        navigate("/home", {
          state: { userType: result[0].user_type },
        });
      })
      .catch((err) => {
        console.log("ERROR : ", err);
      });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <div className="form">
            <div className="mb-3">
              <label>Email</label>
              {console.log("working")}
              <input
                onKeyUp={(event) => {
                  setEmail(event.target.value);
                }}
                className="form-control"
                type="email"
              />
            </div>

            <div className="mb-3">
              <button
                onClick={logIn}
                style={{ marginRight: 10 }}
                className="btn btn-success"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Login;
