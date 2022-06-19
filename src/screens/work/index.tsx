import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { GITHUB_URL, PROJECTS } from '../../shared/Constants';
import Hyperlink from '../../components/Hyperlink';
import Navigation from '../../nav/Navigation';
import { ProjectInfo, WithObservableRef } from '../../shared/Types';
import OtherProjects from './OtherProjects';
import FeaturedProjects from './FeaturedProjects';
import { withObservable } from '../../libs/ViewPortObserver';
import { useCombinedRefs } from '../../libs/CombineRefs';

type Props = WithObservableRef;

function Work(props: Props) {
  const { observableRef } = props;
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

  return (
    <WorkContainer ref={workRef}>
      <EntryTextContainer ref={useCombinedRefs(observableRef)}>
        <Title>Work</Title>
        <Description>Here are some projects I developed in my spare time. Check out my <Hyperlink url={GITHUB_URL}><span>Github</span></Hyperlink> for more of them.</Description>
      </EntryTextContainer>
      <FeaturedProjects featuredProjects={featuredProjects} />
      <OtherProjects otherProjects={otherProjects} />
    </WorkContainer>
  );
}

const WorkContainer = styled.div`
  padding-top: 2.5em;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const EntryTextContainer = styled.div`
`;

const Title = styled.span`
  font-size: 7rem;
  font-weight: bold;
  margin-bottom: 0.5em;
  display: block;
`;

const Description = styled.span`
  font-size: 3rem;
  width: 50%;
  display: inline-block;
`;

export default withObservable(Work);