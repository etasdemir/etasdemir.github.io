import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../shared/AppContext';
import Navigation from './Navigation';

function shouldScrollEnabled(isEnabled: boolean) {
  const body = document.body;
  if (!body) {
    return;
  }
  body.style.overflowY = !isEnabled ? 'hidden' : 'scroll';
}

function MobileMenu() {
  const { isMenuVisible, setIsMenuVisible } = useAppContext();
  const onMenuClick = (screenName: string) => {
    setIsMenuVisible(false);
    shouldScrollEnabled(!isMenuVisible);
    Navigation.scrollToScreen(screenName);
  };
  shouldScrollEnabled(!isMenuVisible);
  if (!isMenuVisible) {
    return null;
  }

  return (
    <MenuContainer isVisible={isMenuVisible}>
      <span>navigate to:</span>
      <MenuButton onClick={() => onMenuClick('home')}>
        <span>Home</span>
      </MenuButton>
      <MenuButton onClick={() => onMenuClick('work')}>
        <span>Work</span>
      </MenuButton>
      <MenuButton onClick={() => onMenuClick('about')}>
        <span>About</span>
      </MenuButton>
      <MenuButton onClick={() => onMenuClick('contact')}>
        <span>Contact</span>
      </MenuButton>
    </MenuContainer>
  );
}

interface MenuProps {
  isVisible: boolean
}

const MenuContainer = styled.div<MenuProps>`
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
  
  height: 100%;

  background-color: #FFFFFFEF;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }
`;

const MenuButton = styled.button`
  width: 45rem;
  padding: 1rem 0;
  margin: 2.5rem 0;
  border: 1.5px solid var(--grey);
  border-radius: 4vw;
  background-color: transparent;
  transition: opacity 50ms;

  span {
    font-size: 4rem;
    font-weight: bold;
  }

  &:active {
    opacity: 0.25;
  }
`;

export default MobileMenu;