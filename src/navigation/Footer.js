import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/footer.css';
import FooterLinks from '../helpers/footer-list';
import {FaTwitter, FaWhatsapp, FaInstagram, FaLinkedinIn} from 'react-icons/fa';


const FooterBar = () => {
  return (
    
    
    <div className='footer'>

    <Row>
      <Col  xs={12} md={4} lg={3} className='sponsors' >
        <h5> Sposnsors</h5>
        <FooterLinks listItems={
          ['Glovita Hotel',
           'Handsome Drizzle',
          '3 Brothers Entertainment'
        ]
        }   />
        
       
        
         
      </Col>
      <Col  xs={12} md={4} lg={3} className='social-media-icons' >
        <h5>Social Media</h5>
            <FooterLinks listItems={[
                 <FaWhatsapp/>, 
                   <FaTwitter/>,
                  <FaInstagram/>,
                 <FaLinkedinIn/>
        ]}/>
      </Col>

      <Col  xs={12} md={4} lg={3} >
          Terms
      </Col>
      <Col  xs={12} md={4} lg={3} >
        <h5> Privacy Policy</h5>
        
        </Col>
        </Row>
        

        <Row>
        <Col className='copyright' xs={12}>
        <h6  >&copy; Copyright 2022. All Rights Reserved. </h6>
        </Col>
        </Row>
    
    </div>
    )
  }


export default FooterBar;