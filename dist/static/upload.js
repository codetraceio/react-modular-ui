'use strict';

window.addEventListener('DOMContentLoaded', function () {
  Array.from(window.document.querySelectorAll('.c-upload')).forEach(function (element) {
    element.addEventListener('dragover', function (event) {
      event.preventDefault();
      var currentElement = event.currentTarget;
      currentElement.classList.add('-active');
    }, false);

    element.addEventListener('dragleave', function (event) {
      event.preventDefault();
      var currentElement = event.currentTarget;
      currentElement.classList.remove('-active');
    }, false);

    element.addEventListener('drop', function (event) {
      event.stopPropagation();
      event.preventDefault();
      var currentElement = event.currentTarget;
      currentElement.classList.remove('-active');

      var files = event.dataTransfer.files;
      var customEvent = new CustomEvent('upload', {
        detail: files
      });

      currentElement.dispatchEvent(customEvent);
    }, false);

    element.addEventListener('click', function (event) {
      var currentElement = event.currentTarget;
      currentElement.querySelector('input').click();
    }, false);

    element.querySelector('input').addEventListener('change', function (event) {
      var currentElement = event.currentTarget;
      var files = currentElement.files;
      var customEvent = new CustomEvent('upload', {
        detail: files
      });

      currentElement.dispatchEvent(customEvent);
    }, false);
  });
});