import React from 'react'; 
import NavigationBar from '../navigation/Navbar';
import FooterBar from '../navigation/Footer';
import Content from './Content';

const LayoutBars = () => {
  return (
    <div>
    <NavigationBar />
    <Content/>
    <FooterBar />

    </div>
  )
   
}

export default LayoutBars;