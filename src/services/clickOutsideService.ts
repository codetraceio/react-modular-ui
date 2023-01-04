function clickOutsideService() {
  let events = new Map<HTMLElement, (event: MouseEvent) => void>();
  
  function emit(event: MouseEvent) {
    events.forEach((listener) => {
      listener(event);
    });
  }

  function on(element: HTMLElement | null, callback: () => void) {
    if (events.size < 1) {
      document.addEventListener('click', emit);
    }

    const eventCallback = (event: MouseEvent) => {
      if (!element.contains(event.target as HTMLElement)) {
        callback();
      }
    };

    events.set(element, eventCallback);
  }

  function off(element: HTMLElement | null) {
    if (!events.delete(element)) {
      return;
    }
    if (events.size === 1) {
      document.removeEventListener('click', emit);
    }
  }

  return {
    on,
    off,
  };
}

export default clickOutsideService();
