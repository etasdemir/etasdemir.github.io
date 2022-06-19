import React from 'react';
import styled from 'styled-components';
import { AboutElement } from '../../shared/Types';

interface Props {
  descriptions: AboutElement["descriptions"];
  index: number;
}

function SimpleDescription(props: Props) {
  const { descriptions, index } = props;
  return <Description key={index}>{descriptions}</Description>;
}

const Description = styled.span`
  font-size: 2.1rem;
  margin-top: 1em;
  font-weight: 300;
`;

export default SimpleDescription;