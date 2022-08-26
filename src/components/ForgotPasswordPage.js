import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { forgotPasswordSchema } from "../validation";

import "../styles/forgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, showAlert] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    const { error, value } = forgotPasswordSchema.validate({
      email: email,
    });

    if (error) {
      showAlert(true);
      setErrMsg(error.message);
    } else {
      setErrMsg("Successful");
      setEmail("");
    }
  };

  return (
    <Row id="main-card">
     
      <Col className="forgot-password" xs={12}>
        <Form className="main-form">
        <Col xs={12}>
        <Alert
          key={1}
          variant={"danger"}
          style={{ display: alert ? "block" : "none", padding: "5px 8px" }}
        >
      
          {errMsg}
        </Alert>
      </Col>
          <p className="lead fw-bold"> FORGOT PASSWORD </p>
          <Form.Group className="my-4" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter email" validated />
          </Form.Group>

          <div className="reset-back-btn">
            <Button className="text-center" onClick={handleEmail}>
           
              Reset password
            </Button>
            <Link to={"/"} className="go-back">
              <h6>
                Home <IoReturnDownBackSharp />
              </h6>
            </Link>
          </div>
        </Form>
      </Col>
    </Row>
  );
};
export default ForgotPassword;
