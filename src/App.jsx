import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/private/Dashboard";
import Tracking from "./pages/private/Tracking";
import Layanan from "./pages/private/Layanan";
import DetailLayanan from "./pages/private/DetailLayanan";

function App() {
  const location = useLocation();
  const hideNavFooter =
    location.pathname === "/login" ||
    location.pathname.startsWith("/dashboard") ||
    location.pathname === "/dashboard/layanan" ||
    matchPath("/dashboard/layanan/:slug", location.pathname) ||
    location.pathname.startsWith("/tracking");

  return (
    <>
      {!hideNavFooter && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/layanan" element={<Layanan />} />
        <Route path="/dashboard/layanan/:slug" element={<DetailLayanan />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
      {!hideNavFooter && <FooterComponent />}
      <ScrollToTop />
    </>
  );
}

export default App;
