import React from 'react';
import styled from 'styled-components';
import { ProjectInfo } from '../shared/Types';

interface Props {
  align: 'left' | 'right';
}

function FeaturedProjectItem(props: Props) {
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

  const { align } = props;
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
    <ItemContainer href={info.url} flexAlign={flexProps.flexAlign}>
      <ProjectImage src='https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png' />
      <ProjectInfoContainer flexAlign={flexProps.flexAlign}>
        <FeaturedProject>Featured Project</FeaturedProject>
        <ProjectTitle>{info.title}</ProjectTitle>
        <ProjectDescription>{info.description}</ProjectDescription>
        <TechStackContainer flexAlign={flexProps.flexAlign}>
          {info.techStack.map((item, index) => <TechStackName key={index}>{item}</TechStackName>)}
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

const ItemContainer = styled.a<FlexProps>`
  position: relative;
  display: flex;
  flex-direction: ${({ flexAlign }) => flexAlign?.flex};
  align-items: center;
  margin: 4em 0;
  cursor: pointer;
  color: initial;
  text-decoration: none;
  
  opacity: 0.85;
  transition: 1500ms;
  &:hover {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 50rem;
  height: 35rem;
`;

const ProjectInfoContainer = styled.div<FlexProps>`
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
  padding: 15px;
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