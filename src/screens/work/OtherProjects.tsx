import React from 'react';
import styled from 'styled-components';

import { ProjectInfo, WithObservableRef } from '../../shared/Types';
import OtherProjectItem from '../../components/OtherProjectItem';
import { withObservable } from '../../libs/ViewPortObserver';
import { useCombinedRefs } from '../../libs/CombineRefs';
import { device } from '../../shared/Constants';

interface Props extends WithObservableRef {
  otherProjects: Array<Omit<ProjectInfo, 'image'>>;
}

function OtherProjects(props: Props) {
  const { otherProjects, observableRef } = props;

  return (
    <>
      <OtherProjectTitle ref={useCombinedRefs(observableRef)}>Other Noteworthy Projects</OtherProjectTitle>
      <OtherProjectGrid>
        {otherProjects.map((item, index) => (
          <OtherProjectItem key={item.title + index} project={item} />
        ))}
      </OtherProjectGrid>
    </>
  );
}

const OtherProjectTitle = styled.span`
  display: block;
  font-size: 3.5rem;
  font-weight: 500;
  margin-top: 2em;
  text-align: center;
`;

const OtherProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px;
  margin: 2em 0;
  
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default withObservable(OtherProjects);  