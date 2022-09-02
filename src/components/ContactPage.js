import React, { useState } from "react";
import { contactSchema } from "../validation";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import camera from "../assets/iphone-camera.jpg";
import "../styles/contactUs.css";

const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [alert, showAlert] = useState(false);
  const [error, setErrormessage] = useState("");
  const [msg, setMsg]= useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error, value } = contactSchema.validate({
      username: username,
      email: email,
      organization: organization, 
      msg: msg,
    });

    if (error) {
      showAlert(true);
      setErrormessage(error.message);
    } else {
      setErrormessage("message submitted successful");
      setUsername("");
      setEmail("");
      setOrganization("");
      setMsg("");
    }
  };

  return (
    <div>
      {/*form-section*/}
      <Card className="form-card">
        <Alert variant={"danger"} style={{ display: alert ? "block" : "none" }}>
          {error}
        </Alert>

        <h1>Contact us</h1>
        <Row>
          <Col className="left-section" xs={12} md={6}>
            <Form className="left-section-form" validated>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                  placeholder="full name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  placeholder="email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Organization"
                />
              </Form.Group>

              <label>
                <textarea id="message-content" 
                onChange={(e) => setMsg(e.target.value)}
                placeholder="message" />
              </label>
            </Form>
          </Col>

          {/*image-section*/}
          <Col className="right-section" xs={12} md={6}>
            <img src={camera} alt="camera" width={"100%"} height={"auto"} />
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "15px 0 ",
            }}
          >
            <Button
              variant="primary"
              type="submit"
              style={{ width: "40%" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ContactForm;
