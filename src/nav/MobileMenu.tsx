import React from 'react';
import styled from 'styled-components';

function shouldScrollEnabled(isEnabled: boolean) {
  const body = document.body;
  if (!body) {
    return;
  }
  body.style.overflowY = !isEnabled ? 'hidden' : 'scroll'
}

function MobileMenu() {
  const onMenuClick = (screenName: string) => {
    console.log('screen:', screenName);
  };
  shouldScrollEnabled(false);

  return (
    <MenuContainer>
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

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: #FFFFFFEF;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const MenuButton = styled.button`
  width: 40rem;
  margin: 2.5rem 0;
  border: 1px solid var(--grey);
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