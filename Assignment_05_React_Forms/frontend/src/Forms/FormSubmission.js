import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FormSubmission = ({ index }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  if (errors) console.log("ERROR", errors);

  let form = JSON.parse(localStorage.getItem("forms"));
  let formdata = form[parseInt(index)].formelement;
  let formHeading = form[parseInt(index)].formname;
  return (
    <div
      className="border border-1 rounded mt-2 me-2"
      style={{ padding: "8px" }}
    >
      <h2 style={{ textAlign: "center" }}>{formHeading}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formdata.map((section, index) => {
          return (
            <div key={index}>
              <div
                className="border border-1 rounded"
                style={{ padding: "2px" }}
              >
                <h4> Section : {section.title}</h4>
                <hr />
                {section.elements.map((element, index) => {
                  return (
                    <Row key={index}>
                      <Col xs={3}>
                        <label>{element.label}</label>
                      </Col>
                      <Col>
                        <input
                          className="form-control"
                          type={element.type}
                          placeholder={element.placeholder}
                          {...register(element.fieldKey, {
                            required:
                              element.requiredErrorMeaage || element.required,
                            minLength: element.minLength,
                            maxLength: element.maxLength,
                            pattern: element.pattern || null,
                          })}
                        />
                      </Col>
                    </Row>
                  );
                })}
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default FormSubmission;
