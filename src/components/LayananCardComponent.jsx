<<<<<<< Updated upstream
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
import { IoMdGlobe, IoMdArrowForward } from "react-icons/io";
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

const LayananCard = ({ icon, title }) => {
  const IconComponent = icons[icon] || FaFileAlt;
  const [iconSize, setIconSize] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIconSize(18);
      } else {
        setIconSize(25);
      }
    };

    handleResize();
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
        <p>
          Detail &nbsp;
          <IoMdArrowForward size={14} />
        </p>
      </div>
    </div>
  );
};

const LayananList = () => {
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
    { icon: "phone", title: "Sandi dan Telepon" }, //kurang keamanan informasi, jaringan internet, konten multimedia
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
    <div className="layanan-list">
      {layananData.map((layanan, index) => (
        <LayananCard key={index} icon={layanan.icon} title={layanan.title} />
      ))}
    </div>
  );
};

export default LayananList;
=======
import React from "react";
const LayananCardComponent = () => {

    return <div>LayananComponent</div>;
};

export default LayananCardComponent;
>>>>>>> Stashed changes
