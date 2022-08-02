import React from 'react';


const styles = {
  listStyleType: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 15,

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