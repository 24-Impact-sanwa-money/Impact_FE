import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/themeProvider";
import { GlobalStyle } from "./style/GlobalStyle";
import Home from "./pages/home";
import Save from "./pages/save";
import Search from "./pages/search";
import Profile from "./pages/profile";
import Layout from "./components/common/Layout";
import { Signup } from "./pages/Signup";

function Router() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default Router;
