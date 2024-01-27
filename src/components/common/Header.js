import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Headers>
      <p>this is header</p>
    </Headers>
  );
};

const Headers = styled.header`
  width: 100%;
  height: 53px;
  background-color: #dde0ea;
`;

export default Header;
