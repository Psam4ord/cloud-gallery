import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import images from "../helpers/img-data";
import "../styles/content.css";
import Layout from "../navigation";

//---- contain images from helpers/img-data.js----//
const { Img } = Card;
const Content = () => {
  return (
    <Layout navItem={['', '', 'contact us']}>
    <Container className="img-container-parent">
    <Row className="img-container-children">
        {images.map((item, index) => {
          return (
            <Col xs={12} md={4} lg={3} key={index}>
              <Card className="card-img">
                <Img src={item} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    </Layout>
  );
};

export default Content;
