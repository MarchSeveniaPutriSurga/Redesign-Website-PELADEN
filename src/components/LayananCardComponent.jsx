import React, { useState, useEffect } from "react";
import {
  FaFileAlt,
  FaCar,
  FaCloud,
  FaGlobe,
  FaEnvelope,
  FaImage,
} from "react-icons/fa";

const icons = {
  file: FaFileAlt,
  car: FaCar,
  cloud: FaCloud,
  globe: FaGlobe,
  envelope: FaEnvelope,
  image: FaImage,
};

const LayananCard = ({ icon, title }) => {
  const IconComponent = icons[icon] || FaFileAlt;
  const [iconSize, setIconSize] = useState(25); // Default ukuran ikon

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIconSize(18); // Ukuran lebih kecil di mobile
      } else {
        setIconSize(25); // Ukuran default
      }
    };

    handleResize(); // Jalankan sekali saat komponen dimuat
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="layanan-card">
      <div className="layanan-icon">
        <IconComponent size={iconSize} className="icon" />
      </div>
      <div className="layanan-content">
        <h3>{title}</h3>
        <p>Detail ➝</p>
      </div>
    </div>
  );
};

const LayananList = () => {
  const layananData = [
    { icon: "file", title: "Rekomendasi" },
    { icon: "car", title: "Rekomendasi" },
    { icon: "cloud", title: "Rekomendasi" },
    { icon: "globe", title: "Rekomendasi" },
    { icon: "envelope", title: "Rekomendasi" },
    { icon: "image", title: "Rekomendasi" },
    { icon: "car", title: "Rekomendasi" },
    { icon: "cloud", title: "Rekomendasi" },
    { icon: "file", title: "Rekomendasi" },
    { icon: "envelope", title: "Rekomendasi" },
  ];

  return (
    <div className="layanan-list">
      {layananData.map((layanan, index) => (
        <LayananCard key={index} icon={layanan.icon} title={layanan.title} />
      ))}
    </div>
  );
};

export default LayananList;
