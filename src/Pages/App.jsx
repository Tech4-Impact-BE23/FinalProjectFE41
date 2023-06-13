import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/article/:id" component={ArticleDetail} />
      </Switch>
    </Router>
  );
};

export default App;
