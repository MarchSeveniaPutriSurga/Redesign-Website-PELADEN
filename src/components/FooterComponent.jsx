import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Tentang */}
          <div className="col-md-3">
            <h5 className="fw-bold">Tentang</h5>
            <p>PELADEN</p>
          </div>

          {/* Layanan */}
          <div className="col-md-3">
            <h5 className="fw-bold">Layanan</h5>
            <ul className="list-unstyled">
              <li>Rekomendasi</li>
              <li>Subdomain</li>
              <li>Hosting</li>
              <li>Tanda Tangan Elektronik</li>
              <li>Cloud Storage</li>
            </ul>
          </div>

          {/* Kontak Kami */}
          <div className="col-md-3">
            <h5 className="fw-bold">Kontak Kami</h5>
            <ul className="list-unstyled">
              <li>Discord</li>
              <li>Email</li>
              <li>Tel: (0274) 373444</li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div className="col-md-3">
            <h5 className="fw-bold">Sosial Media</h5>
            <ul className="list-unstyled">
              <li>Website</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
