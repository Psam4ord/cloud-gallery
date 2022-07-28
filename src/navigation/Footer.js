import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/footer.css';


const FooterBar = () => {
  return (
    
    
    <div className='footer'>

    <Row>
      <Col  xs={12} md={4} lg={3} >
        <h5> Sposnsors</h5>
      </Col>
      <Col  xs={12} md={4} lg={3} >
        <h5>Social Media</h5>
      </Col>
      <Col  xs={12} md={4} lg={3} >
        <h5> Terms</h5>
      </Col>
      <Col  xs={12} md={4} lg={3} >
        <h5> Privacy Policy</h5>
      </Col>
    </Row>
    
    </div>
    )
  }
  // <h6 className='copyright' >&copy; 2022 </h6>

export default FooterBar;