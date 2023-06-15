import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './articles.css';

const Articles = () => {
  const articles = [
    // Artikel-artikel
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const results = articles.filter((article) => {
      const { title, content } = article;
      return title.toLowerCase().includes(query) || content.toLowerCase().includes(query);
    });

    setSearchResults(results);
  };

  return (
    <div>
      <Navbar />
      <h1>Articles Page</h1>
      <div>
        <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search articles" />
      </div>
      <div className="articles-container">
        {(searchResults.length > 0 ? searchResults : articles).map((article, index) => (
          <div className="article-box" key={index}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <Link to={article.readMoreLink}>Read More</Link> {/* Change from <a> to <Link> */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
