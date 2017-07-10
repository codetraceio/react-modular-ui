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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2I5OGZjYzk2NzJjZDAxMzlkNTAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9leGFtcGxlL2NsaWVudC9zdGF0aWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2hFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOzs7QUFHRCxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7OztBQUdELE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7OztBQUdELE9BQU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOzs7QUFHRCxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQzs7O0FBR0QsT0FBTzs7QUFFUDtBQUNBOztBQUVBOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87O0FBRVAsVUFBVTtBQUNWLDJDQUEyQyxjQUFjLCt1aEIiLCJmaWxlIjoiZGlzdC9leGFtcGxlL2J1aWxkL3N0YXRpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2I5OGZjYzk2NzJjZDAxMzlkNTAiLCIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMDkpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyAxMDM6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy1jaGVja2JveCcpLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgY2hlY2tlZCA9IGN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnKTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBjaGVja2VkID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMTA0OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmMtcmFkaW8nKS5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBjdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudE5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmMtcmFkaW8nKS5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpID09PSBjdXJyZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgY2hlY2tlZCA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDEwNTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLXRvZ2dsZScpLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgY2hlY2tlZCA9IGN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnKTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBjaGVja2VkID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMTA2OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHV0aWxzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy10b29sdGlwLXdyYXBwZXInKS5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgcG9ydGFsS2V5ID0gd3JhcHBlckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcnRhbC1rZXknKTtcbiAgICAgICAgICAgIHZhciBwb3J0YWxFbGVtZW50ID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wb3J0YWw9XCIgKyBwb3J0YWxLZXkgKyBcIl1cIik7XG4gICAgICAgICAgICB2YXIgdG9vbHRpcEVsZW1lbnQgPSBwb3J0YWxFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgcG9ydGFsRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHV0aWxzXzEuZGVmYXVsdC51cGRhdGVUb29sdGlwKHdyYXBwZXJFbGVtZW50LCB0b29sdGlwRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgcG9ydGFsS2V5ID0gY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9ydGFsLWtleScpO1xuICAgICAgICAgICAgdmFyIHBvcnRhbCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcG9ydGFsPVwiICsgcG9ydGFsS2V5ICsgXCJdXCIpO1xuICAgICAgICAgICAgcG9ydGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIDEwNzpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy11cGxvYWQnKS5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCctYWN0aXZlJyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLWFjdGl2ZScpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHZhciBmaWxlcyA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgICAgIHZhciBjdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudCgndXBsb2FkJywge1xuICAgICAgICAgICAgICAgIGRldGFpbDogZmlsZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xpY2soKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICB2YXIgaW5wdXQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIHZhciBmaWxlcyA9IGN1cnJlbnRFbGVtZW50LmZpbGVzO1xuICAgICAgICAgICAgdmFyIGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd1cGxvYWQnLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiBmaWxlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudC5wYXJlbnROb2RlLmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfSk7XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gMTA5OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX193ZWJwYWNrX3JlcXVpcmVfXygxMDMpO1xuX193ZWJwYWNrX3JlcXVpcmVfXygxMDQpO1xuX193ZWJwYWNrX3JlcXVpcmVfXygxMDUpO1xuX193ZWJwYWNrX3JlcXVpcmVfXygxMDYpO1xuX193ZWJwYWNrX3JlcXVpcmVfXygxMDcpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyAyODpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBVdGlscyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVXRpbHMoKSB7XG4gICAgfVxuICAgIFV0aWxzLnByb3RvdHlwZS5nZW5lcmF0ZUtleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwia1wiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDIwKTtcbiAgICB9O1xuICAgIFV0aWxzLnByb3RvdHlwZS51cGRhdGVUb29sdGlwID0gZnVuY3Rpb24gKHdyYXBwZXJFbGVtZW50LCB0b29sdGlwRWxlbWVudCwgcHJlZmVyKSB7XG4gICAgICAgIHZhciByZWN0ID0gd3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB3cmFwcGVyV2lkdGggPSB3cmFwcGVyRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIHdyYXBwZXJIZWlnaHQgPSB3cmFwcGVyRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHRvb2x0aXBFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gdG9vbHRpcEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgbGVmdCA9IDA7XG4gICAgICAgIHZhciB0b3AgPSAwO1xuICAgICAgICB2YXIgdGFpbFNpemUgPSA4O1xuICAgICAgICB2YXIgZml0c1JpZ2h0ID0gcmVjdC5sZWZ0ICsgd2lkdGggKyB0YWlsU2l6ZSA8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB2YXIgZml0c1JpZ2h0SGFsZiA9IHJlY3QubGVmdCArIHdpZHRoIC8gMiArIHRhaWxTaXplIDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZhciBmaXRzQm90dG9tID0gcmVjdC5ib3R0b20gKyBoZWlnaHQgKyB0YWlsU2l6ZSA8IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIGZpdHNMZWZ0ID0gcmVjdC5sZWZ0IC0gd2lkdGggLSB0YWlsU2l6ZSA+IDA7XG4gICAgICAgIHZhciBmaXRzTGVmdEhhbGYgPSByZWN0LmxlZnQgLSB3aWR0aCAtIHRhaWxTaXplIC8gMiA+IDA7XG4gICAgICAgIHZhciBmaXRzVG9wID0gcmVjdC50b3AgLSBoZWlnaHQgLSB0YWlsU2l6ZSA+IDA7XG4gICAgICAgIHZhciBwb3NpdGlvbjtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctdGFpbC10b3AnKTtcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXRhaWwtcmlnaHQnKTtcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXRhaWwtYm90dG9tJyk7XG4gICAgICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10YWlsLWxlZnQnKTtcbiAgICAgICAgaWYgKHByZWZlciA9PT0gJ2xlZnQnICYmIGZpdHNMZWZ0KSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdsZWZ0JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcmVmZXIgPT09ICdyaWdodCcgJiYgZml0c1JpZ2h0KSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJlZmVyID09PSAndG9wJyAmJiBmaXRzUmlnaHRIYWxmICYmIGZpdHNMZWZ0SGFsZiAmJiBmaXRzVG9wKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9ICd0b3AnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZpdHNSaWdodEhhbGYgJiYgZml0c0xlZnRIYWxmICYmIChmaXRzVG9wIHx8IGZpdHNCb3R0b20pKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGZpdHNCb3R0b20gPyAnYm90dG9tJyA6ICd0b3AnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBmaXRzUmlnaHQgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICBsZWZ0ID0gcmVjdC5sZWZ0IC0gd2lkdGggLyAyICsgd3JhcHBlcldpZHRoIC8gMjtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICB0b3AgPSByZWN0LnRvcCAtIGhlaWdodCAtIHRhaWxTaXplO1xuICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10YWlsLWJvdHRvbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9wID0gcmVjdC50b3AgKyB3cmFwcGVySGVpZ2h0ICsgdGFpbFNpemU7XG4gICAgICAgICAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXRhaWwtdG9wJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSByZWN0LnRvcCAtIGhlaWdodCAvIDIgKyB3cmFwcGVySGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IHJlY3QubGVmdCAtIHdpZHRoIC0gdGFpbFNpemU7XG4gICAgICAgICAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXRhaWwtcmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxlZnQgPSByZWN0LmxlZnQgKyB3cmFwcGVyV2lkdGggKyB0YWlsU2l6ZTtcbiAgICAgICAgICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctdGFpbC1sZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuc3R5bGUubGVmdCA9IChzY3JvbGxMZWZ0ICsgbGVmdCkgKyAncHgnO1xuICAgICAgICB0b29sdGlwRWxlbWVudC5zdHlsZS50b3AgPSAoc2Nyb2xsVG9wICsgdG9wKSArICdweCc7XG4gICAgfTtcbiAgICByZXR1cm4gVXRpbHM7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IFV0aWxzKCk7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnT1RFME9XVm1NVFF4TWpObE1UWTBZV1ZsWWprL09HVmxOQ0lzSW5kbFluQmhZMnM2THk4dkxpOWthWE4wTDNOMFlYUnBZeTlqYUdWamEySnZlQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlrYVhOMEwzTjBZWFJwWXk5eVlXUnBieTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlrYVhOMEwzTjBZWFJwWXk5MGIyZG5iR1V1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2WkdsemRDOXpkR0YwYVdNdmRHOXZiSFJwY0M1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5a2FYTjBMM04wWVhScFl5OTFjR3h2WVdRdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dlpHbHpkQzl6ZEdGMGFXTXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZaR2x6ZEM5MWRHbHNjeTVxY3o5allUQTFJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNiVVJCUVRKRExHTkJRV003TzBGQlJYcEVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3T3pzN096czdRVU5vUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVMRXRCUVVzN1FVRkRUQ3hEUVVGRE96czdPenM3T3p0QlExSkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJZVHRCUVVOaU8wRkJRMEVzVTBGQlV6dEJRVU5VTEV0QlFVczdRVUZEVEN4RFFVRkRPenM3T3pzN096dEJRMlJFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZDeExRVUZMTzBGQlEwd3NRMEZCUXpzN096czdPenM3TzBGRFVrUTdRVUZEUVN3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVMRXRCUVVzN1FVRkRUQ3hEUVVGRE96czdPenM3T3pzN1FVTndRa1E3UVVGRFFTdzRRMEZCT0VNc1kwRkJZenRCUVVNMVJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVdFN1FVRkRZanRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCWVR0QlFVTmlPMEZCUTBFc1UwRkJVenRCUVVOVUxFdEJRVXM3UVVGRFRDeERRVUZET3pzN096czdPenM3UVVOMlEwUTdRVUZEUVN3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN1FVTk9RVHRCUVVOQkxEaERRVUU0UXl4alFVRmpPMEZCUXpWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ0lzSW1acGJHVWlPaUprYVhOMEwyVjRZVzF3YkdVdlkyeHBaVzUwTDNOMFlYUnBZeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR2xrWlc1MGFYUjVJR1oxYm1OMGFXOXVJR1p2Y2lCallXeHNhVzVuSUdoaGNtMXZibmtnYVcxd2IzSjBjeUIzYVhSb0lIUm9aU0JqYjNKeVpXTjBJR052Ym5SbGVIUmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWFTQTlJR1oxYm1OMGFXOXVLSFpoYkhWbEtTQjdJSEpsZEhWeWJpQjJZV3gxWlRzZ2ZUdGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3WEc0Z1hIUmNkRngwWEhSamIyNW1hV2QxY21GaWJHVTZJR1poYkhObExGeHVJRngwWEhSY2RGeDBaVzUxYldWeVlXSnNaVG9nZEhKMVpTeGNiaUJjZEZ4MFhIUmNkR2RsZERvZ1oyVjBkR1Z5WEc0Z1hIUmNkRngwZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNVEE1S1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0E1TVRRNVpXWXhOREV5TTJVeE5qUmhaV1ZpT1NJc0luZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkRVQwMURiMjUwWlc1MFRHOWhaR1ZrSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIZHBibVJ2ZHk1a2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdVl5MWphR1ZqYTJKdmVDY3BMbk5zYVdObEtDa3VabTl5UldGamFDaG1kVzVqZEdsdmJpQW9aV3hsYldWdWRDa2dlMXh1SUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dablZ1WTNScGIyNGdLR1YyWlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZM1Z5Y21WdWRGUmhjbWRsZENBOUlHVjJaVzUwTG1OMWNuSmxiblJVWVhKblpYUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZMmhsWTJ0bFpDQTlJR04xY25KbGJuUlVZWEpuWlhRdVoyVjBRWFIwY21saWRYUmxLQ2RoY21saExXTm9aV05yWldRbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJVWVhKblpYUXVjMlYwUVhSMGNtbGlkWFJsS0NkaGNtbGhMV05vWldOclpXUW5MQ0JqYUdWamEyVmtJRDA5UFNBbmRISjFaU2NnUHlBblptRnNjMlVuSURvZ0ozUnlkV1VuS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZTazdYRzU5S1R0Y2JseHVYRzVjYmk4dkx5OHZMeTh2THk4dkx5OHZMeTh2TDF4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZKY2JpOHZJQzR2WkdsemRDOXpkR0YwYVdNdlkyaGxZMnRpYjNndWFuTmNiaTh2SUcxdlpIVnNaU0JwWkNBOUlERXdNMXh1THk4Z2JXOWtkV3hsSUdOb2RXNXJjeUE5SURFaUxDSjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblJFOU5RMjl1ZEdWdWRFeHZZV1JsWkNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQjNhVzVrYjNjdVpHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxtTXRjbUZrYVc4bktTNXpiR2xqWlNncExtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHVnNaVzFsYm5RcElIdGNiaUFnSUNBZ0lDQWdaV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDaGxkbVZ1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTjFjbkpsYm5SVVlYSm5aWFFnUFNCbGRtVnVkQzVqZFhKeVpXNTBWR0Z5WjJWME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTm9aV05yWldRZ1BTQmpkWEp5Wlc1MFZHRnlaMlYwTG1kbGRFRjBkSEpwWW5WMFpTZ25ZWEpwWVMxamFHVmphMlZrSnlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1kzVnljbVZ1ZEU1aGJXVWdQU0JsYkdWdFpXNTBMbWRsZEVGMGRISnBZblYwWlNnblpHRjBZUzF1WVcxbEp5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCM2FXNWtiM2N1Wkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG1NdGNtRmthVzhuS1M1emJHbGpaU2dwTG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9aV3hsYldWdWRDNW5aWFJCZEhSeWFXSjFkR1VvSjJSaGRHRXRibUZ0WlNjcElEMDlQU0JqZFhKeVpXNTBUbUZ0WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNnbllYSnBZUzFqYUdWamEyVmtKeXdnSjJaaGJITmxKeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFZHRnlaMlYwTG5ObGRFRjBkSEpwWW5WMFpTZ25ZWEpwWVMxamFHVmphMlZrSnl3Z1kyaGxZMnRsWkNBOVBUMGdKM1J5ZFdVbklEOGdKMlpoYkhObEp5QTZJQ2QwY25WbEp5azdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDBwTzF4dWZTazdYRzVjYmx4dVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNYRzR2THlBdUwyUnBjM1F2YzNSaGRHbGpMM0poWkdsdkxtcHpYRzR2THlCdGIyUjFiR1VnYVdRZ1BTQXhNRFJjYmk4dklHMXZaSFZzWlNCamFIVnVhM01nUFNBeElpd2lkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0owUlBUVU52Ym5SbGJuUk1iMkZrWldRbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkMmx1Wkc5M0xtUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NWpMWFJ2WjJkc1pTY3BMbk5zYVdObEtDa3VabTl5UldGamFDaG1kVzVqZEdsdmJpQW9aV3hsYldWdWRDa2dlMXh1SUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dablZ1WTNScGIyNGdLR1YyWlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZM1Z5Y21WdWRGUmhjbWRsZENBOUlHVjJaVzUwTG1OMWNuSmxiblJVWVhKblpYUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZMmhsWTJ0bFpDQTlJR04xY25KbGJuUlVZWEpuWlhRdVoyVjBRWFIwY21saWRYUmxLQ2RoY21saExXTm9aV05yWldRbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJVWVhKblpYUXVjMlYwUVhSMGNtbGlkWFJsS0NkaGNtbGhMV05vWldOclpXUW5MQ0JqYUdWamEyVmtJRDA5UFNBbmRISjFaU2NnUHlBblptRnNjMlVuSURvZ0ozUnlkV1VuS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZTazdYRzU5S1R0Y2JseHVYRzVjYmk4dkx5OHZMeTh2THk4dkx5OHZMeTh2TDF4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZKY2JpOHZJQzR2WkdsemRDOXpkR0YwYVdNdmRHOW5aMnhsTG1welhHNHZMeUJ0YjJSMWJHVWdhV1FnUFNBeE1EVmNiaTh2SUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F4SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNTJZWElnZFhScGJITmZNU0E5SUhKbGNYVnBjbVVvWENJdUxpOTFkR2xzYzF3aUtUdGNibmRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZEVUMDFEYjI1MFpXNTBURzloWkdWa0p5d2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSGRwYm1SdmR5NWtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3VZeTEwYjI5c2RHbHdMWGR5WVhCd1pYSW5LUzV6YkdsalpTZ3BMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLR1ZzWlcxbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R0YjNWelpXOTJaWEluTENCbWRXNWpkR2x2YmlBb1pYWmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCM2NtRndjR1Z5Uld4bGJXVnVkQ0E5SUdWMlpXNTBMbU4xY25KbGJuUlVZWEpuWlhRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2NHOXlkR0ZzUzJWNUlEMGdkM0poY0hCbGNrVnNaVzFsYm5RdVoyVjBRWFIwY21saWRYUmxLQ2RrWVhSaExYQnZjblJoYkMxclpYa25LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ3YjNKMFlXeEZiR1Z0Wlc1MElEMGdkMmx1Wkc5M0xtUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvWENKYlpHRjBZUzF3YjNKMFlXdzlYQ0lnS3lCd2IzSjBZV3hMWlhrZ0t5QmNJbDFjSWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2RHOXZiSFJwY0VWc1pXMWxiblFnUFNCd2IzSjBZV3hGYkdWdFpXNTBMbVpwY25OMFJXeGxiV1Z1ZEVOb2FXeGtPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NHOXlkR0ZzUld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMkpzYjJOckp6dGNiaUFnSUNBZ0lDQWdJQ0FnSUhWMGFXeHpYekV1WkdWbVlYVnNkQzUxY0dSaGRHVlViMjlzZEdsd0tIZHlZWEJ3WlhKRmJHVnRaVzUwTENCMGIyOXNkR2x3Uld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyMXZkWE5sYjNWMEp5d2dablZ1WTNScGIyNGdLR1YyWlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZM1Z5Y21WdWRGUmhjbWRsZENBOUlHVjJaVzUwTG1OMWNuSmxiblJVWVhKblpYUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdjRzl5ZEdGc1MyVjVJRDBnWTNWeWNtVnVkRlJoY21kbGRDNW5aWFJCZEhSeWFXSjFkR1VvSjJSaGRHRXRjRzl5ZEdGc0xXdGxlU2NwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhCdmNuUmhiQ0E5SUhkcGJtUnZkeTVrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtGd2lXMlJoZEdFdGNHOXlkR0ZzUFZ3aUlDc2djRzl5ZEdGc1MyVjVJQ3NnWENKZFhDSXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NHOXlkR0ZzTG5OMGVXeGxMbVJwYzNCc1lYa2dQU0FuYm05dVpTYzdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDBwTzF4dWZTazdYRzVjYmx4dVhHNHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNYRzR2THlBdUwyUnBjM1F2YzNSaGRHbGpMM1J2YjJ4MGFYQXVhbk5jYmk4dklHMXZaSFZzWlNCcFpDQTlJREV3Tmx4dUx5OGdiVzlrZFd4bElHTm9kVzVyY3lBOUlERWlMQ0pjSW5WelpTQnpkSEpwWTNSY0lqdGNiazlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCY0lsOWZaWE5OYjJSMWJHVmNJaXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYm5kcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RFVDAxRGIyNTBaVzUwVEc5aFpHVmtKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhkcGJtUnZkeTVrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1WXkxMWNHeHZZV1FuS1M1emJHbGpaU2dwTG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFwSUh0Y2JpQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Nka2NtRm5iM1psY2ljc0lHWjFibU4wYVc5dUlDaGxkbVZ1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhabGJuUXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQmpkWEp5Wlc1MFJXeGxiV1Z1ZENBOUlHVjJaVzUwTG1OMWNuSmxiblJVWVhKblpYUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwUld4bGJXVnVkQzVqYkdGemMweHBjM1F1WVdSa0tDY3RZV04wYVhabEp5azdYRzRnSUNBZ0lDQWdJSDBzSUdaaGJITmxLVHRjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RrY21GbmJHVmhkbVVuTENCbWRXNWpkR2x2YmlBb1pYWmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1YyWlc1MExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1kzVnljbVZ1ZEVWc1pXMWxiblFnUFNCbGRtVnVkQzVqZFhKeVpXNTBWR0Z5WjJWME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRVZzWlcxbGJuUXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25MV0ZqZEdsMlpTY3BPMXh1SUNBZ0lDQWdJQ0I5TENCbVlXeHpaU2s3WEc0Z0lDQWdJQ0FnSUdWc1pXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWkhKdmNDY3NJR1oxYm1OMGFXOXVJQ2hsZG1WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pYWmxiblF1YzNSdmNGQnliM0JoWjJGMGFXOXVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZEM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdOMWNuSmxiblJGYkdWdFpXNTBJRDBnWlhabGJuUXVZM1Z5Y21WdWRGUmhjbWRsZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUkZiR1Z0Wlc1MExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb0p5MWhZM1JwZG1VbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQm1hV3hsY3lBOUlHVjJaVzUwTG1SaGRHRlVjbUZ1YzJabGNpNW1hV3hsY3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCamRYTjBiMjFGZG1WdWRDQTlJRzVsZHlCRGRYTjBiMjFGZG1WdWRDZ25kWEJzYjJGa0p5d2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsZEdGcGJEb2dabWxzWlhOY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRFVnNaVzFsYm5RdVpHbHpjR0YwWTJoRmRtVnVkQ2hqZFhOMGIyMUZkbVZ1ZENrN1hHNGdJQ0FnSUNBZ0lIMHNJR1poYkhObEtUdGNiaUFnSUNBZ0lDQWdaV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lHWjFibU4wYVc5dUlDaGxkbVZ1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTjFjbkpsYm5SRmJHVnRaVzUwSUQwZ1pYWmxiblF1WTNWeWNtVnVkRlJoY21kbGREdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJGYkdWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0oybHVjSFYwSnlrdVkyeHBZMnNvS1R0Y2JpQWdJQ0FnSUNBZ2ZTd2dabUZzYzJVcE8xeHVJQ0FnSUNBZ0lDQjJZWElnYVc1d2RYUWdQU0JsYkdWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0oybHVjSFYwSnlrN1hHNGdJQ0FnSUNBZ0lHbHVjSFYwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOb1lXNW5aU2NzSUdaMWJtTjBhVzl1SUNobGRtVnVkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdOMWNuSmxiblJGYkdWdFpXNTBJRDBnWlhabGJuUXVZM1Z5Y21WdWRGUmhjbWRsZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCbWFXeGxjeUE5SUdOMWNuSmxiblJGYkdWdFpXNTBMbVpwYkdWek8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHTjFjM1J2YlVWMlpXNTBJRDBnYm1WM0lFTjFjM1J2YlVWMlpXNTBLQ2QxY0d4dllXUW5MQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdWMFlXbHNPaUJtYVd4bGMxeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBSV3hsYldWdWRDNXdZWEpsYm5ST2IyUmxMbVJwYzNCaGRHTm9SWFpsYm5Rb1kzVnpkRzl0UlhabGJuUXBPMXh1SUNBZ0lDQWdJQ0I5TENCbVlXeHpaU2s3WEc0Z0lDQWdmU2s3WEc1OUtUdGNibHh1WEc1Y2JpOHZMeTh2THk4dkx5OHZMeTh2THk4dkwxeHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaTh2SUM0dlpHbHpkQzl6ZEdGMGFXTXZkWEJzYjJGa0xtcHpYRzR2THlCdGIyUjFiR1VnYVdRZ1BTQXhNRGRjYmk4dklHMXZaSFZzWlNCamFIVnVhM01nUFNBeElpd2lYQ0oxYzJVZ2MzUnlhV04wWENJN1hHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnWENKZlgyVnpUVzlrZFd4bFhDSXNJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzV5WlhGMWFYSmxLRndpTGk5emRHRjBhV012WTJobFkydGliM2hjSWlrN1hHNXlaWEYxYVhKbEtGd2lMaTl6ZEdGMGFXTXZjbUZrYVc5Y0lpazdYRzV5WlhGMWFYSmxLRndpTGk5emRHRjBhV012ZEc5bloyeGxYQ0lwTzF4dWNtVnhkV2x5WlNoY0lpNHZjM1JoZEdsakwzUnZiMngwYVhCY0lpazdYRzV5WlhGMWFYSmxLRndpTGk5emRHRjBhV012ZFhCc2IyRmtYQ0lwTzF4dVhHNWNibHh1THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWx4dUx5OGdMaTlrYVhOMEwzTjBZWFJwWXk1cWMxeHVMeThnYlc5a2RXeGxJR2xrSUQwZ01UQTVYRzR2THlCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTVNJc0lsd2lkWE5sSUhOMGNtbGpkRndpTzF4dVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRndpWDE5bGMwMXZaSFZzWlZ3aUxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVkbUZ5SUZWMGFXeHpJRDBnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCbWRXNWpkR2x2YmlCVmRHbHNjeWdwSUh0Y2JpQWdJQ0I5WEc0Z0lDQWdWWFJwYkhNdWNISnZkRzkwZVhCbExtZGxibVZ5WVhSbFMyVjVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1hDSnJYQ0lnS3lCTllYUm9MbkpoYm1SdmJTZ3BMblJ2VTNSeWFXNW5LRE0yS1M1emRXSnpkSElvTWl3Z01qQXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ1ZYUnBiSE11Y0hKdmRHOTBlWEJsTG5Wd1pHRjBaVlJ2YjJ4MGFYQWdQU0JtZFc1amRHbHZiaUFvZDNKaGNIQmxja1ZzWlcxbGJuUXNJSFJ2YjJ4MGFYQkZiR1Z0Wlc1MExDQndjbVZtWlhJcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhKbFkzUWdQU0IzY21Gd2NHVnlSV3hsYldWdWRDNW5aWFJDYjNWdVpHbHVaME5zYVdWdWRGSmxZM1FvS1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJSGR5WVhCd1pYSlhhV1IwYUNBOUlIZHlZWEJ3WlhKRmJHVnRaVzUwTG05bVpuTmxkRmRwWkhSb08xeHVJQ0FnSUNBZ0lDQjJZWElnZDNKaGNIQmxja2hsYVdkb2RDQTlJSGR5WVhCd1pYSkZiR1Z0Wlc1MExtOW1abk5sZEVobGFXZG9kRHRjYmlBZ0lDQWdJQ0FnZG1GeUlIZHBaSFJvSUQwZ2RHOXZiSFJwY0VWc1pXMWxiblF1YjJabWMyVjBWMmxrZEdnN1hHNGdJQ0FnSUNBZ0lIWmhjaUJvWldsbmFIUWdQU0IwYjI5c2RHbHdSV3hsYldWdWRDNXZabVp6WlhSSVpXbG5hSFE3WEc0Z0lDQWdJQ0FnSUhaaGNpQnNaV1owSUQwZ01EdGNiaUFnSUNBZ0lDQWdkbUZ5SUhSdmNDQTlJREE3WEc0Z0lDQWdJQ0FnSUhaaGNpQjBZV2xzVTJsNlpTQTlJRGc3WEc0Z0lDQWdJQ0FnSUhaaGNpQm1hWFJ6VW1sbmFIUWdQU0J5WldOMExteGxablFnS3lCM2FXUjBhQ0FySUhSaGFXeFRhWHBsSUR3Z2QybHVaRzkzTG1sdWJtVnlWMmxrZEdnN1hHNGdJQ0FnSUNBZ0lIWmhjaUJtYVhSelVtbG5hSFJJWVd4bUlEMGdjbVZqZEM1c1pXWjBJQ3NnZDJsa2RHZ2dMeUF5SUNzZ2RHRnBiRk5wZW1VZ1BDQjNhVzVrYjNjdWFXNXVaWEpYYVdSMGFEdGNiaUFnSUNBZ0lDQWdkbUZ5SUdacGRITkNiM1IwYjIwZ1BTQnlaV04wTG1KdmRIUnZiU0FySUdobGFXZG9kQ0FySUhSaGFXeFRhWHBsSUR3Z2QybHVaRzkzTG1sdWJtVnlTR1ZwWjJoME8xeHVJQ0FnSUNBZ0lDQjJZWElnWm1sMGMweGxablFnUFNCeVpXTjBMbXhsWm5RZ0xTQjNhV1IwYUNBdElIUmhhV3hUYVhwbElENGdNRHRjYmlBZ0lDQWdJQ0FnZG1GeUlHWnBkSE5NWldaMFNHRnNaaUE5SUhKbFkzUXViR1ZtZENBdElIZHBaSFJvSUMwZ2RHRnBiRk5wZW1VZ0x5QXlJRDRnTUR0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1pwZEhOVWIzQWdQU0J5WldOMExuUnZjQ0F0SUdobGFXZG9kQ0F0SUhSaGFXeFRhWHBsSUQ0Z01EdGNiaUFnSUNBZ0lDQWdkbUZ5SUhCdmMybDBhVzl1TzF4dUlDQWdJQ0FnSUNCMllYSWdjMk55YjJ4c1ZHOXdJRDBnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbk5qY205c2JGUnZjQ0I4ZkNCa2IyTjFiV1Z1ZEM1aWIyUjVMbk5qY205c2JGUnZjRHRjYmlBZ0lDQWdJQ0FnZG1GeUlITmpjbTlzYkV4bFpuUWdQU0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjMk55YjJ4c1RHVm1kQ0I4ZkNCa2IyTjFiV1Z1ZEM1aWIyUjVMbk5qY205c2JFeGxablE3WEc0Z0lDQWdJQ0FnSUhSdmIyeDBhWEJGYkdWdFpXNTBMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KeTEwWVdsc0xYUnZjQ2NwTzF4dUlDQWdJQ0FnSUNCMGIyOXNkR2x3Uld4bGJXVnVkQzVqYkdGemMweHBjM1F1Y21WdGIzWmxLQ2N0ZEdGcGJDMXlhV2RvZENjcE8xeHVJQ0FnSUNBZ0lDQjBiMjlzZEdsd1JXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0NjdGRHRnBiQzFpYjNSMGIyMG5LVHRjYmlBZ0lDQWdJQ0FnZEc5dmJIUnBjRVZzWlcxbGJuUXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTZ25MWFJoYVd3dGJHVm1kQ2NwTzF4dUlDQWdJQ0FnSUNCcFppQW9jSEpsWm1WeUlEMDlQU0FuYkdWbWRDY2dKaVlnWm1sMGMweGxablFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ2YzJsMGFXOXVJRDBnSjJ4bFpuUW5PMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWc2MyVWdhV1lnS0hCeVpXWmxjaUE5UFQwZ0ozSnBaMmgwSnlBbUppQm1hWFJ6VW1sbmFIUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnZjMmwwYVc5dUlEMGdKM0pwWjJoMEp6dGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObElHbG1JQ2h3Y21WbVpYSWdQVDA5SUNkMGIzQW5JQ1ltSUdacGRITlNhV2RvZEVoaGJHWWdKaVlnWm1sMGMweGxablJJWVd4bUlDWW1JR1pwZEhOVWIzQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnZjMmwwYVc5dUlEMGdKM1J2Y0NjN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCcFppQW9abWwwYzFKcFoyaDBTR0ZzWmlBbUppQm1hWFJ6VEdWbWRFaGhiR1lnSmlZZ0tHWnBkSE5VYjNBZ2ZId2dabWwwYzBKdmRIUnZiU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ2YzJsMGFXOXVJRDBnWm1sMGMwSnZkSFJ2YlNBL0lDZGliM1IwYjIwbklEb2dKM1J2Y0NjN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3YjNOcGRHbHZiaUE5SUdacGRITlNhV2RvZENBL0lDZHlhV2RvZENjZ09pQW5iR1ZtZENjN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0hCdmMybDBhVzl1SUQwOVBTQW5kRzl3SnlCOGZDQndiM05wZEdsdmJpQTlQVDBnSjJKdmRIUnZiU2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsWm5RZ1BTQnlaV04wTG14bFpuUWdMU0IzYVdSMGFDQXZJRElnS3lCM2NtRndjR1Z5VjJsa2RHZ2dMeUF5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCdmMybDBhVzl1SUQwOVBTQW5kRzl3SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnZjQ0E5SUhKbFkzUXVkRzl3SUMwZ2FHVnBaMmgwSUMwZ2RHRnBiRk5wZW1VN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHOXZiSFJwY0VWc1pXMWxiblF1WTJ4aGMzTk1hWE4wTG1Ga1pDZ25MWFJoYVd3dFltOTBkRzl0SnlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGIzQWdQU0J5WldOMExuUnZjQ0FySUhkeVlYQndaWEpJWldsbmFIUWdLeUIwWVdsc1UybDZaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYjI5c2RHbHdSV3hsYldWdWRDNWpiR0Z6YzB4cGMzUXVZV1JrS0NjdGRHRnBiQzEwYjNBbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2Y0NBOUlISmxZM1F1ZEc5d0lDMGdhR1ZwWjJoMElDOGdNaUFySUhkeVlYQndaWEpJWldsbmFIUWdMeUF5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCdmMybDBhVzl1SUQwOVBTQW5iR1ZtZENjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaV1owSUQwZ2NtVmpkQzVzWldaMElDMGdkMmxrZEdnZ0xTQjBZV2xzVTJsNlpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBiMjlzZEdsd1JXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdVlXUmtLQ2N0ZEdGcGJDMXlhV2RvZENjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVm1kQ0E5SUhKbFkzUXViR1ZtZENBcklIZHlZWEJ3WlhKWGFXUjBhQ0FySUhSaGFXeFRhWHBsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSdmIyeDBhWEJGYkdWdFpXNTBMbU5zWVhOelRHbHpkQzVoWkdRb0p5MTBZV2xzTFd4bFpuUW5LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYjI5c2RHbHdSV3hsYldWdWRDNXpkSGxzWlM1c1pXWjBJRDBnS0hOamNtOXNiRXhsWm5RZ0t5QnNaV1owS1NBcklDZHdlQ2M3WEc0Z0lDQWdJQ0FnSUhSdmIyeDBhWEJGYkdWdFpXNTBMbk4wZVd4bExuUnZjQ0E5SUNoelkzSnZiR3hVYjNBZ0t5QjBiM0FwSUNzZ0ozQjRKenRjYmlBZ0lDQjlPMXh1SUNBZ0lISmxkSFZ5YmlCVmRHbHNjenRjYm4wb0tTazdYRzVsZUhCdmNuUnpMbVJsWm1GMWJIUWdQU0J1WlhjZ1ZYUnBiSE1vS1R0Y2JseHVYRzVjYmk4dkx5OHZMeTh2THk4dkx5OHZMeTh2TDF4dUx5OGdWMFZDVUVGRFN5QkdUMDlVUlZKY2JpOHZJQzR2WkdsemRDOTFkR2xzY3k1cWMxeHVMeThnYlc5a2RXeGxJR2xrSUQwZ01qaGNiaTh2SUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3SURFaVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9leGFtcGxlL2NsaWVudC9zdGF0aWMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==