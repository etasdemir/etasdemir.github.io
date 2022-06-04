import React from 'react';
import styled from 'styled-components';

import ContactItem from '../../components/ContactItem';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../../shared/Constants';
import { ContactInfo } from '../../shared/Types';

const contact: Array<ContactInfo> = [
  {
    urlName: EMAIL,
    url: `mailto:${EMAIL}`,
    buttonText: 'send me email',
  },
  {
    urlName: GITHUB_URL,
    url: GITHUB_URL,
    buttonText: 'visit github',
  },
  {
    urlName: 'Eren Tasdemir',
    url: LINKEDIN_URL,
    buttonText: 'visit linkedin',
  }
];

function Contact() {
  return (
    <Container>
      <InfoContainer>
        <EndGreeting>Thank you for visiting!</EndGreeting>
        <ContactContainer>
          {contact.map((item, index) => (
            <ContactItem key={item.url + index} paddingStart={index * 20} contact={item} />
          ))}
        </ContactContainer>
      </InfoContainer>
      <ScrollButton onClick={() => scrollTo({
        top: 0,
        behavior: 'smooth',
      })}>
        ↑ scroll top
      </ScrollButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 20vh 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EndGreeting = styled.span`
  letter-spacing: 3px;
  font-size: 3vw;
  font-weight: 400;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vw;
  width: 100%;
`;

const ScrollButton = styled.div`
  position: absolute;
  top: 10%;
  left: 65%;
  border-radius: 50%;
  background-color: #cce9f3;
  cursor: pointer;

  padding: calc(4vw + 10px) 1.8vw;
  font-size: calc(1.2vw + 5px);
  color: #00000055;
  font-weight: bold;

  transition: transform 500ms;

  &:hover {
    transform: translate(0, -3vw);
  }
`;

export default Contact;  