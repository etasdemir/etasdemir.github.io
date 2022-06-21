import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../shared/AppContext';
import { device } from '../shared/Constants';

function MobileMenuButton() {
  const { setIsMenuVisible } = useAppContext();

  const onMenuClicked = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <Button onClick={onMenuClicked}>
      <img src={require("../assets/menu_ic.png")} />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  position: fixed;
  bottom: 4rem;
  right: 4rem;
  border: 1.25px solid black;
  border-radius: 50%;
  transition: all 150ms;
  z-index: 10;
  cursor: pointer;

  background-color: var(--primary-light);

  &:active {
    opacity: 0.3;
    transform: scale(1.2);
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export default MobileMenuButton;