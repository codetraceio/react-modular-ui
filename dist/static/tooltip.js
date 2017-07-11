"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
window.addEventListener('DOMContentLoaded', function () {
    var elements = window.document.querySelectorAll('.c-tooltip-wrapper');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.addEventListener('mouseover', function (event) {
            var wrapperElement = event.currentTarget;
            var portalKey = wrapperElement.getAttribute('data-portal-key');
            var portalElement = window.document.querySelector("[data-portal=" + portalKey + "]");
            var tooltipElement = portalElement.firstElementChild;
            portalElement.style.display = 'block';
            utils_1.default.updateTooltip(wrapperElement, tooltipElement);
        });
        element.addEventListener('mouseout', function (event) {
            var currentTarget = event.currentTarget;
            var portalKey = currentTarget.getAttribute('data-portal-key');
            var portal = window.document.querySelector("[data-portal=" + portalKey + "]");
            portal.style.display = 'none';
        });
    }
});
