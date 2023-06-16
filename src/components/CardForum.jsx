import React, { useEffect, useState, useCallback } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaComments } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const CardForum = ({ forumId }) => {
  const [forumData, setForumData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const navigate = useNavigate();
 
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

  const fetchCommentData = useCallback(async () => {
    try {
      const response = await fetch('https://endpoint-finalproject.up.railway.app/comments', {
        method: 'GET',
        headers: {
          'Authorization': `${localStorage.getItem('UserToken')}`,
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch comment data');
      }
      const data = await response.json();
      setCommentData(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchForumData();
    fetchCommentData();
  }, [forumId, fetchCommentData]);

  // if (forumData.length === 0) {
  //   return <div>Loading forum data...</div>;
  // }
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
            background: 'white',
            boxShadow: '-4px -4px 16px rgba(0, 0, 0, 0.06)',
            borderRadius: '8px',
            margin: '0px auto'
          }}
        >
          <Card.Body>
              <Card.Title className="d-flex flex-column align-items-center" style={{ fontWeight: 'bold' }}>
                {forum.title}
              </Card.Title>

              <Card.Text style={{ textShadow: '1px 1px 0px rgba(255, 255, 255, 0.8)', color: 'black' }}>
                {forum.content}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Card.Text style={{ color: 'black' }}>Kategori: {forum.category.name}</Card.Text>
                  <div className="d-flex align-items-center">
                    <FaComments style={{ marginRight: '5px' }} />
                    <span>{commentData.filter((comment) => comment.post.id === parseInt(forum.id)).length} Jawaban</span>
                  </div>
                  </div>
                  <Button variant="primary" onClick={() => handleLihatForum(forum.id)}>
                    Lihat Forum
                  </Button>
                </div>
          </Card.Body>

          <Card.Footer>
          {commentData && commentData.length > 0 ? (
              commentData
                .filter((comment) => comment.post.id === parseInt(forumData.id))
                )
            : (
              <div>No comments available</div>
            )}
          </Card.Footer>
        </Card>
      ))} 
    </>
  );
};

CardForum.propTypes = {
  forumId: PropTypes.string.isRequired,
};

export default CardForum;
