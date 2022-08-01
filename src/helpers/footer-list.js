import React from 'react';


const styles = {
  listStyleType: 'none'
}

const FooterLinks = ({listItems}) => {
  return (
    <ul style={styles}>
  {
    listItems.map((item, index)=>{
      return(
        <li key={index}>{item}</li>
      )
     })
  }
    </ul>
  )
}

export default FooterLinks;