import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ContactItem from '../../components/ContactItem';
import { useCombinedRefs } from '../../libs/CombineRefs';
import { withObservable } from '../../libs/ViewPortObserver';
import Navigation from '../../nav/Navigation';
import { CONTACT, device } from '../../shared/Constants';
import { WithObservableRef } from '../../shared/Types';

type Props = WithObservableRef;

const GreetingText = withObservable((props: Props) => {
  const { observableRef } = props;
  return <EndGreeting ref={useCombinedRefs(observableRef)}>Get In Touch</EndGreeting>;
});

function Contact(props: Props) {
  const { observableRef } = props;

  const contactRef = useRef(null);
  useEffect(() => {
    Navigation.addScreen('contact', contactRef);
  }, []);

  return (
    <Container ref={useCombinedRefs(contactRef)}>
      <InfoContainer>
        <GreetingText />
        <ContactContainer ref={useCombinedRefs(observableRef)}>
          {CONTACT.map((item, index) => (
            <ContactItem key={item.url + index} paddingStart={index * 15} contact={item} />
          ))}
        </ContactContainer>
      </InfoContainer>
      <ScrollButton onClick={() => Navigation.scrollTop()}>
        <ScrollButtonText>↑ scroll top</ScrollButtonText>
      </ScrollButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 10rem;
  margin-bottom: 45rem;

  @media ${device.laptop} {
    margin-bottom: 20rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;

  @media ${device.laptop} {
    align-items: initial;
  }
`;

const EndGreeting = styled.span`
  display: block;
  font-size: 5rem;
  font-weight: 400;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  width: 100%;

  @media ${device.laptop} {
    align-items: initial;
  }
`;

const ScrollButton = styled.div`
  display: none;
  
  @media ${device.laptop} {
    display: inline-block;
    position: absolute;
    top: 30%;
    left: 75%;
    border-radius: 50%;
    background-color: var(--primary);
    opacity: 0.5;
    cursor: pointer;

    padding: 8rem 3.2rem;
    transition: 500ms;

    &:hover {
      transform: translate(0, -3vw);
      opacity: 1;
    }
  }
`;

const ScrollButtonText = styled.span`
  opacity: 1;
  font-size: 2.5rem;
  color: black;
  font-weight: bold;
`;

export default withObservable(Contact);  