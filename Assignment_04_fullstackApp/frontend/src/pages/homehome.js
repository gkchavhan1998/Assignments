import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Homehome(props) {
  const dataFetchedRef = useRef(false);
  // const [email, setEmail] = useState(localStorage.getItem("email"));
  const [menuItems, setMenuItems] = useState([]);

  function fetchMenuItems() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
      }),
    };
    fetch("http://localhost:4000/getmenu", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log("menu items : ", result);
        setMenuItems(result);
      });
  }
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true; // this is done because useEffect was executing twice.
    // console.log("useeffet");
    fetchMenuItems();
  });
  return (
    <div>
      <div className="row">
        <div
          style={{ border: "2px solid red" }}
          className="col-lg-3 col-md-4 col-sm-5"
        >
          <div id="menu-items" style={{ marginTop: "50px" }}>
            {menuItems.map((item) => {
              return (
                <Link
                  className="btn btn-primary m-4"
                  style={{ display: "block" }}
                  to={
                    "/" +
                    item.menu_item[0].toLowerCase() +
                    item.menu_item.slice(1)
                  }
                  key={item.menu_item}
                >
                  {item.menu_item}
                </Link>
              );
            })}
          </div>
        </div>
        <div style={{ border: "2px solid green" }} className="col">
          Some content
        </div>
      </div>
    </div>
  );
}

export default Homehome;
