import styled from "styled-components";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Wrapper>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
`;

export default Layout;
