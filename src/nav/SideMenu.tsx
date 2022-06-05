import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

function SideMenu() {
  const onMenuClick = (name: string) => {
    Navigation.scrollToScreen(name);
  };

  return (
    <MenuContainer>
      <MenuItem onClick={() => onMenuClick('home')}>
        <MenuText>Home</MenuText>
      </MenuItem>
      <MenuItem onClick={() => onMenuClick('work')}>
        <MenuText>Work</MenuText>
      </MenuItem>
      <MenuItem onClick={() => onMenuClick('about')}>
        <MenuText>About</MenuText>
      </MenuItem>
      <MenuItem onClick={() => onMenuClick('contact')}>
        <MenuText>Contact</MenuText>
      </MenuItem>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: var(--side-menu-width);
  height: 100vh;
  z-index: 10;
  
  border-width: 0;
  border-left: 1px;
  border-style: solid;
  border-color: #aaa;

  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  flex: 1;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuText = styled.span`
  font-size: 1.4em;

  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
`;

export default SideMenu; 