import React from "react";

const BsnSupportComponent = () => {
  return (
    <div className="container mt-3 border-top pt-3 d-flex align-items-center">
      <img
        src="/bssn-logo.jpg"
        alt="Balai Sertifikasi Elektronik"
        style={{ width: "50px", height: "50px", marginRight: "10px" }}
      />
      <div>
        <h6 className="m-0 fw-bold text-primary">
          Balai Sertifikasi Elektronik
        </h6>
        <p className="m-0 text-muted" style={{ fontSize: "14px" }}>
          peladen.jogjaprov.go.id sudah mendukung tanda tangan elektronik dari
          Balai Sertifikasi Elektronik (BSrE) Badan Siber dan Sandi Negara
          (BSSN)
        </p>
      </div>
    </div>
  );
};

export default BsnSupportComponent;
