import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const dataFetchedRef = useRef(false);
  const [menuItems, setMenuItems] = useState([]);

  function fetchMenuItems() {
    console.log("inside fetch option");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:4000/getmainoption", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("menu items : ", result);
        setMenuItems(result);
      });
  }
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true; // this is done because useEffect was executing twice.
    console.log("reward");
    fetchMenuItems();
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuItems.map((item) => {
              return (
                <li key={item.name} className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    key={item.name}
                    to={item.name === "home" ? "/home" : item.name}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
