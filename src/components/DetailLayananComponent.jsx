import React from 'react';
import { FaGlobe, FaServer, FaEnvelope, FaShieldAlt, FaCloud } from 'react-icons/fa';

const DetailLayananComponent = () => {
  const layananItems = [
    {
      id: 'rekomendasi',
      title: 'Rekomendasi',
      bgStyle: { backgroundImage: 'linear-gradient(to right, #FFFFFF, #d8b4fe)' },
      icon: <FaGlobe className="text-white" />,
      description: 'Pelaksanaan rencana dan anggaran Sistem Pemerintahan Berbasis Elektronik oleh Organisasi Perangkat Daerah di lingkungan Pemerintah Daerah Istimewa Yogyakarta wajib disertai Rekomendasi Teknis Pelaksanaan Sistem Pemerintahan Berbasis Elektronik Pemerintah Daerah Daerah Istimewa Yogyakarta. Rekomendasi diajukan oleh Organisasi Perangkat Daerah kepada Dinas Komunikasi dan Informatika Provinsi Yogyakarta.',
      steps: [
        {
          title: 'OPD melakukan pengajuan permohonan rekomendasi pelaksanaan investasi TIK kepada Kepala Dinas Komunikasi dan Informatika DIY pada n-1 tahun anggaran. Di dalam permohonan rekomendasi pelaksanaan investasi TIK, OPD menyertakan:',
          substeps: [
            'analisis kebutuhan;',
            'analisis biaya; dan',
            'spesifikasi teknis belanja TIK yang direncanakan.',
          ]
        },
        {
          title: 'Dinas Komunikasi dan Informatika mengevaluasi permohonan rekomendasi pelaksanaan investasi TIK dengan mengacu pada Renstra TIK.',
          substeps: []
        },
        {
          title: 'Berdasarkan hasil analisis sebagaimana dimaksud pada tahap 2, Dinas Komunikasi dan Informatika:',
          substeps: [
            'memberikan rekomendasi; atau',
            'menolak permohonan.',
          ]
        },
        {
          title: 'Apabila permohonan rekomendasi ditolak, OPD melakukan penyesuaian atas pelaksanaan investasi TIK dalam rencana kerja anggaran sesuai saran Dinas Komunikasi dan Informatika.',
          substeps: []
        }
      ]
    },
    {
      id: 'subdomain',
      title: 'Subdomain',
      bgStyle: { backgroundImage: 'linear-gradient(to right, #FFFFFF, #fde68a)' },
      icon: <FaGlobe className="text-white" />,
      description: 'Diskominfo DIY menyediakan layanan subdomain *.jogjaprov.go.id bagi OPD dan stakeholder Pemda DIY. Subdomain merupakan nama unik pengganti alamat IP untuk mempermudah mengakses alamat suatu Sistem Elektronik. Subdomain *.jogjaprov.go.id menunjukkan bahwa Sistem Elektronik tersebut dikelola oleh Pemda DIY.',
      steps: []
    },
    {
      id: 'hosting',
      title: 'Hosting',
      bgStyle: { backgroundImage: 'linear-gradient(to right, #FFFFFF, #d8b4fe)' },
      icon: <FaServer className="text-white" />,
      description: 'Diskominfo DIY menyediakan layanan hosting untuk aplikasi-aplikasi yang dikelola OPD dan stakeholder Pemda DIY. Hosting adalah penyimpanan utama file dan data website agar selalu dapat berjalan dan diakses oleh publik. Layanan ini diselenggarakan berdasarkan kewenangan Diskominfo DIY untuk menerbitkan ijin dan amanat dari Peraturan Gubernur nomor 67 tahun 2022 tentang Tata Kelola Teknologi Informasi dan Komunikasi terutama pasal 15.',
      steps: []
    },
    {
      id: 'email',
      title: 'Email',
      bgStyle: { backgroundImage: 'linear-gradient(to right, #FFFFFF, #bbf7d0)' },
      icon: <FaEnvelope className="text-white" />,
      description: 'Diskominfo DIY menyediakan layanan email dengan alamat https://mail.jogjaprov.go.id. Penggunaan email resmi Pemda DIY ini diharapkan dapat meningkatkan kepercayaan masyarakat dalam memberikan layanan publik dan menjadi komunikasi dengan pihak lainnya. Layanan email meliputi pembuatan email baru, reset password, dan pengelolaan kapasitas kotak masuk. Permintaan untuk layanan email resmi (@jogjaprov.go.id) dapat dimanfaatkan oleh seluruh ASN Pemda DIY. Layanan email instansi dapat dimanfaatkan oleh seluruh OPD dengan menunjuk salah satu ASN sebagai penanggungjawab (PIC) terkait.',
      steps: []
    },
    {
      id: 'tte',
      title: 'TTE',
      bgStyle: { backgroundImage: 'linear-gradient(to right, #FFFFFF, #d8b4fe)' },
      icon: <FaShieldAlt className="text-white" />,
      description: 'Diskominfo DIY memberikan layanan pengggunaan sertifikat elektronik yang diterbitkan oleh Balai Sertifikasi Elektronik (BSrE) Badan Siber dan Sandi Negara (BSSN), untuk mendukung pembuatan dan penandatanganan dokumen secara elektronik melalui https://tte.jogjaprov.go.id maupun diintegrasikan dalam sebuah sistem elektronik. Dengan penggunaan sertifikat elektronik ini diharapkan dapat:',
      benefits: [
        'Meningkatkan keamanan informasi dari sistem elektronik yang dikelola Pemda DIY.',
        'Meningkatkan kapabilitas dan tata kelola keamanan informasi dalam penyelenggaraan sistem elektronik di Pemda DIY.',
        'Memenuhi kebutuhan otentikasi dan tak penyangkalan dokumen elektronik.',
        'Meningkatkan efektivitas pelayanan publik dan kepercayaan masyarakat.'
      ],
      services: [
        'Pendaftaran dan verifikasi dokumen Sertifikat Elektronik.',
        'Pendampingan Penerbitan Sertifikat Elektronik.',
        'Pendampingan implementasi sertifikat elektronik.',
        'Pendampingan penggunaan sertifikat elektronik dengan Aplikasi Sadewa.',
        'Pembaharuan sertifikat elektronik.',
        'Pencabutan sertifikat elektronik.'
      ]
    },
    {
      id: 'cloud-storage',
      title: 'Cloud Storage',
      bgStyle: { backgroundImage: 'linear-gradient(to right, #FFFFFF, #fde68a)' },
      icon: <FaCloud className="text-white" />,
      description: 'Diskominfo DIY menggunakan teknologi opensource OwnCloud pada alamat https://cloud.jogjaprov.go.id, yang dapat digunakan untuk menyimpan dan berbagi file secara online seperti Google Drive, Dropbox, dll. Sistem ini sudah terintegrasi dengan email Pemda DIY, sehingga pengguna dapat langsung menggunakan layanan ini dengan login menggunakan alamat email @jogjaprov.go.id.',
      steps: []
    }
  ];

  return (
    <div className="container py-4">
      {layananItems.map((item) => (
        <div 
          key={item.id} 
          id={item.id} 
          className="card mb-4 shadow-sm"
          style={{ ...item.bgStyle, backgroundSize: 'cover', padding: '20px', borderRadius: '10px' }}
        >
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                {item.icon}
              </div>
              <h2 className="card-title m-0 fs-3 fw-bold">{item.title}</h2>
            </div>
            
            <p>{item.description}</p>
            
            {item.steps && item.steps.length > 0 && (
              <div className="mb-3">
                <p className="fw-semibold">Tahapan pengajuan:</p>
                <ol className="ps-3">
                  {item.steps.map((step, index) => (
                    <li key={index} className="mb-2">
                      {step.title}
                      {step.substeps && step.substeps.length > 0 && (
                        <ol type="a" className="ps-4 mt-1">
                          {step.substeps.map((substep, subIndex) => (
                            <li key={subIndex}>{substep}</li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {item.benefits && item.benefits.length > 0 && (
              <div className="mb-3">
                <ol className="ps-3">
                  {item.benefits.map((benefit, index) => (
                    <li key={index} className="mb-1">{benefit}</li>
                  ))}
                </ol>
              </div>
            )}

            <div className="mt-3">
              <button className="btn btn-primary">
                Ajukan Sekarang
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailLayananComponent;