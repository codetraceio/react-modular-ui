window.addEventListener('DOMContentLoaded', () => {
  const elements = window.document.querySelectorAll('.c-upload');
  for (let i = 0; i < elements.length; i++) {
    const element: HTMLDivElement = <HTMLDivElement>elements[i];
    element.addEventListener('dragover', (event: DragEvent) => {
      event.preventDefault();
      const currentElement: HTMLElement = <HTMLElement>event.currentTarget;
      currentElement.classList.add('-active');
    }, false);

    element.addEventListener('dragleave', (event: DragEvent) => {
      event.preventDefault();
      const currentElement: HTMLElement = <HTMLElement>event.currentTarget;
      currentElement.classList.remove('-active');
    }, false);

    element.addEventListener('drop', (event: DragEvent) => {
      event.stopPropagation();
      event.preventDefault();
      const currentElement: HTMLElement = <HTMLElement>event.currentTarget;
      currentElement.classList.remove('-active');

      const files = event.dataTransfer.files;
      const customEvent = new CustomEvent('upload', {
        detail: files
      });

      currentElement.dispatchEvent(customEvent);

    }, false);

    element.addEventListener('click', (event: MouseEvent) => {
      const currentElement: HTMLElement = <HTMLElement>event.currentTarget;
      currentElement.querySelector('input').click();
    }, false);

    const input: HTMLInputElement = <HTMLInputElement>element.querySelector('input');
    input.addEventListener('change', (event: Event) => {
      const currentElement: HTMLInputElement = <HTMLInputElement>event.currentTarget;
      const files: FileList = currentElement.files;
      const customEvent: CustomEvent = new CustomEvent('upload', {
        detail: files
      });

      currentElement.parentNode.dispatchEvent(customEvent);
    }, false);
  }
});
