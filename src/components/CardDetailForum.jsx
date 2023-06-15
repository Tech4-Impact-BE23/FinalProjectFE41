import React, { useEffect, useState, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import { FaComments } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

const CardDetailForum = ({ forumId }) => {
  const [forumData, setForumData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [commentContent, setCommentContent] = useState('');

  const fetchForumData = useCallback(async () => {
    try {
      const response = await fetch(`https://endpoint-finalproject.up.railway.app/posts`, {
        method: 'GET',
        headers: {
          'Authorization': `${localStorage.getItem('UserToken')}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch forum data');
      }

      const data = await response.json();
      setForumData(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

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
  }, [fetchForumData, fetchCommentData]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      content: commentContent,
      postId: 1,
      userId: 1,
      forumId
    };

    try {
      const response = await fetch('https://endpoint-finalproject.up.railway.app/comments', {
        method: 'POST',
        headers: {
          'Authorization': `${localStorage.getItem('UserToken')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
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

  if (forumData.length === 0) {
    return <div>Loading forum data...</div>;
  }

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
            width: '800px',
            margin: '0px auto'
          }}
        >
          <Card.Body>
            <div>
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

            {commentData && commentData.length > 0 ? (
              commentData
                .filter((comment) => comment.post.id === parseInt(forum.id))
                .map((comment) => (
                  <Card key={comment.id} className="mb-3" style={{ marginTop: '20px' }}>
                    <Card.Body>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={comment.user.avatar} alt="Avatar" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                        <div>
                          <div style={{ fontWeight: 'bold'}}>{comment.user.name}</div>
                          <div>{comment.content}</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))
            ) : (
              <div>No comments available</div>
            )}
          </Card.Footer>
        </Card>
      ))}
    </>
  );
};

CardDetailForum.propTypes = {
  forumId: PropTypes.string.isRequired,
};

export default CardDetailForum;
