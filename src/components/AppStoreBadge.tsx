import React from 'react';
import styled from 'styled-components';

interface Props {
  appStoreLink: string | undefined;
  playStoreLink: string | undefined;
}

function AppStoreBadge(props: Props) {
  const { appStoreLink, playStoreLink } = props;

  return (
    <IconContainer>
      {appStoreLink !== undefined ?
        <IconLink href={appStoreLink} >
          <Icon src={require('../assets/app_store_ic.jpg')} />
        </IconLink> : null
      }
      {playStoreLink !== undefined ?
        <IconLink href={playStoreLink} >
          <Icon src={require('../assets/play_store_ic.jpg')} />
        </IconLink> : null
      }
    </IconContainer>
  );
}

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconLink = styled.a`
  margin: 0 1rem 1rem 1rem;
`;

const Icon = styled.img`
  height: 4.8rem;
  width: 14rem;
`;

export default AppStoreBadge;  