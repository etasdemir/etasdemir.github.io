import React from 'react';
import styled from 'styled-components';

interface Props {
  subtitle: string;
  description: string;
  textAlignment: string;
}

interface TextStyle {
  align: string;
}

function AboutSection(props: Props) {
  const { subtitle, description, textAlignment } = props;

  return (
    <Container>
      <Subtitle align={textAlignment}>{subtitle}</Subtitle>
      <Description align={textAlignment}>{description}</Description>
      <Separator />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.span<TextStyle>`
  letter-spacing: 3px;
  font-size: calc(2vw + 5px);
  font-weight: 700;
  text-align: ${({ align }) => align};
`;

const Description = styled.span<TextStyle>`
  font-size: 2vw;
  text-align: ${({ align }) => align};
  margin-bottom: 2vw;
`;

const Separator = styled.div`
  height: 1px;
  width: 100vw;
  background-color: #a7a7a7;
  margin: 4vw 0;
`;

export default AboutSection;