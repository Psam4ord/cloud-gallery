import React from "react";
import {
  Form,
  Container,
  Button,
  InputGroup,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import profilePic from "../../assets/kerr1.jpg";
import "../../styles/Profile/updateprofile.css";

const UserProfile = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4} lg={4}>
          <Card className="left-section-profile">
            <img src={profilePic} alt="img" className="upload-profile-pic" />
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr
              style={{
                borderTop: "2px solid #000",
                marginLeft: 20,
                marginRight: 20,
              }}
            />
            <div className="links">
              <ul>
                <li>Update Profile</li>
                <li>Delete Account</li>
                <li>Authentication</li>
              </ul>
            </div>

            <hr
              style={{
                borderTop: "2px solid #000",
                marginLeft: 20,
                marginRight: 20,
              }}
            />
            <Button style={{ marginTop: "80px", width:'30%' }}>Sign Out </Button>
          </Card>
        </Col>

        <Col>
          <Form className="right-section-profile">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>upload a photo</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <InputGroup className="mb-3">
              <Form.Control 
              type="text"
                placeholder="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <InputGroup className="mb-3">
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                placeholder="Bio"
              />
            </InputGroup>

            <Button style={{ width:'20%'}}>Update</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
