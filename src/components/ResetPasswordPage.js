import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Buttun from "react-bootstrap/Button";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/resetPassword.css";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(showPassword);
  return (


    <div id="bg-color">
    <Row>
      <Col xs={12} md={6}  lg={4} style={{margin:0}}>
        <Form  id='main-form' validated>
            <h2> Change Password</h2>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="new Password"
              />
              <p>
                {showPassword ? (
                  <span>
                    <BsEyeSlash
                      onClick={() => setShowPassword(!showPassword)}
                    />
                    hide password
                  </span>
                ) : (
                  <span><BsEye onClick={() => setShowPassword(!showPassword)} /> show password</span> 
                )}
              </p>
              </Form.Group>

             
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder=" Confirm Password"
              />
              <p>
                {showPassword ? (
                  <span>
                    <BsEyeSlash
                      onClick={() => setShowPassword(!showPassword)}
                    />
                    hide password
                  </span>
                ) : (
                  <span><BsEye onClick={() => setShowPassword(!showPassword)} /> show password</span> 
                )}
              </p>
            </Form.Group>
         
          <Buttun>Reset password </Buttun>
        </Form>
      </Col>
      </Row>
      </div>
      );
    };
    
    export default ResetPassword;
    