import { RefObject } from "react";

interface NameToRef {
  [key: string]: RefObject<HTMLElement>;
}

class Navigation {
  refs: NameToRef;

  constructor() {
    this.refs = {};
  }

  addScreen(name: string, ref: RefObject<HTMLElement>) {
    this.refs[name] = ref;
  }

  scrollToScreen(name: string) {
    const screen = this.refs[name].current;
    if (!screen) return;
    const offset = screen.offsetTop;
    this.scrollTo(offset);
  }

  scrollTop() {
    this.scrollTo(0);
  }

  private scrollTo(offset: number) {
    scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  }
}

export default new Navigation();