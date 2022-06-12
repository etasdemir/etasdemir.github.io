import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { GITHUB_URL } from '../../shared/Constants';
import Hyperlink from '../../components/Hyperlink';
import Navigation from '../../nav/Navigation';
import FeaturedProjectItem from '../../components/FeaturedProjectItem';

function Work() {
  const workRef = useRef(null);
  useEffect(() => {
    Navigation.addScreen('work', workRef);
  }, []);

  return (
    <WorkContainer ref={workRef}>
      <Title>Work</Title>
      <Description>Here are some projects I developed in my spare time. Check out my <Hyperlink url={GITHUB_URL}><span>Github</span></Hyperlink> for more of them.</Description>
      <ProjectContainer>
        <FeaturedProjectItem align='left' />
        <FeaturedProjectItem align='right' />
        <FeaturedProjectItem align='left' />
      </ProjectContainer>
    </WorkContainer>
  );
}

const WorkContainer = styled.div`
  padding-top: 2.5em;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.span`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const Description = styled.span`
  font-size: 2.5rem;
  width: 50%;
`;

const ProjectContainer = styled.div`
`;

export default Work;