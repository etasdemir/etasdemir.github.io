import React from 'react';
import styled from 'styled-components';
import { useCombinedRefs } from '../libs/CombineRefs';
import { withObservable } from '../libs/ViewPortObserver';
import { device } from '../shared/Constants';

import { ProjectInfo, WithObservableRef } from '../shared/Types';
import AppStoreBadge from './AppStoreBadge';

interface Props extends WithObservableRef {
  align: 'left' | 'right';
  project: ProjectInfo;
}

function FeaturedProjectItem(props: Props) {
  const { align, project, observableRef } = props;
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
    <ItemContainer ref={useCombinedRefs(observableRef)} flexAlign={flexProps.flexAlign}>
      <ProjectImage src={require('../assets/' + project.image)} />
      <ProjectInfoContainer flexAlign={flexProps.flexAlign}>
        <ProjectLink href={project.url} flexAlign={flexProps.flexAlign}>
          <FeaturedProject>Featured Project</FeaturedProject>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectLink>
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
  flex-direction: column;
  align-items: center;
  margin: 4em 0;
  
  @media ${device.tablet} {
    flex-direction: ${({ flexAlign }) => flexAlign?.flex};
  }
`;

const ProjectImage = styled.img`
  margin-top: 7rem;
  border-radius: 5%;
  width: 100vw;
  height: auto;

  @media ${device.laptop} {
    width: 40vw;
    height: auto;
  }
`;

const ProjectInfoContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;  
  align-items: ${({ flexAlign }) => flexAlign?.align};
  background-color: var(--page-background);
  border-radius: 3rem;
  padding: 2.5rem;

  margin-top: 5rem;

  @media ${device.tablet} {
    width: 70%;
    margin-top: 0;
    
    position: absolute;
    left: ${({ flexAlign }) => flexAlign?.pos === 'right' ? 0 : 'initial'};
    right: ${({ flexAlign }) => flexAlign?.pos === 'left' ? 0 : 'initial'};
    z-index: 2;
  }

  @media ${device.laptop} {
    width: 62%;
  }
`;

const ProjectLink = styled.a<FlexProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ flexAlign }) => flexAlign?.align};
  left: ${({ flexAlign }) => flexAlign?.pos === 'right' ? 0 : 'initial'};
  right: ${({ flexAlign }) => flexAlign?.pos === 'left' ? 0 : 'initial'};

  color: initial;
  text-decoration: none;
  cursor: pointer;
`;

const FeaturedProject = styled.span`
  color: var(--primary-dark);
  font-weight: 500;
  font-size: 2.5rem;
`;

const ProjectTitle = styled.span`
  color: var(--primary-dark);
  font-weight: 700;
  font-size: 3.5rem;
`;

const ProjectDescription = styled.span`
  text-align: left;
  margin: 1em 0;
  font-size: calc(0.8rem + 7px);
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
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: calc(0.8rem + 7px);
`;

export default withObservable(FeaturedProjectItem);