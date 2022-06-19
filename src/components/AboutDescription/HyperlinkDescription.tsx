import React from 'react';
import styled from 'styled-components';

import { AboutElement } from '../../shared/Types';

interface Props {
  descriptions: AboutElement["descriptions"];
  urls: AboutElement["urls"];
}

function HyperlinkDescription(props: Props) {
  const { descriptions, urls } = props;
  return (
    <LinkContainer>
      {descriptions.map((desc, index) => {
        return urls ?
          <NewsletterLink key={index} href={urls[index]}>
            {desc}
          </NewsletterLink>
          :
          <></>;
      })}
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  margin-top: 2em;
  display: inline-block;
`;

const NewsletterLink = styled.a`
  font-size: 2.1rem;
  font-weight: 300;
  display: block;
  transition: transform 500ms;
  cursor: pointer;
  text-decoration: none;
  color: black;
  
  &:hover {
    transform: translate(3vw, 0);
  }

  &::before {
    content: "→ ";
  }
`;

export default HyperlinkDescription;