import React, { useState, useEffect } from "react";

import {
  IoDocumentTextOutline,
  IoCloudDownloadOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { CiGlobe, CiWifiOn } from "react-icons/ci";
import { HiOutlineServer } from "react-icons/hi2";
import {
  MdOutlineMailOutline,
  MdOutlineVpnLock,
  MdSupportAgent,
  MdOutlineLiveTv,
} from "react-icons/md";
import {
  AiOutlineSignature,
  AiOutlineFileSearch,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { BsPassport, BsShieldLock } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdGlobe } from "react-icons/io";
import { GoDeviceCameraVideo } from "react-icons/go";
import { VscRadioTower } from "react-icons/vsc";
import { RiMovie2AiLine } from "react-icons/ri";

const icons = {
  file: IoDocumentTextOutline,
  network: CiGlobe,
  server: HiOutlineServer,
  mail: MdOutlineMailOutline,
  signature: AiOutlineSignature,
  cloud: IoCloudDownloadOutline,
  passport: BsPassport,
  information: IoInformationCircleOutline,
  searchFile: AiOutlineFileSearch,
  phone: FiPhoneCall,
  vpn: MdOutlineVpnLock,
  wifi: CiWifiOn,
  public: IoMdGlobe,
  agent: MdSupportAgent,
  camera: GoDeviceCameraVideo,
  videoTv: MdOutlineLiveTv,
  liputan: AiOutlineVideoCamera,
  privasi: BsShieldLock,
  signal: VscRadioTower,
  movie: RiMovie2AiLine,
};

const LayananCard = ({ icon, title, onCardClick }) => {
  const IconComponent = icons[icon];
  const [iconSize, setIconSize] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIconSize(20);
      } else {
        setIconSize(30);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    const layananId = title.toLowerCase().replace(/\s+/g, "-");
    onCardClick(layananId);

    //scroll ke section
    setTimeout(() => {
      const detailSection = document.getElementById(layananId);
      const navbar = document.querySelector(".custom-navbar");

      if (detailSection && navbar) {
        const navbarHeight = navbar.offsetHeight;
        const elementPosition =
          detailSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="layanan-card" onClick={handleClick}>
      <div className="layanan-content">
        <div className="layanan-icon">
          <IconComponent size={iconSize} className="icon" />
        </div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

const LayananList = ({ onLayananSelect }) => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  const layananData = [
    { icon: "file", title: "Rekomendasi" },
    { icon: "network", title: "Subdomain" },
    { icon: "server", title: "Hosting" },
    { icon: "mail", title: "Email" },
    { icon: "signature", title: "TTE" },
    { icon: "cloud", title: "Cloud Storage" },
    { icon: "passport", title: "SPLP" },
    { icon: "information", title: "Informasi Eksekutif" },
    { icon: "searchFile", title: "PPID" },
    { icon: "phone", title: "Sandi dan Telepon" },
    { icon: "privasi", title: "Keamanan Informasi" },
    { icon: "signal", title: "Jaringan Internet" },
    { icon: "movie", title: "Konten Multimedia" },
    { icon: "vpn", title: "VPN" },
    { icon: "wifi", title: "Wifi Publik" },
    { icon: "public", title: "IP Publik" },
    { icon: "agent", title: "Helpdesk TIK" },
    { icon: "camera", title: "Zoom" },
    { icon: "videoTv", title: "Videotron" },
    { icon: "liputan", title: "Liputan JI TV" },
  ];

  return (
    <div className="layanan-list" data-aos="fade-up">
      {layananData.map((layanan, index) => (
        <LayananCard
          key={index}
          icon={layanan.icon}
          title={layanan.title}
          onCardClick={onLayananSelect || (() => {})}
        />
      ))}
    </div>
  );
};

export default LayananList;
