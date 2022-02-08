import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "./img/logo.svg";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./login.scss";
const Login = () => {
  let history = useHistory();
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
      .post(`http://localhost:3000/v1/auth/login`, user)
      .then(function (response) {
        if (response.statusText === "OK") {
          setTimeout(() => {
            history.push("/");
            onOpenModal(false);
          }, 3000);
          onOpenModal(true);
          localStorage.setItem(
            "authUser",
            JSON.stringify(response.data.api_key)
          );
        }
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
              <Link to="/" className="success-goto-login-page">
                Go Home
              </Link>
            </h2>
          </div>
        </div>
      </Modal>
      <div className="login-main-area-wrap">
        <div className="login-inner-wrap">
          <div className="login-logo">
            <img src={logo} alt="" />
            <p>Login to your Clever Messenger account</p>

            <div className="login-form-btn-hhcbhjfdaldif">
              <div className="text-dangertyiu text-start">
                {loginErr.error ? (
                  <div>
                    <h2 className="text-dangertyiu">Incorrect Login data.</h2>
                  </div>
                ) : null}
              </div>
              <div className="text-dangertyiu mb-3 text-start">
                {loginErr ? (
                  <div>
                    {loginErr.message &&
                      loginErr.message.map &&
                      loginErr.message.map((item, i) => {
                        return (
                          <li className="capitalize" key={i}>
                            {item}
                          </li>
                        );
                      })}
                  </div>
                ) : (
                  loginErr.message
                )}
              </div>
              {/* <div className="text-dangertyiu mb-3 text-start">
                {loginErr ? (
                  Array.isArray(loginErr) ? (
                    <div>
                      {loginErr.message &&
                        loginErr.message.map &&
                        loginErr.message.map((item, i) => {
                          return (
                            <li className="capitalize" key={i}>
                              {item}
                            </li>
                          );
                        })}
                    </div>
                  ) : (
                    <li>{loginErr.error}</li>
                  )
                ) : (
                  <h1>{loginErr.message}</h1>
                )}
              </div> */}
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
              <Link to="recovery-pass">Forgot password?</Link>
              <br />
              <Link to="/registration">
                Don't got a Clever Messenger account yet?
              </Link>
              <p className="mt-3">Clever Messenger © 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
