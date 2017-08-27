export class ClickOutsideService {
  private events: Array<() => void>;
  private onDocumentClickHandler: (event: any) => void;

  constructor() {
    this.events = [];

    this.onDocumentClickHandler = this.onDocumentClick.bind(this);
  }

  init() {
    window.document.addEventListener('click', this.onDocumentClickHandler, true);
  }

  isOwnElement(element: Element, isRecursive?: boolean): boolean {
    if (!element.tagName || element.tagName.toLowerCase() === 'body') {
      return false;
    }
    const inside: string = element.getAttribute('data-inside');
    if (inside) {
      return true;
    }
    return isRecursive ? this.isOwnElement(element.parentElement, true) : false;
  }

  onDocumentClick(event: any) {
    let isFound: boolean;
    if (event.path) {
      isFound = event.path.find((element: Element) => {
        return this.isOwnElement(element);
      });
    } else {
      isFound = this.isOwnElement(event.target, true);
    }
    if (isFound) {
      return;
    }
    this.trigger();
  }

  on(listener: () => void) {
    this.events.push(listener);
  }

  off(listener: () => void) {
    if (!listener) {
      this.events = [];
    }
    this.events = this.events.filter((currentListener) => {
      return currentListener !== listener;
    });
  }

  trigger() {
    this.events.forEach((listener) => {
      listener();
    });
  }
}

export default new ClickOutsideService();
