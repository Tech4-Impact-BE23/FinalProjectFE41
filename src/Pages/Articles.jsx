import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './articles.css';

const Articles = () => {
  const articles = [
    // ... (artikel-artikel yang ada)
    {
      title: 'ASEAN Youth Forum: Empowering the Next Generation',
      content: 'The ASEAN Youth Forum serves as a crucial platform aimed at empowering the youth in the Southeast Asian region. Through meetings, discussions, and collaborations among young individuals from ASEAN member countries, this forum provides an opportunity for the younger generation to share ideas, enhance regional understanding, and actively engage in shaping a better future.',
      readMoreLink: '/article/1',
    },
    {
      title: 'Building Bridges: Youth Collaboration in ASEAN',
      content: 'Through cross-cultural dialogue and inclusivity, young leaders can strengthen ASEANs regional integration efforts and cultivate a shared sense of identity. Additionally, digital connectivity and technology-driven initiatives enable youth to connect and work together across borders, fostering friendships, knowledge exchange, and innovative solutions to regional and global challenges.',
      readMoreLink: '/article/2',
    },
    {
      title: 'Promoting Cultural Exchange at the ASEAN Youth Forum',
      content: 'By promoting cultural exchange, the forum cultivates respect, tolerance, and mutual understanding, contributing to the building of a cohesive ASEAN community. Through dialogue, shared experiences, and collaborative projects, the youth are encouraged to embrace cultural diversity, break down stereotypes, and forge long-lasting friendships.',
      readMoreLink: '/article/3',
    },
    {
      title: 'The Role of Education in ASEAN Youth Development',
      content: 'By recognizing the transformative power of education and investing in innovative educational approaches, ASEAN can empower its youth to become active contributors to economic, social, and sustainable development in the region. Ultimately, education serves as a key pillar in unlocking the full potential of ASEANs youth, creating a brighter future for both individuals and the entire ASEAN community.',
      readMoreLink: '/article/4',
    },
    {
      title: 'Youth Empowerment: Key Focus of ASEAN Youth Forum',
      content: 'By placing youth empowerment at the forefront, the forum strengthens the voices and perspectives of young individuals, ensuring their active involvement in decision-making processes and policy development. Ultimately, the ASEAN Youth Forum serves as a catalyst for youth empowerment, creating a platform for the next generation to drive social, economic, and cultural progress within the ASEAN community.',
      readMoreLink: '/article/5',
    },
    {
      title: 'Promoting Sustainable Development Among ASEAN Youth',
      content: 'Focuses on the importance of engaging and empowering the youth in driving sustainable development within the ASEAN region. Recognizing the critical role that young individuals play in shaping the future, the initiative encourages youth participation and action towards achieving sustainable development goals.',
      readMoreLink: '/article/6',
    },
  ];

  const [filter, setFilter] = React.useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
    <Navbar />
    <h1>Articles Page</h1>
    <div className="search-bar">
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search articles"
      />
    </div>
      <div className="articles-container">
        {filteredArticles.slice(0, 6).map((article, index) => (
          <div className="article-box" key={index}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <Link to={article.readMoreLink}>Read More</Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Articles;