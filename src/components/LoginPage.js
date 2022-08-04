import React from 'react';
import Layout from '../navigation/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import '../styles/login.css';



const Login = () => {
  return (
<Layout navItem={['Signup']}>

    <Row>
    <Col className='main-login-form'>
    <Form  className='login' validated>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            
        <Form.Control type="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
        login
        </Button>
        <h6  className='d-block text-center'>
        Don't have an account? </h6>
        <a href='#' className=' d-block text-center'>Signup </a>
        </Form>
        </Col>
    </Row>
</Layout>
  )
}

export default Login;