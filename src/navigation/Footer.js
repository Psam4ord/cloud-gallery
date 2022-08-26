import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/footer.css";
import FooterLinks from "../helpers/footer-list";
import {
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const links = [
  "https://wa.link/h7legk",
  "https://twitter.com/home",
  "instagramlink",
  "https://www.linkedin.com/in/hayford-sammor-duah-7a8074186/",
];

const FooterBar = () => {
  return (
    <div className="footer">
      <Row>
        <Col xs={12} className="social-media-icons">
          <h5>Social Media</h5>
          <FooterLinks
            link={links}
            listItems={[
              <FaWhatsapp />,
              <FaTwitter />,
              <FaInstagram />,
              <FaLinkedinIn />,
            ]}
          />
        </Col>
      </Row>

      <Row>
        <Col className="copyright" xs={12}>
          <h6>&copy; Copyright 2022. All Rights Reserved. </h6>
        </Col>
      </Row>
    </div>
  );
};

export default FooterBar;
