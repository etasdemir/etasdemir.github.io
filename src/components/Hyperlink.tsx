import React from 'react';
import styled from 'styled-components';

interface Props {
  url: string;
  children: JSX.Element
}

function Hyperlink(props: Props) {
  const { url, children } = props;

  return (
    <Wrap>
      <Link href={url}>
        {children}
      </Link>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: inline-block;
  position: relative;
`;

const Link = styled.a`
  text-decoration: underline solid #00000000;
  color: black;
  font-style: italic;
  transition: text-decoration 350ms;
  &::after {
    content: "";
    border-radius: 15%;
    padding: 0.1rem;
    background: var(--primary);
    opacity: 0.25;
    position: absolute;
    left: 1rem;
    bottom: -0.5rem;
    width: calc(100% - 0.7rem);
    height: calc(100% - 0.7rem);
    z-index: -1;
    transition: 400ms cubic-bezier(0.25, 0.1, 0, 2.7);
  }
  &:hover:after {
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 100%;
  }
  &:hover {
    text-decoration: underline solid currentColor;
  }
`;

export default Hyperlink;
