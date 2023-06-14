import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import forumbg from '../assets/forumbg.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import CardDetailForum from './CardDetailForum';

const IsiDetailForum = () => {
  const { forumId } = useParams();
  
  return (
    <div>
      <img src={forumbg} className="img-fluid" alt="forum" style={{ width: '100%' }} />
      <div
        className="container shadow"
        style={{ marginTop: '-100px', zIndex: '1', position: 'relative', backgroundColor: 'white' }}
      >
        <div className="text-center m-3">
          <h2
            className="text-center font-weight-bold"
            style={{
              fontSize: '2rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
              fontFamily: 'Nunito, sans-serif' // Menambahkan properti fontFamily
            }}
          >
            Forum
          </h2>
        </div>
        <div className="d-flex justify-content-start">
          <Link to="/Forum" className="btn btn-primary m-3">
            Kembali
          </Link>
        </div>
        <hr style={{ margin: '30px 20px', borderWidth: '3px' }} />
        <div>
          <CardDetailForum forumId={forumId} />
        </div>
      </div>
    </div>
  );
};

export default IsiDetailForum;
