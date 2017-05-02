window.addEventListener('DOMContentLoaded', () => {
  Array.from(window.document.querySelectorAll('.c-upload')).forEach((element) => {
    element.addEventListener('dragover', (event) => {
      event.preventDefault();
      const currentElement = event.currentTarget;
      currentElement.classList.add('-active');
    }, false);

    element.addEventListener('dragleave', (event) => {
      event.preventDefault();
      const currentElement = event.currentTarget;
      currentElement.classList.remove('-active');
    }, false);

    element.addEventListener('drop', (event) => {
      event.stopPropagation();
      event.preventDefault();
      const currentElement = event.currentTarget;
      currentElement.classList.remove('-active');

      const files = event.dataTransfer.files;
      const customEvent = new CustomEvent('upload', {
        detail: files
      });

      currentElement.dispatchEvent(customEvent);

    }, false);

    element.addEventListener('click', (event) => {
      const currentElement = event.currentTarget;
      currentElement.querySelector('input').click();
    }, false);

    element.querySelector('input').addEventListener('change', (event) => {
      const currentElement = event.currentTarget;
      const files = currentElement.files;
      const customEvent = new CustomEvent('upload', {
        detail: files
      });

      currentElement.dispatchEvent(customEvent);
    }, false);
  });
});