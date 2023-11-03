import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PreviewForm from "./PreviewForm";

let formHeadingName = "";
let sectionHeading = "";
let labelName = "";
let placeholder = "";
let fieldKey = "";
let requiredFlag = false;
let requiredMessage = "";
let maxLength = 0;
let minLength = 0;
let pattern = "";

let localSection = { title: "", elements: [] };
const localFormStructure = [];

function CreateForm() {
  const [formHeading, setFormHeading] = useState(false);
  const [type, setType] = useState("none");
  const [validationFlag, setValidationFlag] = useState(false);
  const [requiredCheckbox, setRequiredCheckbox] = useState(false);
  const [formStructure, setFormStructure] = useState([]);
  const [forceRenderToggel, setForceRenderToggel] = useState(true);
  const [sectionFlag, setSectionFlag] = useState(false);

  const Navigate = useNavigate();

  function validationFunction(event) {
    if (event.target.checked) {
      setValidationFlag(true);
    } else {
      setValidationFlag(false);
      setRequiredCheckbox(false); //need to set false here because if required checkbox is checked and in this state of validation box is unchecked then the value of requiredCheckbox state remains true and when again clicked on validation checkbox then because requiredCheckbox state value was already true then even if the required checkbox is unchecked then also we can see the input element to enter the error message.
    }
  }
  function requiredFlagFunction(event) {
    if (event.target.checked) {
      requiredFlag = true;
      setRequiredCheckbox(true);
    } else {
      requiredFlag = false;
      setRequiredCheckbox(false);
    }
  }
  function requiredMessageFunction(event) {
    requiredMessage = event.target.value;
  }
  function addElementHandler() {
    const secHeading = sectionHeading;
    const formElement = {
      label: labelName,
      type: type,
      placeholder: placeholder,
      fieldKey: fieldKey,
      required: requiredFlag,
      requiredMessage: requiredMessage,
      maxLength: maxLength,
      minLength: minLength,
      pattern: pattern,
    };
    localSection.title = secHeading;
    localSection.elements.push(formElement);
    localFormStructure.splice(-1, 1, localSection);
    setFormStructure(localFormStructure);
    // reset all inputs
    document.getElementById("labelElement").value = "";
    document.getElementById("fieldElement").value = "";
    document.getElementById("placeholderElement").value = "";
    setValidationFlag(false);
    // setRequiredCheckbox(false);
    setForceRenderToggel((prevData) => !prevData); // setFormStructure from adding 2nd element do not render, so to force render we change value of forceRenderToggel state
  }
  function addSectionHandler() {
    localFormStructure.push(localSection);
    setSectionFlag(true);
  }
  function finishSectionHandler() {
    localSection = { title: "", elements: [] };
    let title = document.getElementById("sectionTitle");
    title.value = "";
    setSectionFlag(false);
  }
  function finishFormHandler() {
    // localStorage.setItem(`${formHeading}`, JSON.stringify(formStructure));

    let forms = JSON.stringify([
      ...JSON.parse(localStorage.getItem("forms")),
      { formname: formHeading, formelement: formStructure },
    ]);
    localStorage.setItem("forms", forms);

    Navigate("/home");
  }
  console.log(`
  
    app component rendered`);
  return (
    <>
      <Row>
        <Col>
          <Form className="container mt-3 mb-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Form Heading</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Add Heading"
                  onChange={(e) => {
                    let heading = e.target.value.trim();
                    console.log("Heading : ", heading);
                    heading.length === 0
                      ? (formHeadingName = false)
                      : (formHeadingName = heading);
                  }}
                />
                <Button
                  variant="secondary"
                  onClick={() => {
                    formHeadingName
                      ? setFormHeading(formHeadingName)
                      : setFormHeading(false);
                  }}
                >
                  Add
                </Button>
              </InputGroup>
            </Form.Group>
            {formHeading ? (
              <>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Section Heading</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      id="sectionTitle"
                      placeholder="Add Heading"
                      onChange={(e) => {
                        sectionHeading = e.target.value;
                        console.log("Section heading : ", sectionHeading);
                      }}
                    />
                    <Button variant="secondary" onClick={addSectionHandler}>
                      Add
                    </Button>
                  </InputGroup>
                </Form.Group>
                {sectionFlag ? (
                  <>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Element Type</Form.Label>
                      <Form.Select
                        className="mb-3"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setType(e.target.value);
                          console.log("Type : ", type);
                        }}
                      >
                        <option>None</option>
                        <option value="text">Text</option>
                        <option value="password">Password</option>
                        <option value="select">Select</option>
                        <option value="checkbox">Checkbox</option>
                        <option value="radio">Radio</option>
                        <option value="number">Number</option>
                        <option value="textarea">Textarea</option>
                        <option value="email">Email</option>
                        <option value="range">Range</option>
                        <option value="search">Search</option>
                        <option value="tel">Tel</option>
                        <option value="url">URL</option>
                        <option value="time">Time</option>
                        <option value="datetime">Date-Time</option>
                        <option value="datetime-local">Datetime-local</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                        <option value="button">Button</option>
                        <option value="submit">Submit-Button</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Element Label Name</Form.Label>
                      <Form.Control
                        id="labelElement"
                        type="text"
                        placeholder="Enter Element Label Name"
                        onChange={(e) => {
                          labelName = e.target.value;
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Element Field Key</Form.Label>
                      <Form.Control
                        id="fieldElement"
                        type="text"
                        placeholder="Enter Element Field Key"
                        onChange={(e) => {
                          fieldKey = e.target.value;
                        }}
                      />
                    </Form.Group>

                    {type === "text" ||
                    type === "password" ||
                    type === "email" ||
                    type === "tel" ||
                    type === "number" ||
                    type === "textarea" ||
                    type === "url" ? (
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Element Placeholder</Form.Label>
                        <Form.Control
                          id="placeholderElement"
                          type="text"
                          placeholder="Enter placeholder"
                          onChange={(e) => {
                            placeholder = e.target.value;
                          }}
                        />
                      </Form.Group>
                    ) : null}
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        onChange={(event) => {
                          validationFunction(event);
                        }}
                        type="checkbox"
                        label="Validation"
                      />
                    </Form.Group>
                    {validationFlag ? (
                      <>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Required"
                            onChange={(event) => {
                              requiredFlagFunction(event);
                            }}
                          />
                          {requiredCheckbox ? (
                            <>
                              <Form.Control
                                type="text"
                                placeholder="Required Error Message"
                                onChange={(event) => {
                                  requiredMessageFunction(event);
                                }}
                              />
                            </>
                          ) : null}
                        </Form.Group>
                        {type === "text" ||
                        type === "password" ||
                        type === "textarea" ? (
                          <>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicCheckbox"
                            >
                              <Row>
                                <Col>
                                  <Form.Label>Min Length</Form.Label>
                                  <Form.Control
                                    placeholder="Min Length"
                                    onChange={(e) => {
                                      minLength = e.target.value;
                                    }}
                                  />
                                </Col>
                                <Col>
                                  <Form.Label>Max Length</Form.Label>
                                  <Form.Control
                                    placeholder="Max Length"
                                    onChange={(e) => {
                                      maxLength = e.target.value;
                                    }}
                                  />
                                </Col>
                              </Row>
                            </Form.Group>
                            {type === "password" ? (
                              <>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicPassword"
                                >
                                  <Form.Label>Pattern</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter Pattern"
                                    onChange={(e) => {
                                      pattern = e.target.value;
                                    }}
                                  />
                                </Form.Group>
                              </>
                            ) : null}
                          </>
                        ) : null}
                      </>
                    ) : null}

                    <Button onClick={addElementHandler} variant="primary">
                      Add Element
                    </Button>
                    <Button onClick={finishSectionHandler} variant="warning">
                      Finish Section
                    </Button>
                    <Button onClick={finishFormHandler} variant="info">
                      Finish Form
                    </Button>
                  </>
                ) : null}
              </>
            ) : null}
          </Form>
        </Col>
        <Col>
          <PreviewForm formdata={formStructure} formHeading={formHeading} />
        </Col>
      </Row>
    </>
  );
}

export default CreateForm;

{
  /* <FormElement
                    type={type}
                    setType={setType}
                    labelName={labelName}
                    fieldKey={fieldKey}
                    placeholder={placeholder}
                    validationFunction={validationFunction}
                    validationFlag={validationFlag}
                    requiredFlagFunction={requiredFlagFunction}
                    requiredCheckbox={requiredCheckbox}
                    requiredMessageFunction={requiredMessageFunction}
                    minLength={minLength}
                    maxLength={maxLength}
                    pattern={pattern}
                    addElementHandler={addElementHandler}
                    finishSectionHandler={finishSectionHandler}
                    finishFormHandler={finishFormHandler}
                  /> */
}
