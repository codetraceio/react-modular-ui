window.addEventListener('DOMContentLoaded', () => {
  const elements = window.document.querySelectorAll('.c-radio');
  for (let i = 0; i < elements.length; i++) {
    const element: HTMLDivElement = <HTMLDivElement>elements[i];
    element.addEventListener('click', (event: MouseEvent) => {
      const currentTarget = <HTMLDivElement>event.currentTarget;
      const checked = currentTarget.getAttribute('aria-checked');
      const currentName = element.getAttribute('data-name');

      for (let j = 0; j < elements.length; j++) {
        const elementToUnCheck: HTMLDivElement = <HTMLDivElement>elements[j];
      	if (elementToUnCheck.getAttribute('data-name') === currentName) {
          elementToUnCheck.setAttribute('aria-checked', 'false');
      	}
      }
      currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
    });
  }
});
