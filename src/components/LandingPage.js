import React from "react";
import Layout from "../navigation";
import imagecard from "../assets/kid-bros.jpg";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../styles/landing.css";

const Landing = () => {
  return (
    <Layout navItem={["Login", "SignUp"]}>
        <div className="background-landing-img">
          <div className="shade">
            <h1> MEMORIES NEVER FADE</h1>
            <div>
              <h4 className="message-card">
                Thought leads to Feelings, Feelings into Actions, Actions into
                Results
              </h4>
            </div>
          </div>
        </div>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Row className="image-msgcard-row">
            <Col>
              <img src={imagecard} alt="pics2" className="image-card" />
            </Col>

            <Col className="section-message">
              akjfkd sjf ajs dkfjdsjfs dsajk fkds fkdaf fjdsk a fkjds afds fkfdj
              skfjkj sorry In publishing and graphic design, Lorem ipsum is a
              placeholder text commonly used to demonstrate the visual form of a
              document or a typeface without relying on meaningful content.
              Lorem ipsum may be used as a placeholder before final copy is
              available.
            </Col>
          </Row>
        </section>
     
    </Layout>
  );
};

export default Landing;
