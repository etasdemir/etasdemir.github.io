import React from 'react';
import styled from 'styled-components';
import { useCombinedRefs } from '../libs/CombineRefs';
import { withObservable } from '../libs/ViewPortObserver';

import { ProjectInfo, WithObservableRef } from '../shared/Types';

interface Props extends WithObservableRef {
  project: ProjectInfo;
}

function OtherProjectItem(props: Props) {
  const { project, observableRef } = props;

  return (
    <ProjectContainer ref={useCombinedRefs(observableRef)} href={project.url}>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescripton>{project.description}</ProjectDescripton>
      <TechStackContainer>
        {project.techStack.map((item, index) => <TechStackName key={index}>{item}</TechStackName>)}
      </TechStackContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.a`
  background-color: var(--primary-light);
  margin: 1em;
  border-radius: 5%;
  padding: 1em;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: color 400ms;
  &:hover {
    color: var(--primary-dark);
  }
`;

const ProjectTitle = styled.span`
  display: block;
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
`;

const ProjectDescripton = styled.span`
  display: block;
  text-align: center;
  color: black;
  font-size: 2rem;
  margin: 1em 0;
`;

const TechStackContainer = styled.div`
  width: 100%;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TechStackName = styled.span`
  margin: 0.4rem;
  border: 1px solid var(--primary-dark);
  color: var(--primary-dark);
  padding: 1% 2%;
  border-radius: 15px;
  font-size: 2rem;
`;

export default withObservable(OtherProjectItem);