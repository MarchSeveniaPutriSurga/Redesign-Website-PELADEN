import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { FaTimesCircle } from "react-icons/fa";

const DetailLayanan = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [headerDimmed, setHeaderDimmed] = useState(false);
  const [activeTab, setActiveTab] = useState("form"); // "form" or "status"
  const [formData, setFormData] = useState({
    simpanData: false,
    tandaTangan: false,
    distribusi: false,
    jenisAduan: "",
    namaPemohon: "",
    nipPemohon: "",
    nikPemohon: "",
    pangkatGolongan: "",
    jabatan: "",
    unitKerja: "Pemerintah Daerah Daerah Istimewa Yogyakarta",
    instansi: "",
    kota: "Yogyakarta",
    daerah: "Daerah Istimewa Yogyakarta",
    email: "",
    telp: "",
    detailAduan: "",
    fileTitle: "",
    fileDescription: "",
    file: null,
  });

  // Get the current service title based on slug
  const getServiceInfo = () => {
    const serviceCards = [
      {
        title: "Rekomendasi",
        slug: "rekomendasi",
        description: "Pengajuan rekomendasi pembuatan Sistem Elektronik",
      },
      {
        title: "SPLP",
        slug: "splp",
        description: "Layanan fasilitasi pemanfaatan SPLP",
      },
      {
        title: "Backup",
        slug: "backup",
        description: "Layanan fasilitasi backup",
      },
      {
        title: "Web OPD",
        slug: "web-opd",
        description: "Layanan fasilitasi template website OPD",
      },
      {
        title: "Subdomain & Hosting",
        slug: "subdomain-hosting",
        description:
          "Gunakan subdomain untuk memberi nama dan hosting untuk menyimpan file sistem elektronik Anda",
      },
      {
        title: "Email",
        slug: "email",
        description:
          "Email @jogjaprov.go.id untuk keperluan pribadi ataupun instansi",
      },
      {
        title: "TTE",
        slug: "tte",
        description: "Layanan penerbitan Tanda Tangan Elektronik",
      },
      {
        title: "VPN",
        slug: "vpn",
        description: "Layanan network lokal Pemda DIY",
      },
    ];

    return (
      serviceCards.find((service) => service.slug === slug) || {
        title: "Layanan",
        description: "Detail layanan tidak ditemukan",
      }
    );
  };

  const serviceInfo = getServiceInfo();

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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    alert("Data berhasil disimpan!");
    navigate("/dashboard/layanan");
  };

  const handleBack = () => {
    navigate("/dashboard/layanan");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      // 5MB limit
      alert("File terlalu besar. Maksimal 5MB");
      return;
    }
    setFormData({
      ...formData,
      file: file,
    });
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
        <div className="detail-layanan-header">
          <button onClick={handleBack} className="back-button">
            ← Detail
          </button>
          <h2 className="service-title">{serviceInfo.title}</h2>
        </div>

        <div className="form-container">
          <div className="form-section-tabs">
            <div
              className={`form-tab ${activeTab === "form" ? "active" : ""}`}
              onClick={() => setActiveTab("form")}
            >
              <div className="form-tab-inner">
                <div className="tab-icon-container">
                  <div className="tab-icon red">
                    <span>!</span>
                  </div>
                </div>
                <div className="tab-content">
                  <h3>Formulir Permohonan Aduan</h3>
                  <p>Klik di sini untuk memulai data</p>
                </div>
              </div>
            </div>

            <div
              className={`form-tab ${activeTab === "status" ? "active" : ""}`}
              onClick={() => setActiveTab("status")}
            >
              <div className="form-tab-inner">
                <div className="tab-icon-container">
                  <div className="tab-icon yellow">
                    <span>⏱</span>
                  </div>
                </div>
                <div className="tab-content">
                  <h3>Status Permohonan</h3>
                  <p>Klik di sini untuk melihat status</p>
                </div>
              </div>
            </div>
          </div>

          {activeTab === "form" ? (
            <>
              <h3 className="form-title">Formulir Permohonan Aduan</h3>

              <form onSubmit={handleSubmit} className="detail-form">
                <div className="form-circle-options">
                  <div className="circle-option">
                    <div className="circle-icon">
                      <FaTimesCircle className="circle-icon-svg" />
                    </div>
                    <label>Simpan Data</label>
                  </div>

                  <div className="circle-option">
                    <div className="circle-icon">
                      <FaTimesCircle className="circle-icon-svg" />
                    </div>
                    <label>Tanda Tangan (TTE/Manual)</label>
                  </div>

                  <div className="circle-option">
                    <div className="circle-icon">
                      <FaTimesCircle className="circle-icon-svg" />
                    </div>
                    <label>Distribusi</label>
                  </div>
                </div>

                <div className="form-section jenis-aduan-section">
                  <div className="section-title">Jenis Aduan</div>

                  <div className="aduan-options">
                    <div className="aduan-option">
                      <label className="radio-container">
                        <input
                          type="radio"
                          name="jenisAduan"
                          value="Aduan Layanan"
                          checked={formData.jenisAduan === "Aduan Layanan"}
                          onChange={handleRadioChange}
                        />
                        <span className="radio-mark"></span>
                        <span className="radio-label">Aduan Layanan</span>
                      </label>
                    </div>

                    <div className="aduan-option">
                      <label className="radio-container">
                        <input
                          type="radio"
                          name="jenisAduan"
                          value="Aduan Sistem"
                          checked={formData.jenisAduan === "Aduan Sistem"}
                          onChange={handleRadioChange}
                        />
                        <span className="radio-mark"></span>
                        <span className="radio-label">Aduan Sistem</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-content">
                  <div className="form-left-section">
                    <div className="form-group">
                      <label htmlFor="namaPemohon">
                        Nama Lengkap Pemohon *
                      </label>
                      <input
                        type="text"
                        id="namaPemohon"
                        name="namaPemohon"
                        value={formData.namaPemohon}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="nipPemohon">NIP Pemohon *</label>
                      <input
                        type="text"
                        id="nipPemohon"
                        name="nipPemohon"
                        value={formData.nipPemohon}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="nikPemohon">NIK Pemohon *</label>
                      <input
                        type="text"
                        id="nikPemohon"
                        name="nikPemohon"
                        value={formData.nikPemohon}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="pangkatGolongan">
                        Pangkat/Golongan Pemohon *
                      </label>
                      <input
                        type="text"
                        id="pangkatGolongan"
                        name="pangkatGolongan"
                        value={formData.pangkatGolongan}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="jabatan">Jabatan Pemohon *</label>
                      <input
                        type="text"
                        id="jabatan"
                        name="jabatan"
                        value={formData.jabatan}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="unitKerja">Unit Kerja/Instansi *</label>
                      <input
                        type="text"
                        id="unitKerja"
                        name="unitKerja"
                        value={formData.unitKerja}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="instansi">Instansi Pemohon *</label>
                      <input
                        type="text"
                        id="instansi"
                        name="instansi"
                        value={formData.instansi}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="kota">Kota Pemohon *</label>
                      <input
                        type="text"
                        id="kota"
                        name="kota"
                        value={formData.kota}
                        onChange={handleInputChange}
                        required
                        readOnly
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="daerah">Daerah/Provinsi *</label>
                      <input
                        type="text"
                        id="daerah"
                        name="daerah"
                        value={formData.daerah}
                        onChange={handleInputChange}
                        required
                        readOnly
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Alamat Email Pemohon *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="telp">No. Telepon Pemohon *</label>
                      <input
                        type="tel"
                        id="telp"
                        name="telp"
                        value={formData.telp}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="detailAduan">Detail Aduan *</label>
                      <textarea
                        id="detailAduan"
                        name="detailAduan"
                        value={formData.detailAduan}
                        onChange={handleInputChange}
                        required
                        rows={5}
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-right-section">
                    <div className="information-section">
                      <h3>Informasi</h3>
                      <ol>
                        <li>
                          Untuk jenis permintaan aduan dan form backlog
                          permintaan mohon di-isi lebih detail supaya lebih
                          mudah diidentifikasi permasalahan
                        </li>
                        <li>
                          Tanda tangan dibutuhkan permohonan untuk
                          ditindaklanjuti pemohon aduan
                        </li>
                      </ol>
                    </div>

                    <div className="attachment-section">
                      <h3>Attachment</h3>
                      <p>
                        Silakan tambahkan file file pendukung jika dibutuhkan
                        (opsional)
                      </p>

                      <div className="file-upload-container">
                        <input
                          type="text"
                          placeholder="Judul"
                          className="upload-title"
                          name="fileTitle"
                          value={formData.fileTitle}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          placeholder="Penjelasan"
                          className="upload-description"
                          name="fileDescription"
                          value={formData.fileDescription}
                          onChange={handleInputChange}
                        />
                        <div className="file-upload-box">
                          <input
                            type="file"
                            id="file-upload"
                            className="file-input"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          />
                          <label
                            htmlFor="file-upload"
                            className="upload-button"
                          >
                            <span className="upload-icon">+</span> Pilih File
                          </label>
                          <span className="upload-text">
                            *maks with 5mb filesize
                          </span>
                        </div>
                        {formData.file && (
                          <div className="file-preview">
                            <span className="file-name">
                              {formData.file.name}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-submit">
                  <button type="submit" className="submit-button">
                    Simpan Data
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="status-container">
              <div className="status-empty">
                <div className="status-icon">
                  <span>?</span>
                </div>
                <p>Belum ada data. Silahkan melakukan proses data.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailLayanan;
