/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
/******/ })
/************************************************************************/
/******/ ({

/***/ 103:
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
    window.document.querySelectorAll('.c-checkbox').slice().forEach(function (element) {
        element.addEventListener('click', function (event) {
            var currentTarget = event.currentTarget;
            var checked = currentTarget.getAttribute('aria-checked');
            currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
        });
    });
});


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
    window.document.querySelectorAll('.c-radio').slice().forEach(function (element) {
        element.addEventListener('click', function (event) {
            var currentTarget = event.currentTarget;
            var checked = currentTarget.getAttribute('aria-checked');
            var currentName = element.getAttribute('data-name');
            window.document.querySelectorAll('.c-radio').slice().forEach(function (element) {
                if (element.getAttribute('data-name') === currentName) {
                    element.setAttribute('aria-checked', 'false');
                }
            });
            currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
        });
    });
});


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
    window.document.querySelectorAll('.c-toggle').slice().forEach(function (element) {
        element.addEventListener('click', function (event) {
            var currentTarget = event.currentTarget;
            var checked = currentTarget.getAttribute('aria-checked');
            currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
        });
    });
});


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(28);
window.addEventListener('DOMContentLoaded', function () {
    window.document.querySelectorAll('.c-tooltip-wrapper').slice().forEach(function (element) {
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
    });
});


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
window.addEventListener('DOMContentLoaded', function () {
    window.document.querySelectorAll('.c-upload').slice().forEach(function (element) {
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
        var input = element.querySelector('input');
        input.addEventListener('change', function (event) {
            var currentElement = event.currentTarget;
            var files = currentElement.files;
            var customEvent = new CustomEvent('upload', {
                detail: files
            });
            currentElement.parentNode.dispatchEvent(customEvent);
        }, false);
    });
});


