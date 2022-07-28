import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import images from '../helpers/img-data';


const { Img } =Card
const Content = () => {
  return (
    <Container >
      <Row>
        {images.map((item, index) => {
          return (
            <Col xs={12} md={4} lg={3} key={index}>
              <Card>
                <Img src={item}/>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Content;