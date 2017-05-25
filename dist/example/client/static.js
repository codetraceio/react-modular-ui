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

	module.exports = __webpack_require__(201);


/***/ }),

/***/ 197:
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

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(202);

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(203);
	
	__webpack_require__(204);
	
	__webpack_require__(205);
	
	__webpack_require__(206);

/***/ }),

/***/ 203:
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

/***/ 204:
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

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utils = __webpack_require__(197);
	
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

/***/ 206:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA3YWJjOTE3YzMyZGZmYzRkMTc/NjQyYyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanM/MmZmOCIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZS9jbGllbnQvc3RhdGljLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cGxvYWQuanMiXSwibmFtZXMiOlsiVXRpbHMiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJ3cmFwcGVyRWxlbWVudCIsInRvb2x0aXBFbGVtZW50IiwicHJlZmVyIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndyYXBwZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwid3JhcHBlckhlaWdodCIsIm9mZnNldEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsInRhaWxTaXplIiwiZml0c1JpZ2h0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImZpdHNSaWdodEhhbGYiLCJmaXRzQm90dG9tIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJmaXRzTGVmdCIsImZpdHNMZWZ0SGFsZiIsImZpdHNUb3AiLCJwb3NpdGlvbiIsInNjcm9sbFRvcCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsInNjcm9sbExlZnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJldmVudCIsImNoZWNrZWQiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicG9ydGFsS2V5IiwicG9ydGFsRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImRpc3BsYXkiLCJ1cGRhdGVUb29sdGlwIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50RWxlbWVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbGVzIiwiZGF0YVRyYW5zZmVyIiwiY3VzdG9tRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJjbGljayIsInBhcmVudE5vZGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ3RDTUEsSzs7Ozs7OzttQ0FDVTtBQUNaLG9CQUFXQyxLQUFLQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLE1BQTNCLENBQWtDLENBQWxDLEVBQXFDLEVBQXJDLENBQVg7QUFDRDs7O21DQUVhQyxjLEVBQWdCQyxjLEVBQWdCQyxNLEVBQVE7QUFDcEQsV0FBSUMsT0FBT0gsZUFBZUkscUJBQWYsRUFBWDtBQUNBLFdBQUlDLGVBQWVMLGVBQWVNLFdBQWxDO0FBQ0EsV0FBSUMsZ0JBQWdCUCxlQUFlUSxZQUFuQztBQUNBLFdBQUlDLFFBQVFSLGVBQWVLLFdBQTNCO0FBQ0EsV0FBSUksU0FBU1QsZUFBZU8sWUFBNUI7QUFDQSxXQUFJRyxPQUFPLENBQVg7QUFDQSxXQUFJQyxNQUFNLENBQVY7QUFDQSxXQUFJQyxXQUFXLENBQWY7QUFDQSxXQUFJQyxZQUFZWCxLQUFLUSxJQUFMLEdBQVlGLEtBQVosR0FBb0JJLFFBQXBCLEdBQStCRSxPQUFPQyxVQUF0RDtB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WixNQUFNRSxhQUE3QjtBQUNBLFdBQU1ZLFFBQVFGLGVBQWVFLEtBQTdCO0FBQ0EsV0FBTUUsY0FBYyxJQUFJQyxXQUFKLENBQWdCLFFBQWhCLEVBQTBCO0FBQzVDQyxpQkFBUUo7QUFEb0MsUUFBMUIsQ0FBcEI7O0FBSUFGLHNCQUFlUyxVQUFmLENBQTBCRixhQUExQixDQUF3Q0gsV0FBeEM7QUFDRCxNQVJELEVBUUcsS0FSSDtBQVNELElBMUNEO0FBMkNELEVBNUNELEUiLCJmaWxlIjoic3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTA3YWJjOTE3YzMyZGZmYzRkMTciLCJjbGFzcyBVdGlscyB7XG4gIGdlbmVyYXRlS2V5KCkge1xuICAgIHJldHVybiBgayR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDIwKX1gO1xuICB9XG5cbiAgdXBkYXRlVG9vbHRpcCh3cmFwcGVyRWxlbWVudCwgdG9vbHRpcEVsZW1lbnQsIHByZWZlcikge1xuICAgIGxldCByZWN0ID0gd3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHdyYXBwZXJXaWR0aCA9IHdyYXBwZXJFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGxldCB3cmFwcGVySGVpZ2h0ID0gd3JhcHBlckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGxldCB3aWR0aCA9IHRvb2x0aXBFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGxldCBoZWlnaHQgPSB0b29sdGlwRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0b3AgPSAwO1xuICAgIGxldCB0YWlsU2l6ZSA9IDg7XG4gICAgbGV0IGZpdHNSaWdodCA9IHJlY3QubGVmdCArIHdpZHRoICsgdGFpbFNpemUgPCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBsZXQgZml0c1JpZ2h0SGFsZiA9IHJlY3QubGVmdCArIHdpZHRoIC8gMiArIHRhaWxTaXplIDwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgbGV0IGZpdHNCb3R0b20gPSByZWN0LmJvdHRvbSArIGhlaWdodCArIHRhaWxTaXplIDwgd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGxldCBmaXRzTGVmdCA9IHJlY3QubGVmdCAtIHdpZHRoIC0gdGFpbFNpemUgPiAwO1xuICAgIGxldCBmaXRzTGVmdEhhbGYgPSByZWN0LmxlZnQgLSB3aWR0aCAtIHRhaWxTaXplIC8gMiA+IDA7XG4gICAgbGV0IGZpdHNUb3AgPSByZWN0LnRvcCAtIGhlaWdodCAtIHRhaWxTaXplID4gMDtcbiAgICBsZXQgcG9zaXRpb247XG5cbiAgICBsZXQgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBsZXQgc2Nyb2xsTGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcblxuICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10YWlsLXRvcCcpO1xuICAgIHRvb2x0aXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJy10YWlsLXJpZ2h0Jyk7XG4gICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXRhaWwtYm90dG9tJyk7XG4gICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLXRhaWwtbGVmdCcpO1xuXG4gICAgaWYgKHByZWZlciA9PT0gJ2xlZnQnICYmIGZpdHNMZWZ0KSB7XG4gICAgICBwb3NpdGlvbiA9ICdsZWZ0JztcbiAgICB9IGVsc2UgaWYgKHByZWZlciA9PT0gJ3JpZ2h0JyAmJiBmaXRzUmlnaHQpIHtcbiAgICAgIHBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgICB9IGVsc2UgaWYgKHByZWZlciA9PT0gJ3RvcCcgJiYgZml0c1JpZ2h0SGFsZiAmJiBmaXRzTGVmdEhhbGYgJiYgZml0c1RvcCkge1xuICAgICAgcG9zaXRpb24gPSAndG9wJztcbiAgICB9IGVsc2UgaWYgKGZpdHNSaWdodEhhbGYgJiYgZml0c0xlZnRIYWxmICYmIChmaXRzVG9wIHx8IGZpdHNCb3R0b20pKSB7XG4gICAgICBwb3NpdGlvbiA9IGZpdHNCb3R0b20gPyAnYm90dG9tJyA6ICd0b3AnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3NpdGlvbiA9IGZpdHNSaWdodCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIGxlZnQgPSByZWN0LmxlZnQgLSB3aWR0aCAvIDIgKyB3cmFwcGVyV2lkdGggLyAyO1xuICAgICAgaWYgKHBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICB0b3AgPSByZWN0LnRvcCAtIGhlaWdodCAtIHRhaWxTaXplO1xuICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctdGFpbC1ib3R0b20nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvcCA9IHJlY3QudG9wICsgd3JhcHBlckhlaWdodCArIHRhaWxTaXplO1xuICAgICAgICB0b29sdGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCctdGFpbC10b3AnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdG9wID0gcmVjdC50b3AgLSBoZWlnaHQgLyAyICsgd3JhcHBlckhlaWdodCAvIDI7XG4gICAgICBpZiAocG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICBsZWZ0ID0gcmVjdC5sZWZ0IC0gd2lkdGggLSB0YWlsU2l6ZTtcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXRhaWwtcmlnaHQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnQgPSByZWN0LmxlZnQgKyB3cmFwcGVyV2lkdGggKyB0YWlsU2l6ZTtcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLXRhaWwtbGVmdCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvb2x0aXBFbGVtZW50LnN0eWxlLmxlZnQgPSAoc2Nyb2xsTGVmdCArIGxlZnQpICsgJ3B4JztcbiAgICB0b29sdGlwRWxlbWVudC5zdHlsZS50b3AgPSAoc2Nyb2xsVG9wICsgdG9wKSArICdweCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFV0aWxzKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgJy4uLy4uL3N0YXRpYyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V4YW1wbGUvY2xpZW50L3N0YXRpYy5qcyIsImltcG9ydCAnLi9zdGF0aWMvY2hlY2tib3gnO1xuaW1wb3J0ICcuL3N0YXRpYy90b2dnbGUnO1xuaW1wb3J0ICcuL3N0YXRpYy90b29sdGlwJztcbmltcG9ydCAnLi9zdGF0aWMvdXBsb2FkJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0aWMuanMiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgQXJyYXkuZnJvbSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmMtY2hlY2tib3gnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJyk7XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgY2hlY2tlZCA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRpYy9jaGVja2JveC5qcyIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBBcnJheS5mcm9tKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYy10b2dnbGUnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJyk7XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgY2hlY2tlZCA9PT0gJ3RydWUnID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRpYy90b2dnbGUuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgQXJyYXkuZnJvbSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmMtdG9vbHRpcC13cmFwcGVyJykpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgd3JhcHBlckVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgcG9ydGFsS2V5ID0gd3JhcHBlckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvcnRhbC1rZXknKTtcbiAgICAgIGNvbnN0IHBvcnRhbEVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9ydGFsPSR7cG9ydGFsS2V5fV1gKTtcbiAgICAgIGNvbnN0IHRvb2x0aXBFbGVtZW50ID0gcG9ydGFsRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIHBvcnRhbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB1dGlscy51cGRhdGVUb29sdGlwKHdyYXBwZXJFbGVtZW50LCB0b29sdGlwRWxlbWVudCk7XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgcG9ydGFsS2V5ID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9ydGFsLWtleScpO1xuICAgICAgd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcnRhbD0ke3BvcnRhbEtleX1dYCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGljL3Rvb2x0aXAuanMiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgQXJyYXkuZnJvbSh3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmMtdXBsb2FkJykpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnLWFjdGl2ZScpO1xuICAgIH0sIGZhbHNlKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLWFjdGl2ZScpO1xuICAgIH0sIGZhbHNlKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnLWFjdGl2ZScpO1xuXG4gICAgICBjb25zdCBmaWxlcyA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd1cGxvYWQnLCB7XG4gICAgICAgIGRldGFpbDogZmlsZXNcbiAgICAgIH0pO1xuXG4gICAgICBjdXJyZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcblxuICAgIH0sIGZhbHNlKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGN1cnJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuY2xpY2soKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBmaWxlcyA9IGN1cnJlbnRFbGVtZW50LmZpbGVzO1xuICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3VwbG9hZCcsIHtcbiAgICAgICAgZGV0YWlsOiBmaWxlc1xuICAgICAgfSk7XG5cbiAgICAgIGN1cnJlbnRFbGVtZW50LnBhcmVudE5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21FdmVudCk7XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0aWMvdXBsb2FkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==