import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = ({ onSearchToggle, onSidebarToggle, dimmed }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const searchRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (
        showSearchModal &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        handleSearchToggle(false);
      }
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchModal, isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setShowProfileDropdown(false);
        setShowNotifications(false);
        handleSearchToggle(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const handleSearchToggle = (state) => {
    setShowSearchModal(state);
    if (onSearchToggle) {
      onSearchToggle(state);
    }
  };

  const toggleMobileMenu = () => {
    if (onSidebarToggle) {
      onSidebarToggle();
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      setShowProfileDropdown(false);
    }
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    if (!showProfileDropdown) {
      setShowNotifications(false);
    }
  };

  const headerIcons = (
    <>
      <button
        className="header-search-btn"
        onClick={() => handleSearchToggle(true)}
      >
        <FaSearch />
      </button>

      <div className="header-notification" ref={notificationRef}>
        <button className="header-icon-btn" onClick={toggleNotifications}>
          <FaBell />
          <span className="notification-badge">3</span>
        </button>
        {showNotifications && (
          <div
            className={`notification-dropdown ${
              isMobileMenuOpen ? "notification-dropdown-mobile" : ""
            }`}
          >
            <h3>NOTIFICATIONS</h3>
            <div className="notification-item">
              <div className="notification-icon">🔍</div>
              <div className="notification-content">
                <p>
                  Edit your information in a swipe Sint occae cat cupidat at non
                  proident, sunt in culpa qui officia deserunt mollit anim.
                </p>
                <span>Feb 12, 2024</span>
              </div>
            </div>
            <div className="notification-item">
              <div className="notification-icon">🔍</div>
              <div className="notification-content">
                <p>
                  Edit your information in a swipe Sint occae cat cupidat at non
                  proident, sunt in culpa qui officia deserunt mollit anim.
                </p>
                <span>Feb 9, 2024</span>
              </div>
            </div>
            <div className="notification-item">
              <div className="notification-icon">📌</div>
              <div className="notification-content">
                <p>
                  Say goodbye to paper receipts! Sint occae cat cupidat at non
                  proident, sunt in culpa qui officia deserunt mollit anim.
                </p>
                <span>Jan 24, 2024</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="header-profile" ref={dropdownRef}>
        <button className="header-profile-btn" onClick={toggleProfileDropdown}>
          <div className="avatar-container">
            <img src="/ava1.jpg" alt="User" className="avatar-img" />
          </div>
        </button>

        {showProfileDropdown && (
          <div
            className={`profile-dropdown ${
              isMobileMenuOpen ? "profile-dropdown-mobile" : ""
            }`}
          >
            <div className="profile-dropdown-header">
              <h4>
                Dinas Komunikasi
                <br />
                dan Informatika
              </h4>
              <p>admin opd</p>
            </div>
            <a href="#" className="dropdown-item">
              <FaCog className="dropdown-icon" />
              <span>Settings</span>
            </a>
            <a href="/login" className="dropdown-item">
              <FaSignOutAlt className="dropdown-icon" />
              <span>Sign Out</span>
            </a>
          </div>
        )}
      </div>
    </>
  );

  return (
    <header
      className={`header ${dimmed ? "header-dimmed" : ""}`}
      ref={searchRef}
    >
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <FaBars />
      </button>

      <div className="header-right desktop-menu">{headerIcons}</div>

      {isMobileMenuOpen && (
        <div className="mobile-menu" ref={mobileMenuRef}>
          {headerIcons}
        </div>
      )}

      {showSearchModal && (
        <div className="search-modal">
          <div className="search-modal-content">
            <div className="search-header">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search Anything..."
                className="search-input"
                autoFocus
              />
              <button
                className="close-modal"
                onClick={() => handleSearchToggle(false)}
              >
                &times;
              </button>
            </div>

            <div className="search-sections">
              <section className="search-section">
                <h2>RECENT SEARCHES</h2>
                <ul>
                  <li>Form Builder - 23 hours on-demand video</li>
                  <li>Access Mosaic on mobile and TV</li>
                  <li>Product Update - Q4 2024</li>
                  <li>Master Digital Marketing Strategy course</li>
                  <li>Dedicated forms for products</li>
                </ul>
              </section>

              <section className="search-section">
                <h2>RECENT PAGES</h2>
                <ul>
                  <li>
                    <strong>Messages</strong> - Conversation / ... / Mike Mills
                  </li>
                  <li>
                    <strong>Messages</strong> - Conversation / ... / Eva Patrick
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
