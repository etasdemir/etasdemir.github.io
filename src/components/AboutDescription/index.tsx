import React from 'react';

import { AboutElement } from '../../shared/Types';
import ElementDescription from './ElementDescription';
import HyperlinkDescription from './HyperlinkContainer';
import SimpleDescription from './SimpleDescription';

interface Props {
  item: AboutElement;
  index: number;
}

function AboutDescription(props: Props) {
  const { type } = props.item;

  switch (type) {
    case "simple":
      return <SimpleDescription descriptions={props.item.descriptions} index={props.index} />;
    case "element":
      return <ElementDescription descriptions={props.item.descriptions} />;
    case "hyperlink":
      return <HyperlinkDescription descriptions={props.item.descriptions} urls={props.item.urls} />;
  }
}

export default AboutDescription;