import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import BsnSupportComponent from "./components/BsnSupportComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import DetailLayananComponent from "./components/DetailLayananComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <BsnSupportComponent />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layanan" element={<DetailLayananComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
