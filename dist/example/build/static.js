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
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ({

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(89);


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
    var elements = window.document.querySelectorAll('.c-checkbox');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.addEventListener('click', function (event) {
            var currentTarget = event.currentTarget;
            var checked = currentTarget.getAttribute('aria-checked');
            currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
        });
    }
});


/***/ }),

/***/ 108:
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
    var elements = window.document.querySelectorAll('.c-radio');
    var _loop_1 = function (i) {
        var element = elements[i];
        element.addEventListener('click', function (event) {
            var currentTarget = event.currentTarget;
            var checked = currentTarget.getAttribute('aria-checked');
            var currentName = element.getAttribute('data-name');
            for (var j = 0; j < elements.length; j++) {
                var elementToUnCheck = elements[j];
                if (elementToUnCheck.getAttribute('data-name') === currentName) {
                    elementToUnCheck.setAttribute('aria-checked', 'false');
                }
            }
            currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
        });
    };
    for (var i = 0; i < elements.length; i++) {
        _loop_1(i);
    }
});


/***/ }),

/***/ 109:
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
    var elements = window.document.querySelectorAll('.c-toggle');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.addEventListener('click', function (event) {
            var currentTarget = event.currentTarget;
            var checked = currentTarget.getAttribute('aria-checked');
            currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
        });
    }
});


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(36);
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


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function () {
    var elements = window.document.querySelectorAll('.c-upload');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
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
    }
});


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    generateKey() {
        return `k${Math.random().toString(36).substr(2, 20)}`;
    }
    updateTooltip(wrapperElement, tooltipElement, prefer) {
        let rect = wrapperElement.getBoundingClientRect();
        let wrapperWidth = wrapperElement.offsetWidth;
        let wrapperHeight = wrapperElement.offsetHeight;
        let width = tooltipElement.offsetWidth;
        let height = tooltipElement.offsetHeight;
        let left = 0;
        let top = 0;
        let tailSize = 8;
        let fitsRight = rect.left + width + tailSize < window.innerWidth;
        let fitsRightHalf = rect.left + width / 2 + tailSize < window.innerWidth;
        let fitsBottom = rect.bottom + height + tailSize < window.innerHeight;
        let fitsLeft = rect.left - width - tailSize > 0;
        let fitsLeftHalf = rect.left - width - tailSize / 2 > 0;
        let fitsTop = rect.top - height - tailSize > 0;
        let position;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
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
    }
}
exports.Utils = Utils;
exports.default = new Utils();


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(107);
__webpack_require__(108);
__webpack_require__(109);
__webpack_require__(110);
__webpack_require__(111);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWUzMGFlMmM0NTQ3MjQwNmEwMzU/MDk0ZSIsIndlYnBhY2s6Ly8vLi9kaXN0L2V4YW1wbGUvY2xpZW50L3N0YXRpYy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N0YXRpYy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N0YXRpYy9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N0YXRpYy90b2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zdGF0aWMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3N0YXRpYy91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC91dGlscy5qcz9jYTA1Iiwid2VicGFjazovLy8uL2Rpc3Qvc3RhdGljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDaEVBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7Ozs7Ozs7O0FDVkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUNwQkQ7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7Ozs7Ozs7OztBQ1ZEO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7Ozs7OztBQ3RCRDtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7Ozs7Ozs7OztBQ3ZDRDtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSxtQkFBbUIseUNBQXlDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdEVBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkaXN0L2V4YW1wbGUvYnVpbGQvc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVlMzBhZTJjNDU0NzI0MDZhMDM1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi4vLi4vc3RhdGljXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L2V4YW1wbGUvY2xpZW50L3N0YXRpYy5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbGVtZW50cyA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy1jaGVja2JveCcpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBjdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJyk7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgY2hlY2tlZCA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L3N0YXRpYy9jaGVja2JveC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbGVtZW50cyA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy1yYWRpbycpO1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBjdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudE5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGVsZW1lbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRUb1VuQ2hlY2sgPSBlbGVtZW50c1tqXTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFRvVW5DaGVjay5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpID09PSBjdXJyZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9VbkNoZWNrLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsIGNoZWNrZWQgPT09ICd0cnVlJyA/ICdmYWxzZScgOiAndHJ1ZScpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX2xvb3BfMShpKTtcbiAgICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9zdGF0aWMvcmFkaW8uanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudHMgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmMtdG9nZ2xlJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB2YXIgY2hlY2tlZCA9IGN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnKTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBjaGVja2VkID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3RhdGljL3RvZ2dsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudHMgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmMtdG9vbHRpcC13cmFwcGVyJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXJFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIHZhciBwb3J0YWxLZXkgPSB3cmFwcGVyRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9ydGFsLWtleScpO1xuICAgICAgICAgICAgdmFyIHBvcnRhbEVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXBvcnRhbD1cIiArIHBvcnRhbEtleSArIFwiXVwiKTtcbiAgICAgICAgICAgIHZhciB0b29sdGlwRWxlbWVudCA9IHBvcnRhbEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBwb3J0YWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdXRpbHNfMS5kZWZhdWx0LnVwZGF0ZVRvb2x0aXAod3JhcHBlckVsZW1lbnQsIHRvb2x0aXBFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIHZhciBwb3J0YWxLZXkgPSBjdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3J0YWwta2V5Jyk7XG4gICAgICAgICAgICB2YXIgcG9ydGFsID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wb3J0YWw9XCIgKyBwb3J0YWxLZXkgKyBcIl1cIik7XG4gICAgICAgICAgICBwb3J0YWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3Qvc3RhdGljL3Rvb2x0aXAuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudHMgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmMtdXBsb2FkJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy1hY3RpdmUnKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctYWN0aXZlJyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLWFjdGl2ZScpO1xuICAgICAgICAgICAgdmFyIGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICAgICAgdmFyIGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd1cGxvYWQnLCB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiBmaWxlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jbGljaygpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHZhciBpbnB1dCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGZpbGVzID0gY3VycmVudEVsZW1lbnQuZmlsZXM7XG4gICAgICAgICAgICB2YXIgY3VzdG9tRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3VwbG9hZCcsIHtcbiAgICAgICAgICAgICAgICBkZXRhaWw6IGZpbGVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudE5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9zdGF0aWMvdXBsb2FkLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBVdGlscyB7XG4gICAgZ2VuZXJhdGVLZXkoKSB7XG4gICAgICAgIHJldHVybiBgayR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDIwKX1gO1xuICAgIH1cbiAgICB1cGRhdGVUb29sdGlwKHdyYXBwZXJFbGVtZW50LCB0b29sdGlwRWxlbWVudCwgcHJlZmVyKSB7XG4gICAgICAgIGxldCByZWN0ID0gd3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGxldCB3cmFwcGVyV2lkdGggPSB3cmFwcGVyRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgbGV0IHdyYXBwZXJIZWlnaHQgPSB3cmFwcGVyRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGxldCB3aWR0aCA9IHRvb2x0aXBFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdG9vbHRpcEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgbGVmdCA9IDA7XG4gICAgICAgIGxldCB0b3AgPSAwO1xuICAgICAgICBsZXQgdGFpbFNpemUgPSA4O1xuICAgICAgICBsZXQgZml0c1JpZ2h0ID0gcmVjdC5sZWZ0ICsgd2lkdGggKyB0YWlsU2l6ZSA8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBsZXQgZml0c1JpZ2h0SGFsZiA9IHJlY3QubGVmdCArIHdpZHRoIC8gMiArIHRhaWxTaXplIDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGxldCBmaXRzQm90dG9tID0gcmVjdC5ib3R0b20gKyBoZWlnaHQgKyB0YWlsU2l6ZSA8IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgbGV0IGZpdHNMZWZ0ID0gcmVjdC5sZWZ0IC0gd2lkdGggLSB0YWlsU2l6ZSA+IDA7XG4gICAgICAgIGxldCBmaXRzTGVmdEhhbGYgPSByZWN0LmxlZnQgLSB3aWR0aCAtIHRhaWxTaXplIC8gMiA+IDA7XG4gICAgICAgIGxldCBmaXRzVG9wID0gcmVjdC50b3AgLSBoZWlnaHQgLSB0YWlsU2l6ZSA+IDA7XG4gICAgICAgIGxldCBwb3NpdGlvbjtcbiAgICAgICAgbGV0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIGxldCBzY3JvbGxMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xuICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctdGFpbC10b3AnKTtcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXRhaWwtcmlnaHQnKTtcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXRhaWwtYm90dG9tJyk7XG4gICAgICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10YWlsLWxlZnQnKTtcbiAgICAgICAgaWYgKHByZWZlciA9PT0gJ2xlZnQnICYmIGZpdHNMZWZ0KSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdsZWZ0JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcmVmZXIgPT09ICdyaWdodCcgJiYgZml0c1JpZ2h0KSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJlZmVyID09PSAndG9wJyAmJiBmaXRzUmlnaHRIYWxmICYmIGZpdHNMZWZ0SGFsZiAmJiBmaXRzVG9wKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9ICd0b3AnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZpdHNSaWdodEhhbGYgJiYgZml0c0xlZnRIYWxmICYmIChmaXRzVG9wIHx8IGZpdHNCb3R0b20pKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGZpdHNCb3R0b20gPyAnYm90dG9tJyA6ICd0b3AnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBmaXRzUmlnaHQgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICBsZWZ0ID0gcmVjdC5sZWZ0IC0gd2lkdGggLyAyICsgd3JhcHBlcldpZHRoIC8gMjtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICB0b3AgPSByZWN0LnRvcCAtIGhlaWdodCAtIHRhaWxTaXplO1xuICAgICAgICAgICAgICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10YWlsLWJvdHRvbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9wID0gcmVjdC50b3AgKyB3cmFwcGVySGVpZ2h0ICsgdGFpbFNpemU7XG4gICAgICAgICAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXRhaWwtdG9wJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSByZWN0LnRvcCAtIGhlaWdodCAvIDIgKyB3cmFwcGVySGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IHJlY3QubGVmdCAtIHdpZHRoIC0gdGFpbFNpemU7XG4gICAgICAgICAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXRhaWwtcmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxlZnQgPSByZWN0LmxlZnQgKyB3cmFwcGVyV2lkdGggKyB0YWlsU2l6ZTtcbiAgICAgICAgICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctdGFpbC1sZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuc3R5bGUubGVmdCA9IChzY3JvbGxMZWZ0ICsgbGVmdCkgKyAncHgnO1xuICAgICAgICB0b29sdGlwRWxlbWVudC5zdHlsZS50b3AgPSAoc2Nyb2xsVG9wICsgdG9wKSArICdweCc7XG4gICAgfVxufVxuZXhwb3J0cy5VdGlscyA9IFV0aWxzO1xuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IFV0aWxzKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Rpc3QvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9zdGF0aWMvY2hlY2tib3hcIik7XG5yZXF1aXJlKFwiLi9zdGF0aWMvcmFkaW9cIik7XG5yZXF1aXJlKFwiLi9zdGF0aWMvdG9nZ2xlXCIpO1xucmVxdWlyZShcIi4vc3RhdGljL3Rvb2x0aXBcIik7XG5yZXF1aXJlKFwiLi9zdGF0aWMvdXBsb2FkXCIpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L3N0YXRpYy5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==