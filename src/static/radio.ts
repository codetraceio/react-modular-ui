window.addEventListener('DOMContentLoaded', () => {
  [...<Node[]><any>window.document.querySelectorAll('.c-radio')].forEach((element: HTMLDivElement) => {
    element.addEventListener('click', (event: MouseEvent) => {
      const currentTarget = <HTMLDivElement>event.currentTarget;
      const checked = currentTarget.getAttribute('aria-checked');
      const currentName = element.getAttribute('data-name');

      [...<Node[]><any>window.document.querySelectorAll('.c-radio')].forEach((element: HTMLDivElement) => {
      	if (element.getAttribute('data-name') === currentName) {
      		element.setAttribute('aria-checked', 'false');
      	}
      });
      currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
    });
  });
});
