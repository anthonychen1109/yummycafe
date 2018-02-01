import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './static/css/styles.css';

// COMPONENTS
import App from './components/app';
import Gallery from './components/gallery';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/gallery" component={Gallery} />
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
