export class ClickOutsideService {
  private events: Array<() => void>;
  private onDocumentClickHandler: (event: any) => void;
  private listenerAdded: boolean;

  constructor() {
    this.events = [];
    this.listenerAdded = false;

    this.onDocumentClickHandler = this.onDocumentClick.bind(this);
  }

  addListener() {
    if (this.listenerAdded) {
      return;
    }
    window.document.addEventListener('click', this.onDocumentClickHandler, true);

    this.listenerAdded = true;
  }

  removeListener() {
    if (!this.listenerAdded) {
      return;
    }
    window.document.removeEventListener('click', this.onDocumentClickHandler, true);

    this.listenerAdded = false;
  }

  isOwnElement(element: Element, isRecursive?: boolean): boolean {
    if (!element.tagName || element.tagName.toLowerCase() === 'body') {
      return false;
    }
    const inside: string = element.getAttribute('data-inside');
    if (typeof inside === 'string' && inside !== 'false') {
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

    if (this.events.length === 1) {
      this.addListener();
    }
  }

  off(listener: () => void) {
    if (!listener) {
      this.events = [];
    }
    this.events = this.events.filter((currentListener) => {
      return currentListener !== listener;
    });

    if (this.events.length === 0) {
      this.removeListener();
    }
  }

  trigger() {
    this.events.forEach((listener) => {
      listener();
    });
  }
}

export default new ClickOutsideService();
