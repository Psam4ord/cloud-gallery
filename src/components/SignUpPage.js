import React, { useState } from "react";
import { SignupSchema } from "../validation";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "../styles/SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alert, showAlert] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [color, setColor] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const { error} = SignupSchema.validate({
      username: username,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    });

    if (error) {
      showAlert(true);
      setErrMsg(
        error.message === '"repeatPassword" must be [ref:password]' ? "passwords do not match" : error.message
      );
      setColor(false);
    } else {
      setErrMsg("Registration Successful");
      setColor(true);
      username("");
      email("");
      password("");
      repeatPassword("");
    }
  };

  return (
    <Row>
      <Col className="main-Signup-form">
        <Form className="Sign-up" validated>
          <alert
            style={{
              display: alert ? "block" : "none",
              padding: 10,
              borderRadius: 10,
              color: color ? "#0f5132" : "#842029",
              backgroundColor: color ? "#d1e7dd" : "#f8d7da",
            }}
          >
            {" "}
            {errMsg}
          </alert>
          <p className="lead fw-bold"> SIGN UP </p>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Confirm password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSignup}>
            SignUp
          </Button>

          <h6 className="d-block text-center">Already a member? </h6>
          <Link to={"/login"}>
            <a href="#" className="d-block text-center fw-bold">
              Login
            </a>
          </Link>
        </Form>
        <Col className="right-section">
          <h1> WELCOME </h1>{" "}
        </Col>
      </Col>
    </Row>
  );
};

export default SignUp;
