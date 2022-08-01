import React from 'react';
import NavigationBar from '../navigation/Navbar';
import FooterBar from '../navigation/Footer';
import imagecard from '../assets/kerr1.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import '../styles/landing.css';




const Landing= () => {
  return (
    <div>
        <NavigationBar />
        <div className='background-landing-img'>
            <div className='shade'>
                <h1> MEMORIES NEVER FADE</h1>
                <div>
                <h4 className='card-message'>Thought leads to Feelings, Feelings into Actions, Actions into Results</h4>
                            
                </div>
            </div>
        </div> 
       
    <section style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  padding: '0 50px'}}>
        <Row style={{}}> 
            <Col  xs={12} md={4} lg={3}> 
            <img src={imagecard} alt='pics2' className='image-card'/>
            </Col>
            
            <Col  xs={12} md={4} lg={9} className= 'section-message'>
                jskfdjkaf dsjkafjjkfd sk fj jsadffd sfsfs dfasf asfkl sklfsa
                akjfkd sjf ajs dkfjdsjfs 
                dsajk fkds fkdaf fjdsk a fkjds afds fkfdj skfjkj sorry
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </Col>
        </Row>
    </section>

        <FooterBar/ >
    </div>
  )
}

export default Landing;