import { Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/private/Dashboard";

function App() {
  const location = useLocation();
  const hideNavFooter =
    location.pathname === "/login" || location.pathname === "/dashboard"; // Cek apakah halaman login

  return (
    <>
      {!hideNavFooter && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!hideNavFooter && <FooterComponent />}
      <ScrollToTop />
    </>
  );
}

export default App;
