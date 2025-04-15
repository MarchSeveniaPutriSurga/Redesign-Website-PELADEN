import { Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/private/Dashboard";
import Tracking from "./pages/private/Tracking";

function App() {
  const location = useLocation();
  // Hide navbar and footer for login and any page in the private directory
  const hideNavFooter =
    location.pathname === "/login" || 
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/tracking");
    // Alternative: check if path starts with "/private" if you organize all private pages under that URL pattern

  return (
    <>
      {!hideNavFooter && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
      {!hideNavFooter && <FooterComponent />}
      <ScrollToTop />
    </>
  );
}

export default App;