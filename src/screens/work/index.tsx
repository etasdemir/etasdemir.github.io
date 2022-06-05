import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { GITHUB_URL } from '../../shared/Constants';
import Hyperlink from '../../components/Hyperlink';
import Navigation from '../../nav/Navigation';

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

      </ProjectContainer>
    </WorkContainer>
  );
}

const WorkContainer = styled.div`
  padding-top: 2vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.span`
  font-size: 4vw;
  font-weight: bold;
  margin-bottom: 4vw;
`;

const Description = styled.span`
  font-size: 2vw;
  width: 50%;
`;

const ProjectContainer = styled.div`
  height: 1000px; // TODO implement
`;

export default Work;