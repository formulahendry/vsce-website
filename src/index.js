import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/Home/Home';
import History from './components/History/History';
import Leaderboard from './components/Leaderboard/Leaderboard';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="history/:itemName" component={History} />
      <Route path="leaderboard" component={Leaderboard} />
    </Route>
  </Router>),
  document.getElementById('root')
);
