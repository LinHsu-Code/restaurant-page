/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/init-bone.js":
/*!**************************!*\
  !*** ./src/init-bone.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _init_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-header */ "./src/init-header.js");
/* harmony import */ var _init_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-footer */ "./src/init-footer.js");



const initialBone = () => {
  const elContainer = document.createElement("div");
  elContainer.classList.add("container");
  const elHeader = (0,_init_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const elMain = document.createElement("main");
  elMain.textContent = `I'm the main`;
  const elFooter = (0,_init_footer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  elContainer.append(elHeader, elMain, elFooter);
  return elContainer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialBone);


/***/ }),

/***/ "./src/init-contact.js":
/*!*****************************!*\
  !*** ./src/init-contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialContact = () => {
  const elContact = document.createElement("div");
  elContact.textContent = `I'm the contact`;
  return elContact;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialContact);


/***/ }),

/***/ "./src/init-footer.js":
/*!****************************!*\
  !*** ./src/init-footer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialFooter = () => {
  const elFooter = document.createElement("footer");
  const elCopyright = document.createElement("p");
  elCopyright.textContent = "Copyright © 2021 Lin";
  elFooter.append(elCopyright);
  return elFooter;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialFooter);


/***/ }),

/***/ "./src/init-header.js":
/*!****************************!*\
  !*** ./src/init-header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _init_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-navbar */ "./src/init-navbar.js");


const initialHeader = () => {
  const elHeader = document.createElement("header");
  const elName = document.createElement("h1");
  elName.textContent = "PastaMania";
  const elNav = (0,_init_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])();

  elHeader.append(elName, elNav);
  return elHeader;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialHeader);


/***/ }),

/***/ "./src/init-home.js":
/*!**************************!*\
  !*** ./src/init-home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialHome = () => {
  const elHome = document.createElement("div");
  elHome.textContent = `I'm the home`;
  return elHome;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialHome);


/***/ }),

/***/ "./src/init-menu.js":
/*!**************************!*\
  !*** ./src/init-menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialMenu = () => {
  const elMenu = document.createElement("div");
  elMenu.textContent = `I'm the menu`;
  return elMenu;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialMenu);


/***/ }),

/***/ "./src/init-navbar.js":
/*!****************************!*\
  !*** ./src/init-navbar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialNav = () => {
  const elNav = document.createElement("nav");
  const navList = ["HOME", "MENU", "CONTACT"];
  navList.forEach((item) => {
    const navItem = document.createElement("div");
    navItem.classList.add("nav-item");
    const navItemLink = document.createElement("a");
    navItemLink.classList.add("nav-item-link");
    navItemLink.textContent = item;
    navItem.append(navItemLink);
    elNav.append(navItem);
  });
  return elNav;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialNav);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_bone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-bone */ "./src/init-bone.js");
/* harmony import */ var _init_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-home */ "./src/init-home.js");
/* harmony import */ var _init_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init-menu */ "./src/init-menu.js");
/* harmony import */ var _init_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init-contact */ "./src/init-contact.js");
// const myContainer = document.querySelector('#container');
// myContainer.textContent = 'Hi Lin';






