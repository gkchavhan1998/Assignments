import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [user_type, setUserType] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const signUp = () => {
    console.log(`email : ${email}`);
    console.log(`first name : ${first_name}`);
    console.log(`last name : ${last_name}`);
    console.log(`user type : ${user_type}`);
    console.log(`contact : ${contact}`);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        user_type,
        contact,
        email,
      }),
    };

    fetch("http://localhost:4000/adduser", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("RESULT", result);
        console.log("in fetch");
        if (!result.data) {
          throw new Error(result.sqlMessage);
        }

        let status = document.getElementById("success-status");
        status.innerHTML = result.data;
        navigate("/login");
      })
      .catch((err) => {
        let status = document.getElementById("success-status");
        status.innerHTML = err;
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Sign up</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <div className="form">
            <div className="mb-3">
              <label>First Name</label>
              <input
                placeholder="Enter First Name"
                onKeyUp={(event) => {
                  setFirstName(event.target.value);
                }}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label>Last Name</label>
              <input
                placeholder="Enter Last Name"
                onKeyUp={(event) => {
                  setLastName(event.target.value);
                }}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label>User Type</label>
              <input
                placeholder="Enter User Type"
                onKeyUp={(event) => {
                  setUserType(event.target.value);
                }}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label>Contact</label>
              <input
                placeholder="Enter Contact"
                onKeyUp={(event) => {
                  setContact(event.target.value);
                }}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                placeholder="Enter Email"
                onKeyUp={(event) => {
                  setEmail(event.target.value);
                }}
                className="form-control"
                type="email"
              />
            </div>

            <div className="mb-3">
              <button
                onClick={signUp}
                style={{ marginRight: 10 }}
                className="btn btn-success"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div>
            <h2 id="success-status"></h2>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default SignUp;
