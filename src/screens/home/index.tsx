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
      <GreetingText>hi there <GreetingEmoji>&#x2728;</GreetingEmoji></GreetingText>
      <Title>i&apos;m Eren Tasdemir</Title>
      <Description>...self-motivated and enthusiastic software developer with a strong background in mobile application development from Turkey.</Description>
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
  padding-top: 4vw;
`;

const GreetingText = styled.span`
  font-size: 2vw;
`;

const GreetingEmoji = styled.span`
  font-size: 1.5vw;
`;

const Title = styled.span`
  font-size: 5vw;
  font-weight: bold;
  margin-top: 6vw;
`;

const Description = styled.span`
  font-size: 2vw;
  width: 70%;
  margin-top: 3vw;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProfilePicture = styled.img`
  height: 25vw;
  border-radius: 50%;
  opacity: 0.5;
`;

export default Home;