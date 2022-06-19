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
  font-size: 3.5rem;
`;

const Title = styled.span`
  font-size: 6rem;
  font-weight: bold;
  margin-top: 0.6em;
`;

const Description = styled.span`
  font-size: 3rem;
  width: 70%;
  margin-top: 1.2em
`;

const ProfilePicture = styled.img`
  margin-top: 5em;
  margin-left: auto;
  height: 40em;
  width: 40em;
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