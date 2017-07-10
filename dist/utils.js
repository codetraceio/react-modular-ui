"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.generateKey = function () {
        return "k" + Math.random().toString(36).substr(2, 20);
    };
    Utils.prototype.updateTooltip = function (wrapperElement, tooltipElement, prefer) {
        var rect = wrapperElement.getBoundingClientRect();
        var wrapperWidth = wrapperElement.offsetWidth;
        var wrapperHeight = wrapperElement.offsetHeight;
        var width = tooltipElement.offsetWidth;
        var height = tooltipElement.offsetHeight;
        var left = 0;
        var top = 0;
        var tailSize = 8;
        var fitsRight = rect.left + width + tailSize < window.innerWidth;
        var fitsRightHalf = rect.left + width / 2 + tailSize < window.innerWidth;
        var fitsBottom = rect.bottom + height + tailSize < window.innerHeight;
        var fitsLeft = rect.left - width - tailSize > 0;
        var fitsLeftHalf = rect.left - width - tailSize / 2 > 0;
        var fitsTop = rect.top - height - tailSize > 0;
        var position;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        tooltipElement.classList.remove('-tail-top');
        tooltipElement.classList.remove('-tail-right');
        tooltipElement.classList.remove('-tail-bottom');
        tooltipElement.classList.remove('-tail-left');
        if (prefer === 'left' && fitsLeft) {
            position = 'left';
        }
        else if (prefer === 'right' && fitsRight) {
            position = 'right';
        }
        else if (prefer === 'top' && fitsRightHalf && fitsLeftHalf && fitsTop) {
            position = 'top';
        }
        else if (fitsRightHalf && fitsLeftHalf && (fitsTop || fitsBottom)) {
            position = fitsBottom ? 'bottom' : 'top';
        }
        else {
            position = fitsRight ? 'right' : 'left';
        }
        if (position === 'top' || position === 'bottom') {
            left = rect.left - width / 2 + wrapperWidth / 2;
            if (position === 'top') {
                top = rect.top - height - tailSize;
                tooltipElement.classList.add('-tail-bottom');
            }
            else {
                top = rect.top + wrapperHeight + tailSize;
                tooltipElement.classList.add('-tail-top');
            }
        }
        else {
            top = rect.top - height / 2 + wrapperHeight / 2;
            if (position === 'left') {
                left = rect.left - width - tailSize;
                tooltipElement.classList.add('-tail-right');
            }
            else {
                left = rect.left + wrapperWidth + tailSize;
                tooltipElement.classList.add('-tail-left');
            }
        }
        tooltipElement.style.left = (scrollLeft + left) + 'px';
        tooltipElement.style.top = (scrollTop + top) + 'px';
    };
    return Utils;
}());
exports.default = new Utils();
