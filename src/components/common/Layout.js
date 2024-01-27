import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ margin, children }) => {
  return (
    <Wrapper margin={margin}>
      <Header />
      <Main className="main">{children}</Main>
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
