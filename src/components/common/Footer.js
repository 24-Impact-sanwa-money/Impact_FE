import React from "react";
import styled from "styled-components";
import peed from "../../assets/imgs/peed.svg";
import save from "../../assets/imgs/save.svg";
import search from "../../assets/imgs/search.svg";
import profile from "../../assets/imgs/profile.svg"


const Footer = () => {
  return (
    <Footers>
      <Button>
        <Img src={peed} />
        피드
      </Button>
      <Button>
        <Img src={save} />
        보관함
      </Button>
      <Button>
        <Img src={search} />
        검색
      </Button>
      <Button>
        <Img src={profile} />
        프로필
      </Button>
    </Footers>
  );
};

const Footers = styled.footer`
  width: 100%;
  height: 91px;
  display: flex;
  padding-top: 8px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.background.primary};
  height: auto;
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.content.primary};
`;

const Img = styled.img`
  width: 28px;
  height: 28px;
`

export default Footer;
