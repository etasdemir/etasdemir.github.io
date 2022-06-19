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
  margin: 2.5rem 0;
  display: inline-block;
`;

const NewsletterLink = styled.a`
  margin: 4px 0;
  font-size: 2.1rem;
  font-weight: 300;
  display: block;
  transition: transform 500ms;
  cursor: pointer;
  text-decoration: none;
  color: black;
  
  &:hover {
    transform: translate(5rem, 0);
  }

  &::before {
    content: "→ ";
  }
`;

export default HyperlinkDescription;