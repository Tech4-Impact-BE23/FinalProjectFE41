import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/CreateForum.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/actions/CategoriesAction';

const CreateForum = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    // Fetch categories saat komponen dimuat
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validasi data form
    if (!title || !description || !category) {
      alert('Mohon isi semua field!');
      return;
    }
    // Mengirim data ke API
    const newForum = {
      title,
      description,
      category,
    };
    try {
      const response = await fetch('https://6488a7c00e2469c038fe2b8b.mockapi.io/createforum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newForum),
      });
      if (!response.ok) {
        throw new Error('Gagal menambahkan forum');
      }
      // Reset form setelah sukses menambahkan forum
      setTitle('');
      setDescription('');
      setCategory('');
      // Kembali ke halaman sebelumnya
      navigate(-1);
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat menambahkan forum');
    }
  };
  
  const handleClose = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  return (
    <div className="container" style={{ fontFamily: 'Poppins' }}>
      <Form onSubmit={handleSubmit}>
        <div className="close-icon" onClick={handleClose} style={{ cursor: 'pointer' }}>
          <AiOutlineClose size={20} />
        </div>
        <h1>Create Forum</h1>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Kategori:</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Pilih kategori</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>
              {category.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateForum;
