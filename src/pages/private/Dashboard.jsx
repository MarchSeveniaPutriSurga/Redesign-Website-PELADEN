import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { FiNavigation, FiGlobe } from "react-icons/fi";

const Dashboard = () => {
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

  // Helper function for creating gradient from color
  const createGradient = (baseColor) => {
    if (baseColor.startsWith("#")) {
      const r = parseInt(baseColor.slice(1, 3), 16);
      const g = parseInt(baseColor.slice(3, 5), 16);
      const b = parseInt(baseColor.slice(5, 7), 16);

      const darkerR = Math.max(0, r - 40);
      const darkerG = Math.max(0, g - 40);
      const darkerB = Math.max(0, b - 40);

      const darkerColor = `#${darkerR.toString(16).padStart(2, "0")}${darkerG
        .toString(16)
        .padStart(2, "0")}${darkerB.toString(16).padStart(2, "0")}`;

      return `linear-gradient(135deg, ${baseColor}, ${darkerColor})`;
    }

    return `linear-gradient(135deg, ${baseColor}, ${baseColor}dd)`;
  };

  // data for cards with React icons
  const cardData = [
    {
      id: 1,
      title: "Rekomendasi",
      count: 129,
      icon: FiNavigation,
      color: "#E3F2FD",
    },
    {
      id: 2,
      title: "Subdomain/Hosting",
      count: 26,
      icon: FiGlobe,
      color: "#FFF8E1",
    },
    {
      id: 2,
      title: "Subdomain/Hosting",
      count: 26,
      icon: FiGlobe,
      color: "#FFF8E1",
    },
    {
      id: 2,
      title: "Subdomain/Hosting",
      count: 26,
      icon: FiGlobe,
      color: "#FFF8E1",
    },
    {
      id: 2,
      title: "Subdomain/Hosting",
      count: 26,
      icon: FiGlobe,
      color: "#FFF8E1",
    },
    {
      id: 2,
      title: "Subdomain/Hosting",
      count: 26,
      icon: FiGlobe,
      color: "#FFF8E1",
    },
    {
      id: 2,
      title: "Subdomain/Hosting",
      count: 26,
      icon: FiGlobe,
      color: "#FFF8E1",
    },
    {
      id: 2,
      title: "Subdomain/Hosting",
      count: 26,
      icon: FiGlobe,
      color: "#FFF8E1",
    },
  ];

  // data for activities
  const activityData = [
    { id: 1, title: "Tte - Draft", date: "10 Mar 2025 13:42", status: "draft" },
    { id: 2, title: "Tte - Draft", date: "27 Feb 2025 13:38", status: "draft" },
    {
      id: 3,
      title: "Subdomain - Draft",
      date: "20 Feb 2025 16:41",
      status: "draft",
    },
    {
      id: 4,
      title: "Layanan - Diterima",
      date: "15 Feb 2025 09:30",
      status: "accepted",
    },
    {
      id: 5,
      title: "Backup - Selesai",
      date: "10 Feb 2025 14:22",
      status: "completed",
    },
    {
      id: 6,
      title: "Aduan - Dalam Proses",
      date: "5 Feb 2025 11:15",
      status: "processing",
    },
    {
      id: 7,
      title: "Rekomendasi - Diterima",
      date: "1 Feb 2025 08:45",
      status: "accepted",
    },
  ];

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
        <h1 className="dashboard-title">Dashboard</h1>

        {/* Cards Container */}
        <div className="dashboard-cards-scroll">
          <div className="dashboard-cards-container">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="dashboard-card"
                style={{ backgroundColor: card.color }}
              >
                <div className="dashboard-card-content">
                  <div
                    className="dashboard-card-icon"
                    style={{
                      background: createGradient(card.color),
                    }}
                  >
                    <card.icon size={24} color="#574240" />
                  </div>
                  <div className="dashboard-card-info">
                    <div className="dashboard-card-count">{card.count}</div>
                    <div className="dashboard-card-title">{card.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info and Activity Section */}
        <div className="dashboard-info-activity">
          {/* Info Section */}
          <div className="dashboard-info-section">
            <h2 className="dashboard-section-title">Informasi Terbaru</h2>
            <div className="dashboard-info-content">
              <p>Belum ada informasi (coming soon)</p>
            </div>
          </div>

          {/* Activity Section */}
          <div className="dashboard-activity-section">
            <h2 className="dashboard-section-title">Aktivitas</h2>
            <div className="dashboard-timeline">
              {activityData.map((activity) => (
                <div key={activity.id} className="dashboard-timeline-item">
                  <div
                    className={`dashboard-timeline-dot dashboard-timeline-dot-${activity.status}`}
                  >
                    <span className="dashboard-timeline-dot-inner"></span>
                  </div>
                  <div className="dashboard-timeline-content">
                    <div className="dashboard-timeline-title">
                      {activity.title}
                    </div>
                    <div className="dashboard-timeline-date">
                      {activity.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
