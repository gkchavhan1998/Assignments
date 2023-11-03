import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import CustomerForm from "./CustomerForm";

const ListOfForms = () => {
  const [index, setIndex] = useState(-1);
  let allForms = JSON.parse(localStorage.getItem("forms"));

  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>List of Forms</Form.Label>
        <Form.Select
          className="mb-3"
          aria-label="Default select example"
          onChange={(e) => {
            console.log("form details ", e.target.value);
            if (e.target.value !== "None") {
              setIndex(e.target.value);
            } else {
              setIndex(-1);
            }
          }}
        >
          <option>None</option>
          {allForms.map((form, index) => (
            <option value={index} key={index}>
              {form.formname}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <CustomerForm index={index} />
    </>
  );
};

export default ListOfForms;
