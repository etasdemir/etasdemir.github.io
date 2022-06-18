interface PositionState {
  previousY: number,
  previousRatio: number;
}

class AppereadViewAnimator {
  observer: IntersectionObserver;

  elementToPosState = new Map<Element, PositionState>();

  constructor() {
    const thresholdArray = (steps: number) => Array(steps + 1)
      .fill(0)
      .map((_, index) => index / steps || 0);
    const options: IntersectionObserverInit = {
      root: null,
      threshold: thresholdArray(20),
      rootMargin: '0px',
    };
    this.startAnimation = this.startAnimation.bind(this);
    this.observer = new IntersectionObserver(this.startAnimation, options);
  }

  onScrollDownEnter(entry: IntersectionObserverEntry) {
    entry.target.classList.add("slide-in-from-right");
  }

  onScrollDownLeave(entry: IntersectionObserverEntry) {
    entry.target.classList.remove("slide-in-from-right");
  }

  onScrollUpEnter(entry: IntersectionObserverEntry) {
    entry.target.classList;
  }

  onScrollUpLeave(entry: IntersectionObserverEntry) {
    entry.target.classList;
  }

  // Even initial y and prev ratio is 0, startAnimation called on page load. These fields be set while not intersecting.
  startAnimation(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      const currentY = entry.boundingClientRect.y;
      const currentRatio = entry.intersectionRatio;
      const isIntersecting = entry.isIntersecting;
      const state = this.elementToPosState.get(entry.target);
      if (!state) {
        return;
      }
      const prevY = state.previousY;
      const prevRatio = state.previousRatio;

      // Scrolling down/up
      if (currentY < prevY) {
        if (currentRatio > prevRatio && isIntersecting) {
          this.onScrollDownEnter(entry);
        } else {
          this.onScrollDownLeave(entry);
        }
      } else if (currentY > prevY && isIntersecting) {
        if (currentRatio < prevRatio) {
          this.onScrollUpLeave(entry);
        } else {
          this.onScrollUpEnter(entry);
        }
      }

      this.elementToPosState.set(entry.target, {
        previousY: currentY,
        previousRatio: currentRatio,
      });
    });
  }

  observeElement(e: HTMLElement | Element) {
    this.elementToPosState.set(e, {
      previousY: 0,
      previousRatio: 0
    });
    this.observer.observe(e);
  }

  unobserveElement(e: HTMLElement | Element) {
    this.elementToPosState.delete(e);
    this.observer.unobserve(e);
  }
}

export default new AppereadViewAnimator();