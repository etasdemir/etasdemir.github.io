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

  return (
    <MenuContainer isVisible={isMenuVisible} height={isMenuVisible ? 100 : 0}>
      <span>navigate to:</span>
      <MenuButton onClick={() => onMenuClick('home')} isVisible={isMenuVisible}>
        <span>Home</span>
      </MenuButton>
      <MenuButton onClick={() => onMenuClick('work')} isVisible={isMenuVisible}>
        <span>Work</span>
      </MenuButton>
      <MenuButton onClick={() => onMenuClick('about')} isVisible={isMenuVisible}>
        <span>About</span>
      </MenuButton>
      <MenuButton onClick={() => onMenuClick('contact')} isVisible={isMenuVisible}>
        <span>Contact</span>
      </MenuButton>
    </MenuContainer>
  );
}

interface IsMenuVisible {
  isVisible: boolean;
}

interface MenuProps extends IsMenuVisible {
  height: number;
}

const MenuContainer = styled.div<MenuProps>`
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  
  height: ${({ height }) => height}%;
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  transition: all 500ms;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFFEF;

  span {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
    transition: visibility 150ms;
  }
`;

const MenuButton = styled.button<IsMenuVisible>`
  width: 40rem;
  padding: 1rem 0;
  margin: 2.5rem 0;
  border: 1.5px solid var(--grey);
  border-radius: 4vw;
  background-color: transparent;
  transition: opacity 50ms;
  cursor: pointer;

  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  transition: visibility 150ms;

  span {
    font-size: 4rem;
    font-weight: bold;
    visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
    transition: visibility 150ms;
  }

  &:active {
    opacity: 0.25;
  }
`;

export default MobileMenu;