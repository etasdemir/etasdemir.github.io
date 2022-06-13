import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { GITHUB_URL, PROJECTS } from '../../shared/Constants';
import Hyperlink from '../../components/Hyperlink';
import Navigation from '../../nav/Navigation';
import FeaturedProjectItem from '../../components/FeaturedProjectItem';
import OtherProjectItem from '../../components/OtherProjectItem';
import { ProjectInfo } from '../../shared/Types';

function Work() {
  const workRef = useRef(null);
  useEffect(() => {
    Navigation.addScreen('work', workRef);
  }, []);

  const featuredProjects: Array<ProjectInfo> = [];
  const otherProjects: Array<Omit<ProjectInfo, 'image'>> = [];
  for (const project of PROJECTS) {
    if (typeof project.image !== 'undefined') {
      featuredProjects.push(project);
    } else {
      otherProjects.push(project);
    }
  }

  const getAlignment = (index: number): "left" | "right" => {
    let align: "left" | "right" = 'left';
    if (index % 2 === 1) {
      align = 'right';
    }
    return align;
  };

  return (
    <WorkContainer ref={workRef}>
      <Title>Work</Title>
      <Description>Here are some projects I developed in my spare time. Check out my <Hyperlink url={GITHUB_URL}><span>Github</span></Hyperlink> for more of them.</Description>
      <ProjectContainer>
        {featuredProjects.map((item, index) => (
          <FeaturedProjectItem key={item.title + index} align={getAlignment(index)} project={item} />
        ))}
      </ProjectContainer>
      <OtherProjectTitle>Other Noteworthy Projects</OtherProjectTitle>
      <OtherProjectGrid>
        {otherProjects.map((item, index) => (
          <OtherProjectItem key={item.title + index} project={item} />
        ))}
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