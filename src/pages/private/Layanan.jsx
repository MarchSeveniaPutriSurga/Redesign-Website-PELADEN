import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const Layanan = () => {
  const navigate = useNavigate();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [headerDimmed, setHeaderDimmed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setSidebarOpen(!isMobile);
      setHeaderDimmed(isMobile && sidebarOpen);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setHeaderDimmed(isMobile && sidebarOpen);
  }, [sidebarOpen]);

  // Data Layanan
  const serviceCards = [
    {
      title: "Rekomendasi",
      slug: "rekomendasi",
      description: "Pengajuan rekomendasi pembuatan Sistem Elektronik",
      status: "inactive",
    },
    {
      title: "SPLP",
      slug: "splp",
      description: "Layanan fasilitasi pemanfaatan SPLP",
      status: "active",
    },
    {
      title: "Backup",
      slug: "backup",
      description: "Layanan fasilitasi backup",
      status: "active",
    },
    {
      title: "Web OPD",
      slug: "web-opd",
      description: "Layanan fasilitasi template website OPD",
      status: "active",
    },
    {
      title: "Subdomain & Hosting",
      slug: "subdomain-hosting",
      description:
        "Gunakan subdomain untuk memberi nama dan hosting untuk menyimpan file sistem elektronik Anda",
      status: "active",
    },
    {
      title: "Email",
      slug: "email",
      description:
        "Email @jogjaprov.go.id untuk keperluan pribadi ataupun instansi",
      status: "active",
    },
    {
      title: "TTE",
      slug: "tte",
      description: "Layanan penerbitan Tanda Tangan Elektronik",
      status: "active",
    },
    {
      title: "VPN",
      slug: "vpn",
      description: "Layanan network lokal Pemda DIY",
      status: "active",
    },
  ];

  const handleServiceSelect = (card) => {
    navigate(`/dashboard/layanan/${card.slug}`);
  };

  return (
    <div className="dashboard-container">
      <Sidebar
        dimmed={searchModalOpen}
        isOpen={sidebarOpen}
        onToggle={setSidebarOpen}
      />
      <Header
        onSearchToggle={setSearchModalOpen}
        onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
        dimmed={headerDimmed}
      />
      <div className="dashboard-content">
        <div className="dashboard-header-spacer"></div>
        <h1 className="dashboard-title">Daftar Layanan</h1>

        <div className="service-cards-grid">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="service-card service-card-clickable"
              onClick={() => handleServiceSelect(card)}
            >
              <div className="service-card-content">
                <h3 className="service-card-title">{card.title}</h3>
                <p className="service-card-description">{card.description}</p>
              </div>
              <div className="service-card-footer">
                <button
                  className={`service-button ${
                    card.status === "inactive"
                      ? "service-button-inactive"
                      : "service-button-active"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceSelect(card);
                  }}
                >
                  Pilih {card.status === "inactive" ? "( Tidak Aktif )" : ""}
                  <span className="service-button-icon">›</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layanan;
