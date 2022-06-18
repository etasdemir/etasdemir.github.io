// TODO bu animasyonu bozan yüksek ihtimalle +100Y çünkü entry.intersectionRatio onu gösteriyor

interface State {
  previousY: number,
  previousRatio: number;
}

class AppereadViewAnimator {
  observer: IntersectionObserver;
  
  state = new Map<Element, State>();

  thresholdArray = (steps: number) => Array(steps + 1)
    .fill(0)
    .map((_, index) => index / steps || 0);

  constructor() {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: this.thresholdArray(20),
      rootMargin: '0px',
    };
    this.startAnimation = this.startAnimation.bind(this);
    this.observer = new IntersectionObserver(this.startAnimation, options);
  }

  startAnimation(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      const currentY = entry.boundingClientRect.y;
      const currentRatio = entry.intersectionRatio;
      const isIntersecting = entry.isIntersecting;
      console.log(this.state);
      const state = this.state.get(entry.target);
      if (!state) {
        return;
      }
      const prevY = state.previousY;
      const prevRatio = state.previousRatio;

      // Scrolling down/up
      if (currentY < prevY) {
        if (currentRatio > prevRatio && isIntersecting) {
          entry.target.classList.toggle("slide-in-from-right", true);
          console.log("Scrolling down enter");
        } else {
          console.log("Scrolling down leave");
        }
      } else if (currentY > prevY && isIntersecting) {
        if (currentRatio < prevRatio) {
          console.log("Scrolling up leave");
        } else {
          console.log("Scrolling up enter");
        }
      }

      this.state.set(entry.target, {
        previousY: currentY,
        previousRatio: currentRatio,
      });
    });
  }

  observeElement(e: HTMLElement | Element) {
    this.state.set(e, {
      previousY: 0,
      previousRatio: 0
    });
    this.observer.observe(e);
  }

  unobserveElement(e: HTMLElement | Element) {
    this.state.delete(e);
    this.observer.unobserve(e);
  }
}

export default new AppereadViewAnimator();