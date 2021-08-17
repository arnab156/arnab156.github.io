import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import NoMatch from './components/NoMatch/NoMatch';
import About from './views/About/About';
import ComicsProvider from './provider/ComicsProvider';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
    <ComicsProvider> 
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </ComicsProvider>
    </div>
  </Router>
);

export default App;