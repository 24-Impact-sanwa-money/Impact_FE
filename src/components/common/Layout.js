import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Main className="main">
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
  min-height: calc(100vh - 100px);
  overflow-y: auto;
  flex: 1;
`;

export default Layout;
