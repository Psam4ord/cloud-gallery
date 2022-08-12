import React from "react";

const styles = {
  listStyleType: "none",
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 15,
};

const FooterLinks = ({ listItems, link }) => {
  return (
    <ul style={styles}>
      {listItems.map((item, index) => {
        return (
          <li key={index}>
            <a
              href={link[index]}
              style={{ textDecoration: "none", color: "#91A2B8" }}
              target='_blank'
              rel="noreferrer"
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterLinks;
