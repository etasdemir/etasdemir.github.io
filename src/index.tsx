import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import About from './screens/about';
import Contact from './screens/contact';
import Home from './screens/home';
import Work from './screens/work';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
    <Work />
    <About />
    <Contact />
  </React.StrictMode>
);
