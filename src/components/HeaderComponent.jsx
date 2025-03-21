import React from "react";
import { FaSearch } from "react-icons/fa";
import patternBg from "/public/pattern-bg.svg";

const Header = () => {
  return (
    <header className="peleden-header">
      <div
        className="peleden-background"
        style={{ backgroundImage: `url(${patternBg})` }}
      >
        <div className="peleden-container">
          <h1 className="peleden-title">PELEDEN</h1>
          <p className="peleden-subtitle">
            Akses semua layanan publik Pemerintah Daerah Istimewa Yogyakarta
            dalam satu portal terintegrasi untuk kemudahan masyarakat
          </p>
        </div>
      </div>

      <div className="peleden-search-container">
        <input
          type="text"
          className="peleden-search-input"
          placeholder="Cari layanan yang Anda butuhkan..."
        />
        <button className="peleden-search-button">
          <FaSearch size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
