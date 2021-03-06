import React, { useEffect, useRef } from 'react';
import { WithObservableRef } from '../../shared/Types';

import AppereadViewAnimator from './index';

export function withObservable<T extends WithObservableRef>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithRef = (props: Omit<T, keyof WithObservableRef>) => {
    const ref: WithObservableRef['observableRef'] = useRef(null);

    useEffect(() => {
      if (ref.current) {
        AppereadViewAnimator.observeElement(ref.current);
      }
      return () => {
        if (ref.current) {
          AppereadViewAnimator.unobserveElement(ref.current);
        }
      };
    }, []);

    return <WrappedComponent {...(props as T)} observableRef={ref} />;
  };

  ComponentWithRef.displayName = `withObserable(${displayName})`;

  return ComponentWithRef;
}