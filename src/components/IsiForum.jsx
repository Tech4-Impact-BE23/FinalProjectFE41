import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import forumbg from '../assets/forumbg.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import FilterKategori from './FilterKategori';
import CardDetailForum from './CardDetailForum';
import CardForum from './CardForum';

const IsiForum = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [selectedForumId, setSelectedForumId] = useState('');

  useEffect(() => {
    // Get token from local storage
    const storedToken = localStorage.getItem('UserToken');
    if (storedToken) {
      setToken(storedToken);
    } else {
      // Token not available, redirect to login page
      navigate('/login');
    }
  }, [navigate]);

  const handleClick = () => {
    navigate('/Forum/CreateForum');
  };

  const handleForumClick = (forumId) => {
    setSelectedForumId(forumId);
  };

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
            style={{ fontSize: '2rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
          >
            Forum
          </h2>
        </div>
        <hr style={{ margin: '10px 20px' }} />
        <div className="row">
          <div className="col-6" style={{ width: '300px', marginRight: '20px', marginLeft: '20px' }}>
            <div className="border border-dark rounded p-3 m-3">
              <FilterKategori />
            </div>
          </div>
          <div className="col-6 d-flex flex-column" style={{ width: '600px' }}>
            <div className="d-flex align-items-start mb-3">
              <FaUser size={30} style={{ marginTop: '20px', marginRight: '10px' }} />
              <Form.Control
                type="text"
                className="form-control mt-3"
                style={{ cursor: 'pointer' }}
                placeholder="Ada yang ingin Anda tanyakan?"
                onClick={handleClick}
              />
            </div>
            <div>
              {selectedForumId ? (
                <CardDetailForum forumId={selectedForumId} />
              ) : (
                <CardForum token={token} onForumClick={handleForumClick} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsiForum;
