import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import PDF from './pages/Pdf';

function Routes() {
  return (
    <BrowserRouter >
    <Route path="/" component={Home} exact/>
    <Route path="/pdf" component={PDF} />
    </BrowserRouter>
  );
}

export default Routes;