import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/contactUs.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Layout from '../navigation';
import camera from '../assets/iphone-camera.jpg'


const ContactForm = () => {
  return (
    <Layout navItem={['Login', 'SignUp']} >

    <div>
    
    <Card className='form-card'>  <h1>Contact us</h1> 
    <Row >
    <Col className='left-section' xs={12} md={6} > 
 <Form className='left-section-form' validated>
 <Form.Group className="mb-3">
   <Form.Control type="email" placeholder="email" />
   </Form.Group>
   
   <Form.Group className="mb-3">
     <Form.Control type="text" placeholder="full name" />
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Control type="text" placeholder="Organization" />
   </Form.Group>
   
   <Form.Group className="mb-3">
   <Form.Control type='textarea' placeholder='Message'/>
   </Form.Group>
   
   </Form>
   </Col>
   
            <Col className='right-section' xs={12} md={6}>
            <img src={camera} alt='camera' width={'100%'} height={'auto'}/>
            </Col>
   </Row>
   
          <Row>
          <Col xs={12} style={{display: 'flex', justifyContent: 'center', padding: '15px 0 '}}>
          <Button variant="primary" type="submit" style={{width: '40%'}}>
          Submit
          </Button>
          </Col>
          </Row>
   </Card>
   </div>
    </Layout>
   )
}

export default ContactForm;