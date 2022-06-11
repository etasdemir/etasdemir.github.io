import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  subtitle?: string;
  description: JSX.Element | JSX.Element[];
  alignment: string;
}

interface Align {
  align: string;
}

function AboutSection(props: Props) {
  const { title, subtitle, description, alignment } = props;

  return (
    <Container align={alignment}>
      <Title>{title}</Title>
      {typeof subtitle !== "undefined" ? <Subtitle>{subtitle}</Subtitle> : null}
      {description}
      <Separator />
    </Container>
  );
}

const Container = styled.div<Align>`
  display: flex;
  flex-direction: column;
  align-items: ${({align}) => align};
  margin: 4em 6em;
`;

const Title = styled.span`
  letter-spacing: 3px;
  font-size: 2.5rem;
  font-weight: bold;
`;

const Subtitle = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
`;

const Separator = styled.div`
  position: absolute;
  left: 0px;
  right: var(--side-menu-width);
  z-index: -1;
  height: 1px;
  background-color: #a7a7a7;
`;

export default AboutSection;