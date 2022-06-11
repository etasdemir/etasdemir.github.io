import React from 'react';
import styled from 'styled-components';

import Hyperlink from '../../components/Hyperlink';
import { AboutElement } from '../../shared/Types';

export function getAboutDescription(item: AboutElement, index: number) {
  const { type, descriptions, urls } = item;

  switch (type) {
    case "simple":
      return <Description key={index}>{descriptions}</Description>;
    case "element":
      return <ElementContainer>
        {descriptions.map((element, index) =>
          <Description key={index}>{element}</Description>
        )}
      </ElementContainer>;
    case "hyperlink":
      return descriptions.map((desc, index) => {
        return urls ?
          <Hyperlink key={index} url={urls[index]}>
            {<span>{desc}</span>}
          </Hyperlink>
          :
          <></>;
      });
  }
}

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  &::before {
    content: "▸";
    color: var(--primary-dark);
    font-size: 1.4rem;
  }
`;
