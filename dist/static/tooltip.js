'use strict';

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('DOMContentLoaded', function () {
  Array.from(window.document.querySelectorAll('.c-tooltip-wrapper')).forEach(function (element) {
    element.addEventListener('mouseover', function (event) {
      var wrapperElement = event.currentTarget;
      var portalKey = wrapperElement.getAttribute('data-portal-key');
      var portalElement = window.document.querySelector('[data-portal=' + portalKey + ']');
      var tooltipElement = portalElement.firstElementChild;
      portalElement.style.display = 'block';
      _utils2.default.updateTooltip(wrapperElement, tooltipElement);
    });
    element.addEventListener('mouseout', function (event) {
      var portalKey = event.currentTarget.getAttribute('data-portal-key');
      window.document.querySelector('[data-portal=' + portalKey + ']').style.display = 'none';
    });
  });
});