import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../navigation';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {IoReturnDownBackSharp} from 'react-icons/io5';

import '../styles/forgotPassword.css'

const ForgotPassword = () => {
  return (
    
<Row id='main-card'> 
      <Col className='forgot-password' xs={12}> 
        <Form className='main-form'>
        <p className='lead fw-bold'> FORGOT PASSWORD </p> 
        <Form.Group className="my-4" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter username or email" validated/>
        </Form.Group>
        
        <div className='reset-back-btn'>
        <Button className='text-center'> Reset password</Button>
        <Link to ={'/'} className="go-back"> 
        <h6>Home <IoReturnDownBackSharp /> </h6> 
        </Link>
        </div>

        </Form> 
        
          </Col>
</Row>

  )
}
export default ForgotPassword;