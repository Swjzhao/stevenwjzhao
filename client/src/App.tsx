import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';

const App = () => (
  <BrowserRouter basename="qra">
    <Switch>
      <Route
        path="/"
        render={() => <HomePage />}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
