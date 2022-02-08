import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Link, useHistory } from "react-router-dom";
import * as usertz from "user-timezone";
import { CountryList } from "../../../Common/CountryList";
import logo from "../Login/img/logo.svg";
import "../Login/login.scss";
const Registration = () => {
  let history = useHistory();
  const timezoneInput = usertz.getTimeZone();
  const [loginErr, setloginErr] = useState([]);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    locale: "",
    timezone: timezoneInput,
    timezone_country: "",
    gender: "",
    address_street: "",
    address_postalcode: "",
    address_city: "",
    address_state: "",
    address_country: "",
  });
  const onInputChange = (e, index) => {
    const oldValues = { ...user };
    oldValues[e.target.name] = e.target.value;
    if (e.target.name === "timezone_country") {
      const selectedCountry = CountryList.find(
        (country) => country.name.common === e.target.value
      );
      const language = Object.values(selectedCountry.languages)[0];
      oldValues.locale = language;
      oldValues.address_country = selectedCountry.name.common;
    }
    setUser(oldValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:3000/v1/auth/register`, user)
      .then(function (response) {
        if (response.statusText === "Created") {
          setTimeout(() => {
            history.push("/login");
            onOpenModal(false);
          }, 3000);
          onOpenModal(true);
        }
        setUser(response);
      })

      .catch(function (error) {
        const errorMass = error.response.data;
        setloginErr(errorMass);
      });
  };

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="modal-popup-inner-wrap">
          <div className="">
            <h2>
              <i class="bx bx-check"></i>
              <h1>Congratulations</h1>
              <Link to="/login" className="success-goto-login-page">
                Go Login
              </Link>
            </h2>
          </div>
        </div>
      </Modal>
      <div className="login-main-area-wrap registration">
        <div className="login-inner-wrap">
          <div className="login-logo">
            <img src={logo} alt="" />
            <p>Create to your Clever Messenger account</p>
            <div className="login-form-btn-hhcbhjfdaldif ">
              <div className="text-dangertyiu text-start">
                {loginErr.error === "Conflict" ? (
                  <div>
                    <p className="text-dangertyiu">
                      {loginErr.message} <br />
                      <Link to="/login" className="success-goto-login-page">
                        Go Login
                      </Link>
                    </p>
                  </div>
                ) : null}{" "}
              </div>
              <div className="text-dangertyiu mb-3 text-start">
                {loginErr ? (
                  <div>
                    {loginErr.message &&
                      loginErr?.message.map &&
                      loginErr?.message.map((item, i) => {
                        return (
                          <li className="capitalize" key={i}>
                            {item}
                          </li>
                        );
                      })}
                  </div>
                ) : (
                  "jfhgksbn"
                )}
              </div>
              <Form onSubmit={handleSubmit} className="reg-form-zjhfb">
                <Row>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="first_name">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        name="first_name"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>{" "}
                  </Col>
                  {/* ========================== */}
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="last_name">
                      {" "}
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        name="last_name"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>{" "}
                  </Col>
                  {/* ========================== */}
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="emailId">
                      {" "}
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      {" "}
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="gender">
                      {" "}
                      <Form.Label>Gender</Form.Label>
                      <Form.Select
                        name="gender"
                        required
                        onChange={(e) => onInputChange(e)}
                      >
                        <option value="Gender">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                    </Form.Group>{" "}
                  </Col>{" "}
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="timezone_country">
                      {" "}
                      <Form.Label>country</Form.Label>
                      <Form.Select
                        name="timezone_country"
                        required
                        onChange={(e, index) => onInputChange(e, index)}
                      >
                        {CountryList.map((item, i) => {
                          return (
                            <option key={i} value={item.name.common}>
                              {item.name.common}
                            </option>
                          );
                        })}

                        <option value="Gender">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="address_street">
                      {" "}
                      <Form.Label>Street</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Street Address"
                        name="address_street"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="address_postalcode">
                      {" "}
                      <Form.Label>Postal code</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter postalcode"
                        name="address_postalcode"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="address_city">
                      {" "}
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter city"
                        name="address_city"
                        required
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={6}>
                    <Form.Group className="mb-3" controlId="address_state">
                      {" "}
                      <Form.Label>State</Form.Label>{" "}
                      <Form.Control
                        type="text"
                        placeholder="Enter state"
                        name="address_state"
                        required
                        onChange={(e) => onInputChange(e)}
                      />{" "}
                    </Form.Group>{" "}
                  </Col>
                  <Col lg={12}>
                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                  </Col>
                </Row>
                <Link to="/recovery-pass">Forgot password?</Link> <br />
                <Link to="/login">Already have an account?</Link>
                <p className="mt-3">Clever Messenger © 2022</p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
