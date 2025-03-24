import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="peladen-header">
      <div
        className="peladen-background"
        style={{ backgroundImage: "url('/pattern-bg.svg')" }}
      >
        <div className="peladen-container">
          <h1 className="peladen-title">PELADEN</h1>
          <p className="peladen-subtitle">
            Akses semua layanan publik Pemerintah Daerah Istimewa Yogyakarta
            dalam satu portal terintegrasi untuk kemudahan masyarakat
          </p>
        </div>
      </div>

      <div className="peladen-search-container">
        <input
          type="text"
          className="peladen-search-input"
          placeholder="Cari layanan yang Anda butuhkan..."
        />
        <button className="peladen-search-button">
          <FaSearch size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
