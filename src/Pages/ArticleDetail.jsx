import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import articles from '../data/articles';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div>
      <Navbar />
      <div className="article-detail-container">
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;