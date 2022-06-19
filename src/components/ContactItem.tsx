import React, { useState } from 'react';
import styled from 'styled-components';
import { ContactInfo } from '../shared/Types';

interface Props {
  contact: ContactInfo;
  paddingStart: number;
}

interface CopiedTextProps {
  opacity: number;
}

interface ContainerProps {
  paddingStart: number;
}

function ContactItem(props: Props) {
  const { contact, paddingStart } = props;
  const { url, buttonText, urlName } = contact;
  const [copiedOpacity, setCopiedOpacity] = useState<number>(0);

  const copyToClipboard = (e: React.MouseEvent<HTMLSpanElement>) => {
    const text = e.currentTarget.textContent;
    if (!text) {
      return;
    }
    navigator.clipboard.writeText(text);
    setCopiedOpacity(0.7);
    setTimeout(() => {
      setCopiedOpacity(0);
    }, 1400);
  };

  return (
    <Container paddingStart={paddingStart}>
      <CopiedText opacity={copiedOpacity}>copied!</CopiedText>
      <Name onClick={copyToClipboard}>{simplifyURL(urlName)}</Name>
      <Button>
        <Link href={url}>{`→ ${buttonText}`}</Link>
      </Button>
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  padding-left: ${({paddingStart}) => paddingStart}vw;
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;

const CopiedText = styled.span<CopiedTextProps>`
  display: inline-block;
  font-size: 1.3rem;
  letter-spacing: 0.2vw;
  font-weight: 600;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 400ms;
`;

const Name = styled.span`
  -webkit-touch-callout: text;
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;

  font-size: 2rem;
  display: inline-block;
`;

const Button = styled.div`
  font-size: 1.8em;
  font-weight: 600;
  cursor: pointer;
  transition: transform 500ms;
  width: max-content;

  &:hover {
    transform: translate(3.5vw);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

function simplifyURL(url: string): string {
  return url.replace(/^https?:\/\/(www.)?/, '');
}

export default ContactItem;