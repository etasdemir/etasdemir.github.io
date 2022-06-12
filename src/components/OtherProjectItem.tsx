import React from 'react';
import styled from 'styled-components';

import { ProjectInfo } from '../shared/Types';

function OtherProjectItem() {
  // TODO
  const info: ProjectInfo = {
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    url: 'https://github.com/etasdemir',
    techStack: [
      'Android',
      'Kotlin',
      'MVVM',
      'Architecture Components',
      'Retrofit2',
      'Coroutine',
      'Dagger2'
    ]
  };

  return (
    <ProjectContainer href={info.url}>
      <ProjectTitle>{info.title}</ProjectTitle>
      <ProjectDescripton>{info.description}</ProjectDescripton>
      <TechStackContainer>
        {info.techStack.map((item, index) => <TechStackName key={index}>{item}</TechStackName>)}
      </TechStackContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.a`
  background-color: #F8D2B7;
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
  font-size: 2rem;
  font-weight: 400;
`;

const ProjectDescripton = styled.span`
  display: block;
  text-align: center;
  color: black;
  font-size: 1.1rem;
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
  padding: 0.5% 1%;
  border-radius: 15px;
  font-size: 1rem;
`;

export default OtherProjectItem;