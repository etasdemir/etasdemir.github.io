import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

import './index.css';
import About from './screens/about';
import Contact from './screens/contact';
import Home from './screens/home';
import Work from './screens/work';

const SectionContainer = styled.div`
  display: block;
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SectionContainer>
      <Home />
      <Work />
      <About />
      <Contact />
    </SectionContainer>
  </React.StrictMode>
);
