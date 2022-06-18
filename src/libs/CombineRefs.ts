import { Ref, useCallback } from "react";

type RefCallback<T> = (element: T | null) => void;

/**
 * Combines many refs into one. Useful for combining many ref hooks
 */
export const useCombinedRefs = <T>(...refs: Array<Ref<T>>): RefCallback<T> =>
  useCallback(
    (element: T | null) => {
      if (!element) {
        return;
      }
      return refs.forEach(ref => {
        if (!ref || !element) {
          return;
        }

        // Ref can have two types - a function or an object. We treat each case.
        if (typeof ref === 'function') {
          return ref(element);
        }

        // As per https://github.com/facebook/react/issues/13029
        // it should be fine to set current this way.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (ref as any).current = element;
      });
    },
    refs
  );