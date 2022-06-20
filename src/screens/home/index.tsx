import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import Navigation from '../../nav/Navigation';
import { device } from '../../shared/Constants';

function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Navigation.addScreen('home', homeRef);
  }, []);

  return (
    <HomeContainer ref={homeRef}>
      <GreetingText>hi there,</GreetingText>
      <Title>i&apos;m Eren Tasdemir</Title>
      <Description>...self-motivated and enthusiastic software developer from Turkey with a strong background in mobile application development, especially on Android.</Description>
      <ProfilePicture src={require('../../assets/profile.jpg')} />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 5em;
`;

const GreetingText = styled.span`
  margin-top: 3rem;
  font-size: 3.5rem;
`;

const Title = styled.span`
  font-size: 4rem;
  font-weight: bold;
  margin-top: 4rem;

  @media ${device.laptop} {
    font-size: 6rem;
  }
`;

const Description = styled.span`
  font-size: 3rem;
  margin-top: 3rem;

  @media ${device.laptop} {
    width: 70%; 
  }
`;

const ProfilePicture = styled.img`
  margin-top: 6rem;
  margin-bottom: 3rem;
  margin-left: auto;
  height: calc(18vw + 10rem);
  width: calc(18vw + 10rem);
  border-radius: 50%;

  @media ${device.laptop} { 
    opacity: 0.75;
    transition: opacity 800ms;

    &:hover {
      opacity: 1;
    }
  } 
`;

export default Home;