import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Footers>
      <div className="content">
        <h2 className="footer">this is footer</h2>
      </div>
    </Footers>
  );
};

const Footers = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #dde0ea;
  > .footer {
    padding-top: 100px;
  }
  > .content {
    width: 96%;
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Footer;
