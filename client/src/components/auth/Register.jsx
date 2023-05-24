import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import registrationSchema from "../../schemas/registrationSchema.js";
import Swal from "sweetalert2";
import axios from "axios";

function Register() {
  const [apiResponse, setAPIResponse] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/testAPI")
      .then(res => setAPIResponse(res.data));
  }, []);
  const userRegisterData = {
    first_name: "",
    last_name: "",
    email: "",
  };

  const endpoint = "http://localhost:9000/api/users";

  const handleSubmit = values => {
    console.log(values);
    // userService.add(values).then(onUserAddSuccess).catch(onUserAddError);
    axios.post(endpoint, values).then(response => {
      if (response.data === "Email already exists.") {
        onUserAddError("Email already exists.");
      } else {
        onUserAddSuccess(response.data);
      }
    });
  };

  const onUserAddSuccess = r => {
    console.log(r);
    Swal.fire("Success!", "It works, woo!", "success");
  };

  const onUserAddError = error => {
    console.log(error);
    Swal.fire("Register Failed", error, "error");
  };

  return (
    <React.Fragment>
      <p>{apiResponse}</p>
      <Row className="align-items-center justify-content-center g-0 min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <Card>
            <Card.Body className="p-6">
              <Formik
                enableReinitialize={true}
                initialValues={userRegisterData}
                onSubmit={handleSubmit}
                validationSchema={registrationSchema}
              >
                <Form>
                  <Row>
                    <Col lg={12} md={12} className="mb-3">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="form-has-error"
                      />
                    </Col>
                    <Col lg={12} md={12} className="mb-3">
                      <label htmlFor="first_name">First Name</label>
                      <Field
                        type="text"
                        name="first_name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="first_name"
                        component="div"
                        className="form-has-error"
                      />
                    </Col>
                    <Col lg={12} md={12} className="mb-3">
                      <label htmlFor="last_name">Last Name</label>
                      <Field
                        type="text"
                        name="last_name"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="last_name"
                        component="div"
                        className="form-has-error"
                      />
                    </Col>
                    <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                      <Button variant="primary" type="submit">
                        Sign Up
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Register;
