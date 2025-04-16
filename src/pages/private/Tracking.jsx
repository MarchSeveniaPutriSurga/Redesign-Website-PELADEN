import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import {
  FiSearch,
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiMoreVertical,
} from "react-icons/fi";

const Tracking = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [headerDimmed, setHeaderDimmed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  // Data layanan untuk tabel
  const layananData = [
    {
      id: 1,
      tipe: "Aduan",
      keterangan: "test",
      requestor: "dinas_komunikasi_dan...",
      status: "Draft",
      createdAt: "2024-11-20",
    },
    {
      id: 2,
      tipe: "Aduan",
      keterangan: "testing",
      requestor: "dinas_komunikasi_dan...",
      status: "Draft",
      createdAt: "2024-10-21",
    },
    {
      id: 3,
      tipe: "Aduan",
      keterangan: "Anik",
      requestor: "dinas_komunikasi_dan...",
      status: "Draft",
      createdAt: "2023-12-11",
    },
  ];

  // Data keterangan status
  const statusData = [
    {
      status: "Open",
      description: "Data permohonan sudah terkirim",
      color: "#E8F5E9",
    },
    {
      status: "Activated",
      description: "Permohonan telah diaktivasi",
      color: "#E8F5E9",
    },
  ];

  const totalPages = Math.ceil(layananData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, layananData.length);
  const currentData = layananData.slice(startIndex, endIndex);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const handleAddLayanan = () => {
    // Implementasi fungsi tambah layanan
    alert("Tambah layanan clicked");
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
        {/* Header dan Tombol Tambah */}
        <div className="tracking-header">
          <h1 className="tracking-title">Tracking Layanan</h1>
          <Link
            to="/dashboard/layanan"
            className="tambah-layanan-btn"
            style={{ textDecoration: "none" }}
          >
            <FiPlus /> Tambah Layanan
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <FiSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Cari layanan (tekan enter)..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        {/* Tabel Layanan */}
        <div className="layanan-table-container">
          <table className="layanan-table">
            <thead>
              <tr>
                <th>Tipe</th>
                <th>Keterangan</th>
                <th>Requestor</th>
                <th>Status</th>
                <th>Created at</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="tipe-cell">
                      <div className="tipe-icon">?</div>
                      <div>{item.tipe}</div>
                    </div>
                  </td>
                  <td>{item.keterangan}</td>
                  <td>{item.requestor}</td>
                  <td>
                    <span
                      className={`status-badge ${item.status.toLowerCase()}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>{item.createdAt}</td>
                  <td>
                    <button className="action-button">
                      <FiMoreVertical />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="pagination-container">
          <div className="pagination-controls">
            <button
              className="pagination-button"
              onClick={handleFirstPage}
              disabled={currentPage === 1}
            >
              <FiChevronsLeft />
            </button>
            <button
              className="pagination-button"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <FiChevronLeft />
            </button>
            <div className="pagination-pages">
              <span>{currentPage}</span>
            </div>
            <button
              className="pagination-button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <FiChevronRight />
            </button>
            <button
              className="pagination-button"
              onClick={handleLastPage}
              disabled={currentPage === totalPages}
            >
              <FiChevronsRight />
            </button>
          </div>

          <div className="pagination-info">
            <span>Rows per page: </span>
            <select
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="rows-select"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span>{`${startIndex + 1}–${endIndex} of ${
              layananData.length
            }`}</span>
          </div>
        </div>
        {/* Keterangan Status */}
        <div className="status-info-container">
          <h3 className="status-info-title">Keterangan</h3>
          {statusData.map((item, index) => (
            <div
              key={index}
              className="status-info-row"
              style={{ backgroundColor: item.color }}
            >
              <div className="status-info-label">{item.status}</div>
              <div className="status-info-desc">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracking;
