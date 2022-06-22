import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

import './index.css';
import About from './screens/about';
import Contact from './screens/contact';
import Home from './screens/home';
import Work from './screens/work';
import SideMenu from './nav/SideMenu';
import './shared/global.css';
import MobileMenuButton from './nav/MobileMenuButton';
import { AppContextProvider } from './shared/AppContext';
import MobileMenu from './nav/MobileMenu';
import ResumeFixedButton from './components/ResumeFixedButton';

const SectionContainer = styled.div`
  display: block;
  margin-right: var(--side-menu-width);
  padding: 0 4vw 0 4vw;
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <SectionContainer>
        <Home />
        <Work />
        <About />
        <Contact />
      </SectionContainer>
      <SideMenu />
      <MobileMenu />
      <MobileMenuButton />
      <ResumeFixedButton />
    </AppContextProvider>
  </React.StrictMode>
);
