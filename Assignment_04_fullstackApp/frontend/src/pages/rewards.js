import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Rewards() {
  const dataFetchedRef = useRef(false);
  const [menuItems, setMenuItems] = useState([]);

  const fetchMenuItems = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch("http://localhost:4000/getrewardoption", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("RESULT", result);
        setMenuItems(result);
      });
  };
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true; // this is done because useEffect was executing twice.
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

export default Rewards;
