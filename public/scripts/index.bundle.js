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
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var button = document.querySelector('#js-menu__hamburger');\n  var menu = document.querySelector('#js-menu-nav__list');\n  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;\n  button.addEventListener('click', function () {\n    button.classList.toggle('open');\n    menu.classList.toggle('menu-nav__hide');\n  });\n  window.addEventListener('resize', () => {\n    viewportWidth = window.innerWidth || document.documentElement.clientWidth;\n\n    if (viewportWidth > 768 & menu.classList.contains('menu-nav__hide')) {\n      button.classList.toggle('open');\n      menu.classList.toggle('menu-nav__hide');\n    }\n  }, false);\n})();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcz8xNTkwIl0sIm5hbWVzIjpbImJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJ2aWV3cG9ydFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLFlBQVc7QUFFUixNQUFJQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBYjtBQUNBLE1BQUlDLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUFYO0FBQ0EsTUFBSUUsYUFBYSxHQUFHQyxNQUFNLENBQUNDLFVBQVAsSUFBcUJMLFFBQVEsQ0FBQ00sZUFBVCxDQUF5QkMsV0FBbEU7QUFFQVIsUUFBTSxDQUFDUyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBRXhDVCxVQUFNLENBQUNVLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLE1BQXhCO0FBQ0FSLFFBQUksQ0FBQ08sU0FBTCxDQUFlQyxNQUFmLENBQXNCLGdCQUF0QjtBQUNILEdBSkQ7QUFNQU4sUUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxNQUFNO0FBQ3BDTCxpQkFBYSxHQUFHQyxNQUFNLENBQUNDLFVBQVAsSUFBcUJMLFFBQVEsQ0FBQ00sZUFBVCxDQUF5QkMsV0FBOUQ7O0FBRUEsUUFBSUosYUFBYSxHQUFHLEdBQWhCLEdBQXNCRCxJQUFJLENBQUNPLFNBQUwsQ0FBZUUsUUFBZixDQUF3QixnQkFBeEIsQ0FBMUIsRUFBcUU7QUFFakVaLFlBQU0sQ0FBQ1UsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsTUFBeEI7QUFDQVIsVUFBSSxDQUFDTyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsZ0JBQXRCO0FBQ0g7QUFFSixHQVRELEVBU0csS0FUSDtBQVdILENBdkJEIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1tZW51X19oYW1idXJnZXInKTtcclxuICAgIHZhciBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLW1lbnUtbmF2X19saXN0Jyk7XHJcbiAgICB2YXIgdmlld3BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtbmF2X19oaWRlJylcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgdmlld3BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgICAgaWYgKHZpZXdwb3J0V2lkdGggPiA3NjggJiBtZW51LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1uYXZfX2hpZGUnKSkge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW5hdl9faGlkZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/index.js\n");

/***/ })

/******/ });