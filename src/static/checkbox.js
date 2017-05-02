window.addEventListener('DOMContentLoaded', () => {
  Array.from(window.document.querySelectorAll('.c-checkbox')).forEach((element) => {
    element.addEventListener('click', (event) => {
      const checked = event.currentTarget.getAttribute('aria-checked');
      event.currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
    });
  });
});