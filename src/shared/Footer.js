import React from "react";

const Footer = props => {
  return (
    <div className="">
      {new Date().getFullYear()}&nbsp;&copy;&nbsp;
      <a href="http://ghabiassaad.com" className="">
        Ghabi Assaad
      </a>
    </div>
  );
};
export default Footer;
