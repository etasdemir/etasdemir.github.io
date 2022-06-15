import React from 'react';
import styled from 'styled-components';

import { ProjectInfo } from '../shared/Types';
import AppStoreBadge from './AppStoreBadge';

interface Props {
  align: 'left' | 'right';
  project: ProjectInfo
}

function FeaturedProjectItem(props: Props) {
  const { align, project } = props;
  let flexProps: FlexProps = {};
  if (align === 'left') {
    flexProps = {
      flexAlign: {
        align: 'flex-end',
        flex: 'row',
        pos: 'left'
      }
    };
  } else {
    flexProps = {
      flexAlign: {
        align: 'flex-start',
        flex: 'row-reverse',
        pos: 'right'
      }
    };
  }

  return (
    <ItemContainer flexAlign={flexProps.flexAlign}>
      <ProjectImage src={require('../assets/' + project.image)} />
      <ProjectInfoContainer href={project.url} flexAlign={flexProps.flexAlign}>
        <FeaturedProject>Featured Project</FeaturedProject>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <AppStoreBadge appStoreLink={project.appStoreLink} playStoreLink={project.playStoreLink} />
        <TechStackContainer flexAlign={flexProps.flexAlign}>
          {project.techStack.map((item, index) => <TechStackName key={index}>{item}</TechStackName>)}
        </TechStackContainer>
      </ProjectInfoContainer>
    </ItemContainer>
  );
}

interface FlexProps {
  flexAlign?: {
    align: 'flex-start' | 'flex-end';
    flex: 'row' | 'row-reverse';
    pos: 'left' | 'right';
  };
}

const ItemContainer = styled.div<FlexProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ flexAlign }) => flexAlign?.flex};
  align-items: center;
  margin: 4em 0;
`;

const ProjectImage = styled.img`
  width: 55rem;
  height: 55rem;
  border-radius: 5%;
`;

const ProjectInfoContainer = styled.a<FlexProps>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: ${({ flexAlign }) => flexAlign?.align};
  width: 60%;
  left: ${({ flexAlign }) => flexAlign?.pos === 'right' ? 0 : 'initial'};
  right: ${({ flexAlign }) => flexAlign?.pos === 'left' ? 0 : 'initial'};
  z-index: 2;
  background-color: var(--page-background);
  border-radius: 30px;
  padding: 1.5em 2.5em;

  color: initial;
  text-decoration: none;
  cursor: pointer;
`;

const FeaturedProject = styled.span`
  color: var(--primary-dark);
  font-weight: 500;
  font-size: 1.5rem;
`;

const ProjectTitle = styled.span`
  color: var(--primary-dark);
  font-weight: 700;
  font-size: 2rem;
`;

const ProjectDescription = styled.span`
  text-align: left;
  margin: 1em 0;
  font-size: 1rem;
  color: black;
`;

const TechStackContainer = styled.div<FlexProps>`
  width: 100%;
  justify-content: ${({ flexAlign }) => flexAlign?.align};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TechStackName = styled.span`
  margin: 0.4rem 0.8rem;
  border: 1px solid var(--primary-dark);
  color: var(--primary-dark);
  padding: 0.5% 1%;
  border-radius: 15px;
  font-size: 1rem;
`;

export default FeaturedProjectItem;