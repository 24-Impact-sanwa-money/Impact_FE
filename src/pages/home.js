import styled from "styled-components";
import Layout from "../components/common/Layout";
import Input from "../components/common/input";

export const Home = () => {
  return (
    <Layout>
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
      <Input label="전화번호" />
    </Layout>
  );
};
const A = styled.div`
  color: black;
  margin-top: 50px;
`;
