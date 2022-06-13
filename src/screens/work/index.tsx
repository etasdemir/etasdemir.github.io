import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { GITHUB_URL, PROJECTS } from '../../shared/Constants';
import Hyperlink from '../../components/Hyperlink';
import Navigation from '../../nav/Navigation';
import FeaturedProjectItem from '../../components/FeaturedProjectItem';
import OtherProjectItem from '../../components/OtherProjectItem';

function Work() {
  const workRef = useRef(null);
  useEffect(() => {
    Navigation.addScreen('work', workRef);
  }, []);

  // TODO
  const projects = PROJECTS[0];
  
  return (
    <WorkContainer ref={workRef}>
      <Title>Work</Title>
      <Description>Here are some projects I developed in my spare time. Check out my <Hyperlink url={GITHUB_URL}><span>Github</span></Hyperlink> for more of them.</Description>
      <ProjectContainer>
        <FeaturedProjectItem align='left' project={projects} />
        <FeaturedProjectItem align='right' project={projects} />
        <FeaturedProjectItem align='left' project={projects} />
      </ProjectContainer>
      <OtherProjectTitle>Other Noteworthy Projects</OtherProjectTitle>
      <OtherProjectGrid>
        <OtherProjectItem project={projects} />
        <OtherProjectItem project={projects} />
        <OtherProjectItem project={projects} />
        <OtherProjectItem project={projects} />
      </OtherProjectGrid>
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

const OtherProjectTitle = styled.span`
  display: block;
  font-size: 2.5rem;
  font-weight: 400;
  margin-top: 2em;
  text-align: center;
`;

const OtherProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
  margin: 2em 0;
`;

export default Work;