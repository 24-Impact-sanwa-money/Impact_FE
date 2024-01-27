import styled from "styled-components";
import Input from "../components/common/input";
import { useState } from "react";

export const Home = () => {
  const [value,setValue] = useState("")
  return (
    <>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
      <A>안녕하세요</A>
    </>
  );
};

const A = styled.div`
  color: black;
  margin-top: 50px;
`;
