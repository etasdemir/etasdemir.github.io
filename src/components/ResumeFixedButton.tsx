import React from 'react';
import styled from 'styled-components';
import { device, RESUME_URL } from '../shared/Constants';

function ResumeFixedButton() {
  return (
    <Container href={RESUME_URL}>
      <span>Resume</span>
    </Container>
  );
}

const Container = styled.a`
  display: none;
  text-decoration: none;
  color: black;
  @media ${device.laptop} {
    display: inline-block;
  }

  position: fixed;
  left: 6rem;
  bottom: 4rem;
  padding: 0.5rem 2rem;
  z-index: 10;

  border: 1.25px solid black;
  border-radius: 10%;
  background-color: var(--primary-light);

  cursor: pointer;

  span {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export default ResumeFixedButton;