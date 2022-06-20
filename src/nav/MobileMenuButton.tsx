import React from 'react';
import styled from 'styled-components';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { useAppContext } from '../shared/AppContext';
import { device } from '../shared/Constants';

function MobileMenuButton() {
  const { setIsMenuVisible } = useAppContext();

  const onMenuClicked = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <Button onClick={onMenuClicked}>
      <MenuRoundedIcon sx={{ width: 30, height: 30 }} />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;

  position: fixed;
  bottom: 4rem;
  right: 4rem;
  border: 1px solid black;
  border-radius: 50%;
  transition: all 150ms;
  z-index: 10;
  cursor: pointer;

  background-color: var(--primary);

  &:active {
    opacity: 0.3;
    transform: scale(1.2);
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export default MobileMenuButton;