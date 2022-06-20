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
      TEST
    </Button>
  );
}

const Button = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  border: 1px solid black;
  border-radius: 50%;
  transition: all 150ms;
  z-index: 10;
  cursor: pointer;

  &:active {
    opacity: 0.3;
    transform: scale(1.2);
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export default MobileMenuButton;