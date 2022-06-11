import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Navigation from '../../nav/Navigation';

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
      <ProfileContainer>
        <ProfilePicture src={require('../../assets/profile.jpg')} />
      </ProfileContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-top: 5em;
`;

const GreetingText = styled.span`
  font-size: 2.5rem;
`;

const Title = styled.span`
  font-size: 6rem;
  font-weight: bold;
  margin-top: 0.6em;
`;

const Description = styled.span`
  font-size: 2.5rem;
  width: 70%;
  margin-top: 1.2em
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProfilePicture = styled.img`
  height: 30em;
  border-radius: 50%;
  opacity: 0.75;
  transition: opacity 800ms;

  &:hover {
    opacity: 1;
  }
`;

export default Home;