const elBone = (0,_init_bone__WEBPACK_IMPORTED_MODULE_0__["default"])();
const elHome = (0,_init_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
const elMenu = (0,_init_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
const elContact = (0,_init_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();

const myBody = document.querySelector("body");
const elMain = elBone.querySelector("main");
elMain.append(elHome);
myBody.append(elBone);
const homeNav = document.querySelector(".nav-item");
homeNav.classList.add("active");
//

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0E7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBYTtBQUNoQztBQUNBO0FBQ0EsbUJBQW1CLHdEQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDYjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0w5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BVOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBVTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNYN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTDNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0wzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNkMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRXNDO0FBQ0E7QUFDQTtBQUNNOztBQUU1QyxlQUFlLHNEQUFXO0FBQzFCLGVBQWUsc0RBQVc7QUFDMUIsZUFBZSxzREFBVztBQUMxQixrQkFBa0IseURBQWM7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtYm9uZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LWZvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LW5hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXRpYWxIZWFkZXIgZnJvbSBcIi4vaW5pdC1oZWFkZXJcIjtcbmltcG9ydCBpbml0aWFsRm9vdGVyIGZyb20gXCIuL2luaXQtZm9vdGVyXCI7XG5cbmNvbnN0IGluaXRpYWxCb25lID0gKCkgPT4ge1xuICBjb25zdCBlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnN0IGVsSGVhZGVyID0gaW5pdGlhbEhlYWRlcigpO1xuICBjb25zdCBlbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgZWxNYWluLnRleHRDb250ZW50ID0gYEknbSB0aGUgbWFpbmA7XG4gIGNvbnN0IGVsRm9vdGVyID0gaW5pdGlhbEZvb3RlcigpO1xuICBlbENvbnRhaW5lci5hcHBlbmQoZWxIZWFkZXIsIGVsTWFpbiwgZWxGb290ZXIpO1xuICByZXR1cm4gZWxDb250YWluZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbEJvbmU7XG4iLCJjb25zdCBpbml0aWFsQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgZWxDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxDb250YWN0LnRleHRDb250ZW50ID0gYEknbSB0aGUgY29udGFjdGA7XG4gIHJldHVybiBlbENvbnRhY3Q7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbENvbnRhY3Q7XG4iLCJjb25zdCBpbml0aWFsRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBlbEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGVsQ29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVsQ29weXJpZ2h0LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgMjAyMSBMaW5cIjtcbiAgZWxGb290ZXIuYXBwZW5kKGVsQ29weXJpZ2h0KTtcbiAgcmV0dXJuIGVsRm9vdGVyO1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxGb290ZXI7XG4iLCJpbXBvcnQgaW5pdGlhbE5hdiBmcm9tIFwiLi9pbml0LW5hdmJhclwiO1xuXG5jb25zdCBpbml0aWFsSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBlbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgZWxOYW1lLnRleHRDb250ZW50ID0gXCJQYXN0YU1hbmlhXCI7XG4gIGNvbnN0IGVsTmF2ID0gaW5pdGlhbE5hdigpO1xuXG4gIGVsSGVhZGVyLmFwcGVuZChlbE5hbWUsIGVsTmF2KTtcbiAgcmV0dXJuIGVsSGVhZGVyO1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxIZWFkZXI7XG4iLCJjb25zdCBpbml0aWFsSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgZWxIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxIb21lLnRleHRDb250ZW50ID0gYEknbSB0aGUgaG9tZWA7XG4gIHJldHVybiBlbEhvbWU7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbEhvbWU7XG4iLCJjb25zdCBpbml0aWFsTWVudSA9ICgpID0+IHtcbiAgY29uc3QgZWxNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxNZW51LnRleHRDb250ZW50ID0gYEknbSB0aGUgbWVudWA7XG4gIHJldHVybiBlbE1lbnU7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbE1lbnU7XG4iLCJjb25zdCBpbml0aWFsTmF2ID0gKCkgPT4ge1xuICBjb25zdCBlbE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IG5hdkxpc3QgPSBbXCJIT01FXCIsIFwiTUVOVVwiLCBcIkNPTlRBQ1RcIl07XG4gIG5hdkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuICAgIGNvbnN0IG5hdkl0ZW1MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbmF2SXRlbUxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtLWxpbmtcIik7XG4gICAgbmF2SXRlbUxpbmsudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIG5hdkl0ZW0uYXBwZW5kKG5hdkl0ZW1MaW5rKTtcbiAgICBlbE5hdi5hcHBlbmQobmF2SXRlbSk7XG4gIH0pO1xuICByZXR1cm4gZWxOYXY7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbE5hdjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gY29uc3QgbXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG4vLyBteUNvbnRhaW5lci50ZXh0Q29udGVudCA9ICdIaSBMaW4nO1xuXG5pbXBvcnQgaW5pdGlhbEJvbmUgZnJvbSBcIi4vaW5pdC1ib25lXCI7XG5pbXBvcnQgaW5pdGlhbEhvbWUgZnJvbSBcIi4vaW5pdC1ob21lXCI7XG5pbXBvcnQgaW5pdGlhbE1lbnUgZnJvbSBcIi4vaW5pdC1tZW51XCI7XG5pbXBvcnQgaW5pdGlhbENvbnRhY3QgZnJvbSBcIi4vaW5pdC1jb250YWN0XCI7XG5cbmNvbnN0IGVsQm9uZSA9IGluaXRpYWxCb25lKCk7XG5jb25zdCBlbEhvbWUgPSBpbml0aWFsSG9tZSgpO1xuY29uc3QgZWxNZW51ID0gaW5pdGlhbE1lbnUoKTtcbmNvbnN0IGVsQ29udGFjdCA9IGluaXRpYWxDb250YWN0KCk7XG5cbmNvbnN0IG15Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgZWxNYWluID0gZWxCb25lLnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuZWxNYWluLmFwcGVuZChlbEhvbWUpO1xubXlCb2R5LmFwcGVuZChlbEJvbmUpO1xuY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWl0ZW1cIik7XG5ob21lTmF2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4vL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9