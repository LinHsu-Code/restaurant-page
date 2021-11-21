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
const initialBone = () => {
  const elContainer = document.createElement("div");
  elContainer.classList.add("container");
  const elHeader = document.createElement("header");
  elHeader.textContent = `I'm the header`;
  const elMain = document.createElement("main");
  elMain.textContent = `I'm the main`;
  const elFooter = document.createElement("footer");
  elFooter.textContent = `I'm the footer`;
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
// const myContainer = document.querySelector("#container");
// myContainer.textContent = "Hi Lin";






const elBone = (0,_init_bone__WEBPACK_IMPORTED_MODULE_0__["default"])();
const elHome = (0,_init_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
const elMenu = (0,_init_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
const elContact = (0,_init_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();

const myBody = document.querySelector("body");
const elMain = elBone.querySelector("main");
elMain.append(elHome);
myBody.append(elBone);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0w5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNMM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ0wzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFc0M7QUFDQTtBQUNBO0FBQ007O0FBRTVDLGVBQWUsc0RBQVc7QUFDMUIsZUFBZSxzREFBVztBQUMxQixlQUFlLHNEQUFXO0FBQzFCLGtCQUFrQix5REFBYzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1ib25lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LWNvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsQm9uZSA9ICgpID0+IHtcbiAgY29uc3QgZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb25zdCBlbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGVsSGVhZGVyLnRleHRDb250ZW50ID0gYEknbSB0aGUgaGVhZGVyYDtcbiAgY29uc3QgZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGVsTWFpbi50ZXh0Q29udGVudCA9IGBJJ20gdGhlIG1haW5gO1xuICBjb25zdCBlbEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGVsRm9vdGVyLnRleHRDb250ZW50ID0gYEknbSB0aGUgZm9vdGVyYDtcbiAgZWxDb250YWluZXIuYXBwZW5kKGVsSGVhZGVyLCBlbE1haW4sIGVsRm9vdGVyKTtcbiAgcmV0dXJuIGVsQ29udGFpbmVyO1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxCb25lO1xuIiwiY29uc3QgaW5pdGlhbENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGVsQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsQ29udGFjdC50ZXh0Q29udGVudCA9IGBJJ20gdGhlIGNvbnRhY3RgO1xuICByZXR1cm4gZWxDb250YWN0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxDb250YWN0O1xuIiwiY29uc3QgaW5pdGlhbEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGVsSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsSG9tZS50ZXh0Q29udGVudCA9IGBJJ20gdGhlIGhvbWVgO1xuICByZXR1cm4gZWxIb21lO1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxIb21lO1xuIiwiY29uc3QgaW5pdGlhbE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGVsTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsTWVudS50ZXh0Q29udGVudCA9IGBJJ20gdGhlIG1lbnVgO1xuICByZXR1cm4gZWxNZW51O1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxNZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBjb25zdCBteUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuLy8gbXlDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkhpIExpblwiO1xuXG5pbXBvcnQgaW5pdGlhbEJvbmUgZnJvbSBcIi4vaW5pdC1ib25lXCI7XG5pbXBvcnQgaW5pdGlhbEhvbWUgZnJvbSBcIi4vaW5pdC1ob21lXCI7XG5pbXBvcnQgaW5pdGlhbE1lbnUgZnJvbSBcIi4vaW5pdC1tZW51XCI7XG5pbXBvcnQgaW5pdGlhbENvbnRhY3QgZnJvbSBcIi4vaW5pdC1jb250YWN0XCI7XG5cbmNvbnN0IGVsQm9uZSA9IGluaXRpYWxCb25lKCk7XG5jb25zdCBlbEhvbWUgPSBpbml0aWFsSG9tZSgpO1xuY29uc3QgZWxNZW51ID0gaW5pdGlhbE1lbnUoKTtcbmNvbnN0IGVsQ29udGFjdCA9IGluaXRpYWxDb250YWN0KCk7XG5cbmNvbnN0IG15Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgZWxNYWluID0gZWxCb25lLnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuZWxNYWluLmFwcGVuZChlbEhvbWUpO1xubXlCb2R5LmFwcGVuZChlbEJvbmUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9