import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import ComicsProvider from './provider/ComicsProvider';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      {/* <Background/> */}
      <Switch>
        <ComicsProvider> 
          <Route exact path="/" component={HomeView} />
          <Route exact path="/home" component={HomeView} />
        </ComicsProvider>
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;