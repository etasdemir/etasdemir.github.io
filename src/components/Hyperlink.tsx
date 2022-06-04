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
    background: #e4d9b4;
    position: absolute;
    left: 12px;
    bottom: -6px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    z-index: -1;
    transition: 350ms cubic-bezier(0.25, 0.1, 0, 2.05);
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
