import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <h5>
        &copy; 2022 <span className="span-color">CompfySloth</span>
      </h5>
      <h5 className="text2"> All rights reserved</h5>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  height: 5rem;
  background-color: #222;
  color: white;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1rem;
  font-size: 1.1rem;

  .text2 {
    margin-left: 5px;
  }

  .span-color {
    color: hsl(22, 31%, 52%);
  }

  /* @media (max-width: 892px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */
`;

export default Footer;
