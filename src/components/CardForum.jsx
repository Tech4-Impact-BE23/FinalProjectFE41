import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaComments } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const CardForum = ({ forumId }) => {
  const [forumData, setForumData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchForumData();
  }, [forumId]);

  const fetchForumData = async () => {
    try {
      const response = await fetch('https://endpoint-finalproject.up.railway.app/posts', {
        method: 'GET',
        headers: {
          'Authorization': `${localStorage.getItem('UserToken')}`,
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error('Gagal mengambil data forum');
      }
      const data = await response.json();
      const filteredData = data.data.filter((forum) => forum.post_id === forumId); // Filter data berdasarkan post_id yang dipilih
      setForumData(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLihatForum = (forumId) => {
    // Navigasi ke halaman detail forum
    navigate(`/Forum/DetailForum/${forumId}`);
  };

  return (
    <>
      {forumData.map((forum) => (
        <Card
          key={forum.id}
          className="mb-3"
          style={{
            background: '#FFFFFF',
            boxShadow: '-4px -4px 16px rgba(0, 0, 0, 0.06)',
            borderRadius: '8px',
          }}
        >
          <Card.Body>
            <Card.Title className="d-flex flex-column align-items-center" style={{ fontWeight: 'bold'}} >{forum.title}</Card.Title>
            <Card.Text style={{ textShadow: '1px 1px 0px rgba(255, 255, 255, 0.8)', color: 'black' }} >{forum.content}</Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Text style={{ color: 'black'}}>Kategori: {forum.category.name}</Card.Text>
                <div className="d-flex align-items-center">
                  <FaComments style={{ marginRight: '5px' }} />
                  <span>{forum.Jawaban} Jawaban</span>
                </div>
              </div>
              <Button variant="primary" onClick={() => handleLihatForum(forum.id)}>
                Lihat Forum
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default CardForum;
