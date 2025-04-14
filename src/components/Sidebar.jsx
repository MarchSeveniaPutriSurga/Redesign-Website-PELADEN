import React, { useState, useEffect } from "react";
import { FaCog, FaBars, FaTimes } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import { TbRouteSquare } from "react-icons/tb";
import { useLocation } from "react-router-dom";

const Sidebar = ({ dimmed, isOpen, onToggle }) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && !isOpen) {
        onToggle(true);
      } else if (mobile && isOpen) {
        onToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onToggle]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (isMobile) {
      onToggle(false);
    }
  };

  const toggleSidebar = () => {
    onToggle(!isOpen);
  };

  return (
    <>
      <div
        className={`peladen-sidebar ${
          isOpen ? "sidebar-open" : "sidebar-closed"
        } ${dimmed ? "sidebar-dimmed" : ""}`}
      >
        <div className="peladen-sidebar-header">
          <div className="peladen-sidebar-logo-container">
            <img
              src="/logo-peladen.png"
              alt="peladen"
              className="peladen-sidebar-logo-img"
            />
            <div className="peladen-sidebar-title-container">
              <h1 className="peladen-sidebar-title">PELADEN</h1>
              <p className="peladen-sidebar-version">Versi 2.0.0</p>
            </div>
          </div>

          {isMobile && isOpen && (
            <div className="sidebar-close-button" onClick={toggleSidebar}>
              <FaTimes />
            </div>
          )}
        </div>

        <div className="peladen-sidebar-org">
          <div className="peladen-sidebar-org-content">
            <img
              src="/ava1.jpg"
              alt="nama_user_login"
              className="peladen-sidebar-avatar"
            />
            <div className="peladen-sidebar-org-text">
              <h2 className="peladen-sidebar-org-title">
                Dinas Komunikasi dan Informatika
              </h2>
              <p className="peladen-sidebar-org-subtitle">admin opd</p>
            </div>
          </div>
        </div>

        <div className="peladen-sidebar-menu">
          <h3 className="peladen-sidebar-menu-title">MENU</h3>
          <ul className="peladen-sidebar-menu-list">
            <li
              className={`peladen-sidebar-menu-item ${
                activeMenu === "/dashboard"
                  ? "peladen-sidebar-menu-item-active"
                  : ""
              }`}
            >
              <a
                href="/dashboard"
                className="peladen-sidebar-menu-link"
                onClick={() => handleMenuClick("/dashboard")}
              >
                <RiDashboard2Line
                  size={22}
                  className={`peladen-sidebar-menu-icon ${
                    activeMenu === "/dashboard"
                      ? "peladen-sidebar-menu-icon-active"
                      : ""
                  }`}
                />
                <span className="menu-item-text">Dashboard</span>
              </a>
            </li>
            <li
              className={`peladen-sidebar-menu-item ${
                activeMenu === "/tracking"
                  ? "peladen-sidebar-menu-item-active"
                  : ""
              }`}
            >
              <a
                href="/tracking"
                className="peladen-sidebar-menu-link"
                onClick={() => handleMenuClick("/tracking")}
              >
                <TbRouteSquare
                  size={21}
                  className={`peladen-sidebar-menu-icon ${
                    activeMenu === "/tracking"
                      ? "peladen-sidebar-menu-icon-active"
                      : ""
                  }`}
                />
                <span className="menu-item-text">Tracking</span>
              </a>
            </li>
            <li
              className={`peladen-sidebar-menu-item ${
                activeMenu === "/setting"
                  ? "peladen-sidebar-menu-item-active"
                  : ""
              }`}
            >
              <a
                href="/setting"
                className="peladen-sidebar-menu-link"
                onClick={() => handleMenuClick("/setting")}
              >
                <FaCog
                  className={`peladen-sidebar-menu-icon ${
                    activeMenu === "/setting"
                      ? "peladen-sidebar-menu-icon-active"
                      : ""
                  }`}
                />
                <span className="menu-item-text">Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Sidebar;
