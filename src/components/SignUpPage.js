import React, { useState } from "react";
import { SignupSchema } from "../validation";
import {useNavigate} from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "../styles/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [alert, showAlert] = useState(false)
  const [errMsg, setErrMsg] = useState("")
  const [color, setColor] = useState(false)

  const handleSignup = (e) => {
    e.preventDefault();
    const { error} = SignupSchema.validate({
      username: username,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    });

    if (error) {
      showAlert(true)
      setErrMsg(
        error.message === '"repeatPassword" must be [ref:password]' ? "passwords do not match" : error.message
      );
      setColor(false)
    } else {
      setErrMsg("Registration Successful")
      setColor(true)
      navigate('/login')
      username("")
      email("")
      password("")
      repeatPassword("")
    }
  };

  return (
    <Row className="bg-color">
      <Col className="main-Signup-form">
        <Form className="Sign-up" validated>
          <Alert
            style={{
              display: alert ? "block" : "none",
              padding: 10,
              borderRadius: 10,
              color: color ? "#0f5132" : "#842029",
              backgroundColor: color ? "#d1e7dd" : "#f8d7da",
            }}
          >
            {errMsg}
          </Alert>
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
            <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long,  special characters,   contain letters and numbers,
            and must not contain spaces, or emoji.
          </Form.Text>
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
            Register
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
