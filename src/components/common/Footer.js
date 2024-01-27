import React from "react";
import styled from "styled-components";
import onPeed from "../../assets/imgs/onPeed.svg";
import offPeed from "../../assets/imgs/offPeed.svg";
import onSave from "../../assets/imgs/onSave.svg";
import offSave from "../../assets/imgs/offSave.svg";
import onSearch from "../../assets/imgs/onSearch.svg";
import offSearch from "../../assets/imgs/offSearch.svg";
import onProfile from "../../assets/imgs/onProfile.svg";
import offProfile from "../../assets/imgs/offProfile.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const loc = useLocation();
  const nav = useNavigate();

  return (
    <Footers>
      <Button selected={loc.pathname === "/"} onClick={() => nav("/")}>
        <Img selected={loc.pathname === "/"} onImg={onPeed} offImg={offPeed} />
        피드
      </Button>
      <Button selected={loc.pathname === "/save"} onClick={() => nav("/save")}>
        <Img selected={loc.pathname === "/save"} onImg={onSave} offImg={offSave} />
        보관함
      </Button>
      <Button selected={loc.pathname === "/search"} onClick={() => nav("/search")}>
        <Img selected={loc.pathname === "/search"} onImg={onSearch} offImg={offSearch} />
        검색
      </Button>
      <Button selected={loc.pathname === "/profile"} onClick={() => nav("/profile")}>
        <Img selected={loc.pathname === "/profile"} onImg={onProfile} offImg={offProfile} />
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
  color: ${({ selected,theme }) => (selected ? theme.content.primary : theme.content.tertiary)};
`;

const Img = styled.img`
  width: 28px;
  height: 28px;
  content: url(${({ selected, onImg, offImg }) => (selected ? onImg : offImg)});
`;

export default Footer;
