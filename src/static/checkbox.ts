window.addEventListener('DOMContentLoaded', () => {
  [...<Node[]><any>window.document.querySelectorAll('.c-checkbox')].forEach((element: HTMLDivElement) => {
    element.addEventListener('click', (event: MouseEvent) => {
      const currentTarget: HTMLDivElement = (<HTMLDivElement>event.currentTarget);
      const checked = currentTarget.getAttribute('aria-checked');
      currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
    });
  });
});