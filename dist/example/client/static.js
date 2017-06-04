/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(202);


/***/ }),

/***/ 198:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Utils = function () {
	  function Utils() {
	    _classCallCheck(this, Utils);
	  }
	
	  _createClass(Utils, [{
	    key: 'generateKey',
	    value: function generateKey() {
	      return 'k' + Math.random().toString(36).substr(2, 20);
	    }
	  }, {
	    key: 'updateTooltip',
	    value: function updateTooltip(wrapperElement, tooltipElement, prefer) {
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
	      var position = void 0;
	
	      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	      var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	
	      tooltipElement.classList.remove('-tail-top');
	      tooltipElement.classList.remove('-tail-right');
	      tooltipElement.classList.remove('-tail-bottom');
	      tooltipElement.classList.remove('-tail-left');
	
	      if (prefer === 'left' && fitsLeft) {
	        position = 'left';
	      } else if (prefer === 'right' && fitsRight) {
	        position = 'right';
	      } else if (prefer === 'top' && fitsRightHalf && fitsLeftHalf && fitsTop) {
	        position = 'top';
	      } else if (fitsRightHalf && fitsLeftHalf && (fitsTop || fitsBottom)) {
	        position = fitsBottom ? 'bottom' : 'top';
	      } else {
	        position = fitsRight ? 'right' : 'left';
	      }
	
	      if (position === 'top' || position === 'bottom') {
	        left = rect.left - width / 2 + wrapperWidth / 2;
	        if (position === 'top') {
	          top = rect.top - height - tailSize;
	          tooltipElement.classList.add('-tail-bottom');
	        } else {
	          top = rect.top + wrapperHeight + tailSize;
	          tooltipElement.classList.add('-tail-top');
	        }
	      } else {
	        top = rect.top - height / 2 + wrapperHeight / 2;
	        if (position === 'left') {
	          left = rect.left - width - tailSize;
	          tooltipElement.classList.add('-tail-right');
	        } else {
	          left = rect.left + wrapperWidth + tailSize;
	          tooltipElement.classList.add('-tail-left');
	        }
	      }
	
	      tooltipElement.style.left = scrollLeft + left + 'px';
	      tooltipElement.style.top = scrollTop + top + 'px';
	    }
	  }]);
	
	  return Utils;
	}();
	
	exports.default = new Utils();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(203);

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(204);
	
	__webpack_require__(205);
	
	__webpack_require__(206);
	
	__webpack_require__(207);
	
	__webpack_require__(208);

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

	'use strict';
	
	window.addEventListener('DOMContentLoaded', function () {
	  Array.from(window.document.querySelectorAll('.c-checkbox')).forEach(function (element) {
	    element.addEventListener('click', function (event) {
	      var checked = event.currentTarget.getAttribute('aria-checked');
	      event.currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
	    });
	  });
	});

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

	'use strict';
	
	window.addEventListener('DOMContentLoaded', function () {
	  Array.from(window.document.querySelectorAll('.c-radio')).forEach(function (element) {
	
	    element.addEventListener('click', function (event) {
	      var checked = event.currentTarget.getAttribute('aria-checked');
	      var currentName = element.getAttribute('data-name');
	
	      Array.from(window.document.querySelectorAll('.c-radio')).forEach(function (element) {
	        if (element.getAttribute('data-name') === currentName) {
	          element.setAttribute('aria-checked', 'false');
	        }
	      });
	      event.currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
	    });
	  });
	});

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

	'use strict';
	
	window.addEventListener('DOMContentLoaded', function () {
	  Array.from(window.document.querySelectorAll('.c-toggle')).forEach(function (element) {
	    element.addEventListener('click', function (event) {
	      var checked = event.currentTarget.getAttribute('aria-checked');
	      event.currentTarget.setAttribute('aria-checked', checked === 'true' ? 'false' : 'true');
	    });
	  });
	});

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utils = __webpack_require__(198);
	
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

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

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
	
	      currentElement.parentNode.dispatchEvent(customEvent);
	    }, false);
	  });
	});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjE4Yjg0ZmM3NGQyZDFlMzA2ODQ/Y2YwNSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanM/MmZmOCIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9jbGllbnQvc3RhdGljLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JhZGlvLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3VwbG9hZC5qcyJdLCJuYW1lcyI6WyJVdGlscyIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsIndyYXBwZXJFbGVtZW50IiwidG9vbHRpcEVsZW1lbnQiLCJwcmVmZXIiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid3JhcHBlcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ3cmFwcGVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwidGFpbFNpemUiLCJmaXRzUmlnaHQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZml0c1JpZ2h0SGFsZiIsImZpdHNCb3R0b20iLCJib3R0b20iLCJpbm5lckhlaWdodCIsImZpdHNMZWZ0IiwiZml0c0xlZnRIYWxmIiwiZml0c1RvcCIsInBvc2l0aW9uIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImV2ZW50IiwiY2hlY2tlZCIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJjdXJyZW50TmFtZSIsInBvcnRhbEtleSIsInBvcnRhbEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJkaXNwbGF5IiwidXBkYXRlVG9vbHRpcCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudEVsZW1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJmaWxlcyIsImRhdGFUcmFuc2ZlciIsImN1c3RvbUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwiY2xpY2siLCJwYXJlbnROb2RlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0N0Q01BLEs7Ozs7Ozs7bUNBQ1U7QUFDWixvQkFBV0MsS0FBS0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxNQUEzQixDQUFrQyxDQUFsQyxFQUFxQyxFQUFyQyxDQUFYO0FBQ0Q7OzttQ0FFYUMsYyxFQUFnQkMsYyxFQUFnQkMsTSxFQUFRO0FBQ3BELFdBQUlDLE9BQU9ILGVBQWVJLHFCQUFmLEVBQVg7QUFDQSxXQUFJQyxlQUFlTCxlQUFlTSxXQUFsQztBQUNBLFdBQUlDLGdCQUFnQlAsZUFBZVEsWUFBbkM7QUFDQSxXQUFJQyxRQUFRUixlQUFlSyxXQUEzQjtBQUNBLFdBQUlJLFNBQVNULGVBQWVPLFlBQTVCO0FBQ0EsV0FBSUcsT0FBTyxDQUFYO0FBQ0EsV0FBSUMsTUFBTSxDQUFWO0FBQ0EsV0FBSUMsV0FBVyxDQUFmO0FBQ0EsV0FBSUMsWUFBWVgsS0FBS1Es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RCxFQTVDRCxFIiwiZmlsZSI6InN0YXRpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGYxOGI4NGZjNzRkMmQxZTMwNjg0IiwiY2xhc3MgVXRpbHMge1xuICBnZW5lcmF0ZUtleSgpIHtcbiAgICByZXR1cm4gYGske01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAyMCl9YDtcbiAgfVxuXG4gIHVwZGF0ZVRvb2x0aXAod3JhcHBlckVsZW1lbnQsIHRvb2x0aXBFbGVtZW50LCBwcmVmZXIpIHtcbiAgICBsZXQgcmVjdCA9IHdyYXBwZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCB3cmFwcGVyV2lkdGggPSB3cmFwcGVyRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBsZXQgd3JhcHBlckhlaWdodCA9IHdyYXBwZXJFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICBsZXQgd2lkdGggPSB0b29sdGlwRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gdG9vbHRpcEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGxldCBsZWZ0ID0gMDtcbiAgICBsZXQgdG9wID0gMDtcbiAgICBsZXQgdGFpbFNpemUgPSA4O1xuICAgIGxldCBmaXRzUmlnaHQgPSByZWN0LmxlZnQgKyB3aWR0aCArIHRhaWxTaXplIDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgbGV0IGZpdHNSaWdodEhhbGYgPSByZWN0LmxlZnQgKyB3aWR0aCAvIDIgKyB0YWlsU2l6ZSA8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBmaXRzQm90dG9tID0gcmVjdC5ib3R0b20gKyBoZWlnaHQgKyB0YWlsU2l6ZSA8IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBsZXQgZml0c0xlZnQgPSByZWN0LmxlZnQgLSB3aWR0aCAtIHRhaWxTaXplID4gMDtcbiAgICBsZXQgZml0c0xlZnRIYWxmID0gcmVjdC5sZWZ0IC0gd2lkdGggLSB0YWlsU2l6ZSAvIDIgPiAwO1xuICAgIGxldCBmaXRzVG9wID0gcmVjdC50b3AgLSBoZWlnaHQgLSB0YWlsU2l6ZSA+IDA7XG4gICAgbGV0IHBvc2l0aW9uO1xuXG4gICAgbGV0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgbGV0IHNjcm9sbExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG5cbiAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctdGFpbC10b3AnKTtcbiAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctdGFpbC1yaWdodCcpO1xuICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10YWlsLWJvdHRvbScpO1xuICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10YWlsLWxlZnQnKTtcblxuICAgIGlmIChwcmVmZXIgPT09ICdsZWZ0JyAmJiBmaXRzTGVmdCkge1xuICAgICAgcG9zaXRpb24gPSAnbGVmdCc7XG4gICAgfSBlbHNlIGlmIChwcmVmZXIgPT09ICdyaWdodCcgJiYgZml0c1JpZ2h0KSB7XG4gICAgICBwb3NpdGlvbiA9ICdyaWdodCc7XG4gICAgfSBlbHNlIGlmIChwcmVmZXIgPT09ICd0b3AnICYmIGZpdHNSaWdodEhhbGYgJiYgZml0c0xlZnRIYWxmICYmIGZpdHNUb3ApIHtcbiAgICAgIHBvc2l0aW9uID0gJ3RvcCc7XG4gICAgfSBlbHNlIGlmIChmaXRzUmlnaHRIYWxmICYmIGZpdHNMZWZ0SGFsZiAmJiAoZml0c1RvcCB8fCBmaXRzQm90dG9tKSkge1xuICAgICAgcG9zaXRpb24gPSBmaXRzQm90dG9tID8gJ2JvdHRvbScgOiAndG9wJztcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zaXRpb24gPSBmaXRzUmlnaHQgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICBsZWZ0ID0gcmVjdC5sZWZ0IC0gd2lkdGggLyAyICsgd3JhcHBlcldpZHRoIC8gMjtcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgdG9wID0gcmVjdC50b3AgLSBoZWlnaHQgLSB0YWlsU2l6ZTtcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXRhaWwtYm90dG9tJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3AgPSByZWN0LnRvcCArIHdyYXBwZXJIZWlnaHQgKyB0YWlsU2l6ZTtcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXRhaWwtdG9wJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcCA9IHJlY3QudG9wIC0gaGVpZ2h0IC8gMiArIHdyYXBwZXJIZWlnaHQgLyAyO1xuICAgICAgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgbGVmdCA9IHJlY3QubGVmdCAtIHdpZHRoIC0gdGFpbFNpemU7XG4gICAgICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10YWlsLXJpZ2h0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWZ0ID0gcmVjdC5sZWZ0ICsgd3JhcHBlcldpZHRoICsgdGFpbFNpemU7XG4gICAgICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJy10YWlsLWxlZnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b29sdGlwRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHNjcm9sbExlZnQgKyBsZWZ0KSArICdweCc7XG4gICAgdG9vbHRpcEVsZW1lbnQuc3R5bGUudG9wID0gKHNjcm9sbFRvcCArIHRvcCkgKyAncHgnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBVdGlscygpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0ICcuLi8uLi9zdGF0aWMnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9leGFtcGxlL2NsaWVudC9zdGF0aWMuanMiLCJpbXBvcnQgJy4vc3RhdGljL2NoZWNrYm94JztcbmltcG9ydCAnLi9zdGF0aWMvcmFkaW8nO1xuaW1wb3J0ICcuL3N0YXRpYy90b2dnbGUnO1xuaW1wb3J0ICcuL3N0YXRpYy90b29sdGlwJztcbmltcG9ydCAnLi9zdGF0aWMvdXBsb2FkJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0aWMuanMiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgQXJyYXkuZnJvbSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmMtY2hlY2tib3gnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJyk7XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgY2hlY2tlZCA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRpYy9jaGVja2JveC5qcyIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBBcnJheS5mcm9tKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy1yYWRpbycpKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY2hlY2tlZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnKTsgIFxuICAgICAgY29uc3QgY3VycmVudE5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XG4gICAgICBcbiAgICAgIEFycmF5LmZyb20od2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLXJhZGlvJykpLmZvckVhY2goKGVsZW1lbnQpPT57XG4gICAgICBcdGlmKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSA9PT0gY3VycmVudE5hbWUpe1xuICAgICAgXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAnZmFsc2UnKTtcbiAgICAgIFx0fVxuICAgICAgfSlcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBjaGVja2VkID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnKTtcbiAgICAgICBcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGljL3JhZGlvLmpzIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIEFycmF5LmZyb20od2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLXRvZ2dsZScpKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY2hlY2tlZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnKTtcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBjaGVja2VkID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGljL3RvZ2dsZS5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBBcnJheS5mcm9tKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy10b29sdGlwLXdyYXBwZXInKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB3cmFwcGVyRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBwb3J0YWxLZXkgPSB3cmFwcGVyRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9ydGFsLWtleScpO1xuICAgICAgY29uc3QgcG9ydGFsRWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3J0YWw9JHtwb3J0YWxLZXl9XWApO1xuICAgICAgY29uc3QgdG9vbHRpcEVsZW1lbnQgPSBwb3J0YWxFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgcG9ydGFsRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHV0aWxzLnVwZGF0ZVRvb2x0aXAod3JhcHBlckVsZW1lbnQsIHRvb2x0aXBFbGVtZW50KTtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBwb3J0YWxLZXkgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3J0YWwta2V5Jyk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9ydGFsPSR7cG9ydGFsS2V5fV1gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0aWMvdG9vbHRpcC5qcyIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBBcnJheS5mcm9tKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy11cGxvYWQnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCctYWN0aXZlJyk7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctYWN0aXZlJyk7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCctYWN0aXZlJyk7XG5cbiAgICAgIGNvbnN0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3VwbG9hZCcsIHtcbiAgICAgICAgZGV0YWlsOiBmaWxlc1xuICAgICAgfSk7XG5cbiAgICAgIGN1cnJlbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuXG4gICAgfSwgZmFsc2UpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY3VycmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jbGljaygpO1xuICAgIH0sIGZhbHNlKTtcblxuICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IGZpbGVzID0gY3VycmVudEVsZW1lbnQuZmlsZXM7XG4gICAgICBjb25zdCBjdXN0b21FdmVudCA9IG5ldyBDdXN0b21FdmVudCgndXBsb2FkJywge1xuICAgICAgICBkZXRhaWw6IGZpbGVzXG4gICAgICB9KTtcblxuICAgICAgY3VycmVudEVsZW1lbnQucGFyZW50Tm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcbiAgICB9LCBmYWxzZSk7XG4gIH0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRpYy91cGxvYWQuanMiXSwic291cmNlUm9vdCI6IiJ9