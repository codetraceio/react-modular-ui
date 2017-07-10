"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
window.addEventListener('DOMContentLoaded', function () {
    Array.from(window.document.querySelectorAll('.c-tooltip-wrapper')).forEach(function (element) {
        element.addEventListener('mouseover', function (event) {
            var wrapperElement = event.currentTarget;
            var portalKey = wrapperElement.getAttribute('data-portal-key');
            var portalElement = window.document.querySelector("[data-portal=" + portalKey + "]");
            var tooltipElement = portalElement.firstElementChild;
            portalElement.style.display = 'block';
            utils_1.default.updateTooltip(wrapperElement, tooltipElement);
        });
        element.addEventListener('mouseout', function (event) {
            var portalKey = event.currentTarget.getAttribute('data-portal-key');
            window.document.querySelector("[data-portal=" + portalKey + "]").style.display = 'none';
        });
    });
});
