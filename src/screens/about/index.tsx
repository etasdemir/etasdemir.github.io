import React from 'react';
import styled from 'styled-components';

import AboutSection from '../../components/AboutSection';

const about = [
  {
    subtitle: 'summary',
    description: 'description will be here',
  },
  {
    subtitle: 'skills',
    description: 'description will be here',
  },
  {
    subtitle: 'experience and education(bunun adı ne olmalı?)',
    description: 'description will be here',
  },
];

function About() {
  const getTextAlign = (index: number): string => {
    let textAlign = 'start';
    if (index % 2 === 1) {
      textAlign = 'end';
    }
    return textAlign
  };

  return (
    <Container>
      <Title>About</Title>
      {about.map((item, index) => (
        <AboutSection key={item.subtitle + index} subtitle={item.subtitle} description={item.description} textAlignment={getTextAlign(index)} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 4vw;
  font-weight: bold;
  margin-bottom: 4vw;
  text-align: end;
`;

export default About;  