import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { Link} from "react-router-dom";
import "../styles/login.css";
import { loginSchema } from "../validation";

const Login = () => {
  
          // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, showAlert] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const { error, value } = loginSchema.validate({
      Email: email,
      Password: password, 
    });

    if (error) {
      showAlert(true);
      setErrMsg(error.message);
    } else {
      setErrMsg(" Login Successful");

      setEmail("");
      setPassword("");
      
    }
  };

  return (
    <Row
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="m-0 p-0"
    >
      <Alert
        key={1}
        variant={"success"}
        style={{ display: alert ? "block" : "none" }}
      >
        {errMsg}
      </Alert>
      <Col xs={10} md={6} lg={4}>
        <Form className="login" validated>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="remember-me-forgot-password">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Link to={"/forgotpassword"} className ='text-decoration-none '>
                Forgot password
            </Link>
          </div>

          <Button variant="primary" type="submit" onClick={handleLogin}>
            Login
          </Button>

          <h6 className="d-block text-center">Don't have an account? </h6>
          <Link to={"/register"}>
            <Button className="d-block text-center text-decoration-none fw-bold mx-auto">
              Signup
            </Button>
          </Link>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
