import React from 'react';
import styled from 'styled-components';

import { GITHUB_URL } from '../../shared/Constants';
import Hyperlink from '../../components/Hyperlink';

function Work() {
  return (
    <WorkContainer>
      <Title>Work</Title>
      <Description>Here are some projects I developed in my spare time. Check out my <Hyperlink url={GITHUB_URL}><span>Github</span></Hyperlink> for more of them.</Description>
      <ProjectContainer>

      </ProjectContainer>
    </WorkContainer>
  );
}

const WorkContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
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