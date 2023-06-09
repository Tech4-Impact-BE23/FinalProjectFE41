import React from 'react';
import { FaUser } from 'react-icons/fa';
import forumbg from '../assets/forumbg.jpeg';

const IsiForum = () => {
  return (
    <div>
      <img src={forumbg} className="img-fluid" alt="forum" />
      <div className="container shadow" style={{ marginTop: '-100px', zIndex: '1', position: 'relative', backgroundColor: 'white' }}>
        <div className="text-center m-3">
          <h2 className="text-center font-weight-bold" style={{ fontSize: '2rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>Forum</h2>
        </div>
        <div className="row">
          <div className="col-6" style={{ top: '100px', border: '1px solid black', borderRadius: '5px', padding: '15px', width: '300px', margin: '30px' }}>
            {/* Bagian Filter Forum */}
            <div className="position-sticky">
              <div className="d-flex flex-column align-items-start p-0 gap-15 border-bottom pb-3 px-4">
                <h4 className="mb-3">Filter Forum</h4>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="semuaDiskusi" />
                  <label className="form-check-label" htmlFor="semuaDiskusi">
                    Semua Diskusi
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="pertanyaanSaya" />
                  <label className="form-check-label" htmlFor="pertanyaanSaya">
                    Pertanyaan Saya
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="jawabanSaya" />
                  <label className="form-check-label" htmlFor="jawabanSaya">
                    Jawaban Saya
                  </label>
                </div>
                {/* Tambahkan elemen-elemen filter sesuai kebutuhan */}
              </div>
            </div>
          </div>
          <div className="col-6 d-flex align-items-start">
            {/* Bagian Ikon dan Input */}
            <FaUser size={30} style={{ marginTop: '30px', marginRight: '10px' }} />
            <input type="text" className="form-control" style={{ marginTop: '30px' }} placeholder="Ada yang ingin Anda tanyakan?" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsiForum;
