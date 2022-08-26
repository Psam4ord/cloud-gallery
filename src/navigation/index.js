import React from 'react'
import FooterBar from './Footer'
import NavigationBar from './Navbar'


const Layout = ({children, navItem}) => {
  return (
    <div style={{width: '100%', height: '100vh'}}>
        <NavigationBar navItem={navItem}/>
        <div style={{padding: 70}}> {children}</div>
        <FooterBar/>
    </div>
  )
}

export default Layout;