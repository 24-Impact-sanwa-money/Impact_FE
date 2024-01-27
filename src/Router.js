import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeProvider";
import { GlobalStyle } from "./style/GlobalStyle";
import { Home } from "./pages/home";
import Save from "./pages/save";
import Search from "./pages/search";
import Profile from "./pages/profile";
import Layout from "./components/common/Layout";


function Router() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default Router;
