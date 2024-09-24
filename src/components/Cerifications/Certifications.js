import React from 'react';
import './Certifications.css'; // Import your CSS file for styling
import { certifications } from '../../Static/static';

const Certifications = () => {
  const handleViewCertificate = (url) => {
    if (url === 'Oracle') {
      window.open(`${process.env.PUBLIC_URL}/oracleGenerativeAiCertificate.pdf`, '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="certifications" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="card-content">
                <h3 className="card-title">{cert.title}</h3>
                <p className="card-issuer">{cert.issuer}</p>
                <p className="card-date">{cert.date}</p>
                <button
                  className="details-btn"
                  onClick={() => handleViewCertificate(cert.certificateURL)}
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
