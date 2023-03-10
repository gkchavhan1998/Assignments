import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Settings() {
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
    fetch("http://localhost:4000/getsettingoption", requestOptions)
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
    <div>
      <div className="row">
        <div className="col-2">
          <div id="menu-items" style={{ marginTop: "50px" }}>
            {menuItems.map((item) => {
              return (
                <Link
                  className="btn btn-primary m-4"
                  style={{ display: "block" }}
                  to="/"
                  key={item.name}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Settings;
