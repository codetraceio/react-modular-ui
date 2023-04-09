function clickOutsideService() {
  const events = new Map<HTMLElement, (event: MouseEvent) => void>();
  
  function emit(event: MouseEvent) {
    events.forEach((listener) => {
      listener(event);
    });
  }

  function on(element: HTMLElement | null, innerElements: (HTMLElement | null)[], callback: () => void) {
    if (events.size < 1) {
      document.addEventListener('click', emit);
    }

    const eventCallback = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!element.contains(target) && !innerElements.some((innerElement) => innerElement.contains(target))) {
        callback();
      }
    };

    events.set(element, eventCallback);
  }

  function off(element: HTMLElement | null) {
    if (!events.delete(element)) {
      return;
    }
    if (events.size === 0) {
      document.removeEventListener('click', emit);
    }
  }

  return {
    on,
    off,
  };
}

export default clickOutsideService();
