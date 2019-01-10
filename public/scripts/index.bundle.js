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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-hamburger */ \"./src/scripts/modules/menu-hamburger.js\");\n/* harmony import */ var _modules_menu_hamburger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_hamburger__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_blur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/blur */ \"./src/scripts/modules/blur.js\");\n/* harmony import */ var _modules_blur__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_blur__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcz8xNTkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL21lbnUtaGFtYnVyZ2VyXCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9ibHVyXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/index.js\n");

/***/ }),

/***/ "./src/scripts/modules/blur.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/blur.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let blur = function () {\n  let wrapper = document.querySelector('.js-hero'),\n      form = document.querySelector('.js-hero__bg');\n  return {\n    set: function () {\n      let imgWidth = document.querySelector('.header').offsetWidth,\n          imgHeight = document.querySelector('.header').offsetHeight,\n          posLeft = -wrapper.offsetLeft,\n          posTop = -wrapper.offsetTop - 105,\n          blurCSS = form.style;\n      blurCSS.width = `${imgWidth}px`;\n      blurCSS.height = `${imgHeight}px`;\n      blurCSS.transform = `translate(${posLeft}px,${posTop}px)`;\n    }\n  };\n}();\n\nblur.set();\n\nwindow.onresize = function () {\n  blur.set();\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2JsdXIuanM/OWJjMCJdLCJuYW1lcyI6WyJibHVyIiwid3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvcm0iLCJzZXQiLCJpbWdXaWR0aCIsIm9mZnNldFdpZHRoIiwiaW1nSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicG9zTGVmdCIsIm9mZnNldExlZnQiLCJwb3NUb3AiLCJvZmZzZXRUb3AiLCJibHVyQ1NTIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsIndpbmRvdyIsIm9ucmVzaXplIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxJQUFJLEdBQUksWUFBVztBQUNuQixNQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkO0FBQUEsTUFDSUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FEWDtBQUdBLFNBQU87QUFDSEUsT0FBRyxFQUFFLFlBQVc7QUFDWixVQUFJQyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixFQUFrQ0ksV0FBakQ7QUFBQSxVQUNJQyxTQUFTLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixFQUFrQ00sWUFEbEQ7QUFBQSxVQUVJQyxPQUFPLEdBQUcsQ0FBQ1QsT0FBTyxDQUFDVSxVQUZ2QjtBQUFBLFVBR0lDLE1BQU0sR0FBRyxDQUFDWCxPQUFPLENBQUNZLFNBQVQsR0FBcUIsR0FIbEM7QUFBQSxVQUtJQyxPQUFPLEdBQUdWLElBQUksQ0FBQ1csS0FMbkI7QUFPQUQsYUFBTyxDQUFDRSxLQUFSLEdBQWlCLEdBQUVWLFFBQVMsSUFBNUI7QUFDQVEsYUFBTyxDQUFDRyxNQUFSLEdBQWtCLEdBQUVULFNBQVUsSUFBOUI7QUFDQU0sYUFBTyxDQUFDSSxTQUFSLEdBQXFCLGFBQVlSLE9BQVEsTUFBS0UsTUFBTyxLQUFyRDtBQUNIO0FBWkUsR0FBUDtBQWNILENBbEJXLEVBQVo7O0FBb0JBWixJQUFJLENBQUNLLEdBQUw7O0FBRUFjLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixZQUFXO0FBQ3pCcEIsTUFBSSxDQUFDSyxHQUFMO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21vZHVsZXMvYmx1ci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBibHVyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVybycpLFxyXG4gICAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaGVyb19fYmcnKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWdXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgICAgIGltZ0hlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBwb3NMZWZ0ID0gLXdyYXBwZXIub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgICAgIHBvc1RvcCA9IC13cmFwcGVyLm9mZnNldFRvcCAtIDEwNSxcclxuXHJcbiAgICAgICAgICAgICAgICBibHVyQ1NTID0gZm9ybS5zdHlsZTtcclxuXHJcbiAgICAgICAgICAgIGJsdXJDU1Mud2lkdGggPSBgJHtpbWdXaWR0aH1weGA7XHJcbiAgICAgICAgICAgIGJsdXJDU1MuaGVpZ2h0ID0gYCR7aW1nSGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgYmx1ckNTUy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zTGVmdH1weCwke3Bvc1RvcH1weClgO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59KCkpO1xyXG5cclxuYmx1ci5zZXQoKTtcclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgYmx1ci5zZXQoKTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/blur.js\n");

/***/ }),

/***/ "./src/scripts/modules/menu-hamburger.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/menu-hamburger.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var button = document.querySelector('#js-menu__hamburger');\n  var menu = document.querySelector('#js-menu-nav__list');\n  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;\n  button.addEventListener('click', function () {\n    button.classList.toggle('open');\n    menu.classList.toggle('menu-nav__hide');\n  });\n  window.addEventListener('resize', () => {\n    viewportWidth = window.innerWidth || document.documentElement.clientWidth;\n\n    if (viewportWidth > 768 & menu.classList.contains('menu-nav__hide')) {\n      button.classList.toggle('open');\n      menu.classList.toggle('menu-nav__hide');\n    }\n  }, false);\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL21lbnUtaGFtYnVyZ2VyLmpzPzQ3ZTUiXSwibmFtZXMiOlsiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsInZpZXdwb3J0V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29udGFpbnMiXSwibWFwcGluZ3MiOiJBQUFBLENBQUMsWUFBVztBQUVSLE1BQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUFiO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQVg7QUFDQSxNQUFJRSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxJQUFxQkwsUUFBUSxDQUFDTSxlQUFULENBQXlCQyxXQUFsRTtBQUVBUixRQUFNLENBQUNTLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVc7QUFFeENULFVBQU0sQ0FBQ1UsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsTUFBeEI7QUFDQVIsUUFBSSxDQUFDTyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsZ0JBQXRCO0FBQ0gsR0FKRDtBQU1BTixRQUFNLENBQUNJLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLE1BQU07QUFDcENMLGlCQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBUCxJQUFxQkwsUUFBUSxDQUFDTSxlQUFULENBQXlCQyxXQUE5RDs7QUFFQSxRQUFJSixhQUFhLEdBQUcsR0FBaEIsR0FBc0JELElBQUksQ0FBQ08sU0FBTCxDQUFlRSxRQUFmLENBQXdCLGdCQUF4QixDQUExQixFQUFxRTtBQUVqRVosWUFBTSxDQUFDVSxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixNQUF4QjtBQUNBUixVQUFJLENBQUNPLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixnQkFBdEI7QUFDSDtBQUVKLEdBVEQsRUFTRyxLQVRIO0FBV0gsQ0F2QkQiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL21lbnUtaGFtYnVyZ2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtbWVudV9faGFtYnVyZ2VyJyk7XHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1tZW51LW5hdl9fbGlzdCcpO1xyXG4gICAgdmFyIHZpZXdwb3J0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW5hdl9faGlkZScpXHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgIHZpZXdwb3J0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgIGlmICh2aWV3cG9ydFdpZHRoID4gNzY4ICYgbWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtbmF2X19oaWRlJykpIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1uYXZfX2hpZGUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/modules/menu-hamburger.js\n");

/***/ })

/******/ });