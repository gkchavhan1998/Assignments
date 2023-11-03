import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Authentication/Login";
import CreateForm from "./Forms/CreateForm";
import CustomerForm from "./Forms/CustomerForm";
import ListOfForms from "./Forms/ListOfForms";
import Home from "./pages/Home";
import Test from "./Test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createform" element={<CreateForm />} />
        <Route path="/forms" element={<ListOfForms />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
