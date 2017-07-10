window.addEventListener('DOMContentLoaded', () => {
  [...<Node[]><any>window.document.querySelectorAll('.c-toggle')].forEach((element: HTMLDivElement) => {
    element.addEventListener('click', (event: MouseEvent) => {
      const currentTarget = <HTMLDivElement>event.currentTarget;
      const checked = currentTarget.getAttribute('aria-checked');
      currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
    });
  });
});
