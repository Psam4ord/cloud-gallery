import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import images from '../helpers/img-data';
import '../styles/content.css';


const { Img } =Card
const Content = () => {
  return (
    <Container className='img-container-parent'>
      <Row className='img-container-children'>
        {images.map((item, index) => {
          return (
            <Col xs={12} md={4} lg={3} key={index}>
              <Card className='card-img'>
                <Img src={item} className=''/>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Content;