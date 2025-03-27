import { Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/LoginPage";

function App() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/login"; // Cek apakah halaman login

  return (
    <>
      {!hideNavFooter && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {!hideNavFooter && <FooterComponent />}
      <ScrollToTop />
    </>
  );
}

export default App;
