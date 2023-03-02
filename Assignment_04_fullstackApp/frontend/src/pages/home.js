import React from "react";

import { Outlet } from "react-router-dom";
import Navbaar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbaar />
      <Outlet />
    </>
  );
}

export default Home;
