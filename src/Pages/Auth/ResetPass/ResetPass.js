import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Login/img/logo.svg";
import "../Login/login.scss";
const ResetPass = () => {
  // let history = useHistory();
  const [loginErr, setloginErr] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:3000/v1/auth/reset-password`, user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        const errorMass = error.response.data;

        setloginErr(errorMass);
      });
    // history.push("/");
  };
  return (
    <div>
      <div className="login-main-area-wrap">
        <div className="login-inner-wrap">
          <div className="login-logo">
            <img src={logo} alt="" />
            <p>Clever Messenger account Reset</p>

            <div className="login-form-btn-hhcbhjfdaldif">
              <div className="text-dangertyiu mb-3">
                {loginErr.message ? (
                  <div>
                    <p className="text-dangertyiu">{loginErr.message}</p>
                  </div>
                ) : null}
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Reset
                </Button>
                <Link to="/registration">
                  Don't got a Clever Messenger account yet?
                </Link>
                <p className="mt-3">Clever Messenger © 2022</p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
