import React from 'react';
import styled from 'styled-components';
import { useCombinedRefs } from '../libs/CombineRefs';
import { withObservable } from '../libs/ViewPortObserver';
import { WithObservableRef } from '../shared/Types';

interface Props extends WithObservableRef {
  title: string;
  subtitle?: string;
  description: JSX.Element | JSX.Element[];
  alignment: string;
}

interface Align {
  align: string;
}

function AboutSection(props: Props) {
  const { title, subtitle, description, alignment, observableRef, shouldAnimate } = props;
  const combineRefCallback = useCombinedRefs(observableRef);

  return (
    <Container ref={(ref) => {
      if (shouldAnimate === false) {
        return;
      }
      combineRefCallback(ref);
    }} align={alignment}>
      <Title>{title}</Title>
      {typeof subtitle !== "undefined" ? <Subtitle>{subtitle}</Subtitle> : null}
      {description}
    </Container>
  );
}

const Container = styled.div<Align>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  margin: 4em 6em;
`;

const Title = styled.span`
  letter-spacing: 3px;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Subtitle = styled.span`
  margin-top: 0.5em;
  font-size: 1.5rem;
  font-weight: 400;
`;

export default withObservable(AboutSection);