/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(103);
__webpack_require__(104);
__webpack_require__(105);
__webpack_require__(106);
__webpack_require__(107);


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTE0OWVmMTQxMjNlMTY0YWVlYjk/OGVlNCIsIndlYnBhY2s6Ly8vLi9kaXN0L3N0YXRpYy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N0YXRpYy9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N0YXRpYy90b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zdGF0aWMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N0YXRpYy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zdGF0aWMuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC91dGlscy5qcz9jYTA1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOzs7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOzs7Ozs7OztBQ2REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7O0FDUkQ7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7QUNwQkQ7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7QUN2Q0Q7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNOQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJkaXN0L2V4YW1wbGUvY2xpZW50L3N0YXRpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MTQ5ZWYxNDEyM2UxNjRhZWViOSIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy1jaGVja2JveCcpLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgY2hlY2tlZCA9IGN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnKTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBjaGVja2VkID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9zdGF0aWMvY2hlY2tib3guanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmMtcmFkaW8nKS5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBjdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudE5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmMtcmFkaW8nKS5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpID09PSBjdXJyZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgY2hlY2tlZCA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3RhdGljL3JhZGlvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLXRvZ2dsZScpLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgY2hlY2tlZCA9IGN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnKTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBjaGVja2VkID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9zdGF0aWMvdG9nZ2xlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy10b29sdGlwLXdyYXBwZXInKS5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgcG9ydGFsS2V5ID0gd3JhcHBlckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcnRhbC1rZXknKTtcbiAgICAgICAgICAgIHZhciBwb3J0YWxFbGVtZW50ID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wb3J0YWw9XCIgKyBwb3J0YWxLZXkgKyBcIl1cIik7XG4gICAgICAgICAgICB2YXIgdG9vbHRpcEVsZW1lbnQgPSBwb3J0YWxFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgcG9ydGFsRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHV0aWxzXzEuZGVmYXVsdC51cGRhdGVUb29sdGlwKHdyYXBwZXJFbGVtZW50LCB0b29sdGlwRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgcG9ydGFsS2V5ID0gY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9ydGFsLWtleScpO1xuICAgICAgICAgICAgdmFyIHBvcnRhbCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcG9ydGFsPVwiICsgcG9ydGFsS2V5ICsgXCJdXCIpO1xuICAgICAgICAgICAgcG9ydGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3RhdGljL3Rvb2x0aXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy11cGxvYWQnKS5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCctYWN0aXZlJyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLWFjdGl2ZScpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHZhciBmaWxlcyA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgICAgIHZhciBjdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudCgndXBsb2FkJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDogZmlsZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xpY2soKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB2YXIgaW5wdXQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIHZhciBmaWxlcyA9IGN1cnJlbnRFbGVtZW50LmZpbGVzO1xuICAgICAgICAgICAgdmFyIGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd1cGxvYWQnLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiBmaWxlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnROb2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9zdGF0aWMvdXBsb2FkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9zdGF0aWMvY2hlY2tib3hcIik7XG5yZXF1aXJlKFwiLi9zdGF0aWMvcmFkaW9cIik7XG5yZXF1aXJlKFwiLi9zdGF0aWMvdG9nZ2xlXCIpO1xucmVxdWlyZShcIi4vc3RhdGljL3Rvb2x0aXBcIik7XG5yZXF1aXJlKFwiLi9zdGF0aWMvdXBsb2FkXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L3N0YXRpYy5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFV0aWxzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBVdGlscygpIHtcbiAgICB9XG4gICAgVXRpbHMucHJvdG90eXBlLmdlbmVyYXRlS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJrXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMjApO1xuICAgIH07XG4gICAgVXRpbHMucHJvdG90eXBlLnVwZGF0ZVRvb2x0aXAgPSBmdW5jdGlvbiAod3JhcHBlckVsZW1lbnQsIHRvb2x0aXBFbGVtZW50LCBwcmVmZXIpIHtcbiAgICAgICAgdmFyIHJlY3QgPSB3cmFwcGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHdyYXBwZXJXaWR0aCA9IHdyYXBwZXJFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgd3JhcHBlckhlaWdodCA9IHdyYXBwZXJFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgdmFyIHdpZHRoID0gdG9vbHRpcEVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0b29sdGlwRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciBsZWZ0ID0gMDtcbiAgICAgICAgdmFyIHRvcCA9IDA7XG4gICAgICAgIHZhciB0YWlsU2l6ZSA9IDg7XG4gICAgICAgIHZhciBmaXRzUmlnaHQgPSByZWN0LmxlZnQgKyB3aWR0aCArIHRhaWxTaXplIDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZhciBmaXRzUmlnaHRIYWxmID0gcmVjdC5sZWZ0ICsgd2lkdGggLyAyICsgdGFpbFNpemUgPCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdmFyIGZpdHNCb3R0b20gPSByZWN0LmJvdHRvbSArIGhlaWdodCArIHRhaWxTaXplIDwgd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgZml0c0xlZnQgPSByZWN0LmxlZnQgLSB3aWR0aCAtIHRhaWxTaXplID4gMDtcbiAgICAgICAgdmFyIGZpdHNMZWZ0SGFsZiA9IHJlY3QubGVmdCAtIHdpZHRoIC0gdGFpbFNpemUgLyAyID4gMDtcbiAgICAgICAgdmFyIGZpdHNUb3AgPSByZWN0LnRvcCAtIGhlaWdodCAtIHRhaWxTaXplID4gMDtcbiAgICAgICAgdmFyIHBvc2l0aW9uO1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10YWlsLXRvcCcpO1xuICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctdGFpbC1yaWdodCcpO1xuICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctdGFpbC1ib3R0b20nKTtcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXRhaWwtbGVmdCcpO1xuICAgICAgICBpZiAocHJlZmVyID09PSAnbGVmdCcgJiYgZml0c0xlZnQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJ2xlZnQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByZWZlciA9PT0gJ3JpZ2h0JyAmJiBmaXRzUmlnaHQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcmVmZXIgPT09ICd0b3AnICYmIGZpdHNSaWdodEhhbGYgJiYgZml0c0xlZnRIYWxmICYmIGZpdHNUb3ApIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJ3RvcCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZml0c1JpZ2h0SGFsZiAmJiBmaXRzTGVmdEhhbGYgJiYgKGZpdHNUb3AgfHwgZml0c0JvdHRvbSkpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gZml0c0JvdHRvbSA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGZpdHNSaWdodCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIGxlZnQgPSByZWN0LmxlZnQgLSB3aWR0aCAvIDIgKyB3cmFwcGVyV2lkdGggLyAyO1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIHRvcCA9IHJlY3QudG9wIC0gaGVpZ2h0IC0gdGFpbFNpemU7XG4gICAgICAgICAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXRhaWwtYm90dG9tJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b3AgPSByZWN0LnRvcCArIHdyYXBwZXJIZWlnaHQgKyB0YWlsU2l6ZTtcbiAgICAgICAgICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctdGFpbC10b3AnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvcCA9IHJlY3QudG9wIC0gaGVpZ2h0IC8gMiArIHdyYXBwZXJIZWlnaHQgLyAyO1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gcmVjdC5sZWZ0IC0gd2lkdGggLSB0YWlsU2l6ZTtcbiAgICAgICAgICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctdGFpbC1yaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IHJlY3QubGVmdCArIHdyYXBwZXJXaWR0aCArIHRhaWxTaXplO1xuICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10YWlsLWxlZnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b29sdGlwRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHNjcm9sbExlZnQgKyBsZWZ0KSArICdweCc7XG4gICAgICAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLnRvcCA9IChzY3JvbGxUb3AgKyB0b3ApICsgJ3B4JztcbiAgICB9O1xuICAgIHJldHVybiBVdGlscztcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBuZXcgVXRpbHMoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwic291cmNlUm9vdCI6IiJ9