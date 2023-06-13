import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ArticleDetail = () => {
  const article = {
    title: 'ASEAN Youth Forum: Empowering the Next Generation',
    content: 'The ASEAN Youth Forum serves as a crucial platform aimed at empowering the youth in the Southeast Asian region. Through meetings, discussions, and collaborations among young individuals from ASEAN member countries, this forum provides an opportunity for the younger generation to share ideas, enhance regional understanding, and actively engage in shaping a better future.'
  };

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
