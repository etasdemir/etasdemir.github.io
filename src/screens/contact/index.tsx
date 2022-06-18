import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ContactItem from '../../components/ContactItem';
import { useCombinedRefs } from '../../libs/CombineRefs';
import { withObservable } from '../../libs/ViewPortObserver';
import Navigation from '../../nav/Navigation';
import { CONTACT } from '../../shared/Constants';
import { WithObservableRef } from '../../shared/Types';

type Props = WithObservableRef;

function Contact(props: Props) {
  const { observableRef } = props;

  const contactRef = useRef(null);
  useEffect(() => {
    Navigation.addScreen('contact', contactRef);
  }, []);

  return (
    <Container ref={useCombinedRefs(contactRef)}>
      <InfoContainer>
        <EndGreeting ref={useCombinedRefs(observableRef)}>Thank you for visiting!</EndGreeting>
        <ContactContainer ref={useCombinedRefs(observableRef)}>
          {CONTACT.map((item, index) => (
            <ContactItem key={item.url + index} paddingStart={index * 20} contact={item} />
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
  margin: 20vh 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const EndGreeting = styled.span`
  letter-spacing: 3px;
  font-size: 4rem;
  font-weight: 400;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4em;
  width: 100%;
`;

const ScrollButton = styled.div`
  position: absolute;
  top: 30%;
  left: 75%;
  border-radius: 50%;
  background-color: var(--primary);
  opacity: 0.5;
  cursor: pointer;

  padding: 5rem 2rem;
  transition: 500ms;

  &:hover {
    transform: translate(0, -3vw);
    opacity: 1;
  }
`;

const ScrollButtonText = styled.span`
  opacity: 1;
  font-size: 1.6rem;
  color: black;
  font-weight: bold;
`;

export default withObservable(Contact);  