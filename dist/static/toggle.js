'use strict';

window.addEventListener('DOMContentLoaded', function () {
  Array.from(window.document.querySelectorAll('.c-toggle')).forEach(function (element) {
    element.addEventListener('click', function (event) {
      var checked = event.currentTarget.getAttribute('aria-checked');
      event.currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
    });
  });
});