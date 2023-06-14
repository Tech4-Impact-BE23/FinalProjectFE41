import React, { useEffect, useState, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import { FaComments } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

const CardDetailForum = ({ forumId }) => {
  const [forumData, setForumData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [commentContent, setCommentContent] = useState('');

  const fetchForumData = useCallback(async () => {
    try {
      const response = await fetch(`https://6488a7c00e2469c038fe2b8b.mockapi.io/createforum/${forumId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch forum data');
      }
      const data = await response.json();
      setForumData(data);
    } catch (error) {
      console.error(error);
    }
  }, [forumId]);

  const fetchCommentData = useCallback(async () => {
    try {
      const response = await fetch('https://6489323d5fa58521caaf489e.mockapi.io/comment');
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
  }, [fetchForumData, fetchCommentData]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://6489323d5fa58521caaf489e.mockapi.io/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: commentContent, forumId }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit comment');
      }

      // Clear the comment input field
      setCommentContent('');

      // Fetch updated comment data
      fetchCommentData();
    } catch (error) {
      console.error(error);
    }
  };

  if (!forumData) {
    return <div>Fetching forum data...</div>;
  }

  return (
    <Card
      key={forumData.id}
      className="mb-3"
      style={{
        background: '#FFFFFF',
        boxShadow: '-4px -4px 16px rgba(0, 0, 0, 0.06)',
        borderRadius: '8px',
        width: '800px',
        margin: '0px auto'
      }}
    >
      <Card.Body >
        <div >
        <Card.Title className="d-flex flex-column align-items-center" style={{ fontWeight: 'bold' }}>
          {forumData.title}
        </Card.Title>

        <Card.Text style={{ textShadow: '1px 1px 0px rgba(255, 255, 255, 0.8)', color: 'black' }}>
          {forumData.description}
        </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Card.Text style={{ color: 'black' }}>Kategori: {forumData.category}</Card.Text>
              <div className="d-flex align-items-center">
                <FaComments style={{ marginRight: '5px' }} />
                <span>{forumData.jumlahJawaban} Jawaban</span>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>

      <Card.Footer>
        <form onSubmit={handleCommentSubmit}>
          <div className="form-group">
            <label htmlFor="commentContent">Komentar</label>
            <textarea
              className="form-control"
              id="commentContent"
              rows="3"
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Tambah Komentar
          </button>
        </form>

        {commentData
          .filter((comment) => comment.forumId === forumId)
          .map((comment) => (
            <Card key={comment.id} className="mb-3" style={{marginTop: '20px'}}>
              <Card.Body>
                <Card.Text style={{ color: 'black' }}>{comment.content}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </Card.Footer>
    </Card>
  );
};

CardDetailForum.propTypes = {
  forumId: PropTypes.string.isRequired,
};

export default CardDetailForum;
