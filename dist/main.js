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





// add click listener to navtabs
const addClickListenerToNavTabs = () => {
  const navItems = document.querySelectorAll(".nav-item-link");
  navItems.forEach((item, index, arr) => {
    item.addEventListener("click", (ev) => {
      const isActive = ev.target.classList.contains("active");
      const mainSection = document.querySelector("main");
      if (isActive !== -1) {
        console.log(arr);
        arr.forEach((el) => el.classList.remove("active"));
        ev.target.classList.add("active");
        let activeModul;
        console.log(ev.target.textContent);
        switch (ev.target.textContent) {
          case "HOME":
            activeModul = (0,_init_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
            break;
          case "MENU":
            activeModul = (0,_init_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
            break;
          case "CONTACT":
            activeModul = (0,_init_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
            break;
          default:
            break;
        }
        mainSection.replaceChild(activeModul, mainSection.firstChild);
      }
    });
  });
};

// initial index page
(() => {
  const elBone = (0,_init_bone__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const myBody = document.querySelector("body");
  const elMain = elBone.querySelector("main");
  elMain.append((0,_init_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
  myBody.append(elBone);
  const homeNav = document.querySelector(".nav-item-link");
  homeNav.classList.add("active");
  addClickListenerToNavTabs();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0E7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBYTtBQUNoQztBQUNBLG1CQUFtQix3REFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1ozQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNMOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQVTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQVU7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0wzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNMM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDZDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDQTtBQUNBO0FBQ007O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzREFBVztBQUNyQztBQUNBO0FBQ0EsMEJBQTBCLHNEQUFXO0FBQ3JDO0FBQ0E7QUFDQSwwQkFBMEIseURBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFXO0FBQzVCO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtYm9uZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LWZvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LW5hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXRpYWxIZWFkZXIgZnJvbSBcIi4vaW5pdC1oZWFkZXJcIjtcbmltcG9ydCBpbml0aWFsRm9vdGVyIGZyb20gXCIuL2luaXQtZm9vdGVyXCI7XG5cbmNvbnN0IGluaXRpYWxCb25lID0gKCkgPT4ge1xuICBjb25zdCBlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnN0IGVsSGVhZGVyID0gaW5pdGlhbEhlYWRlcigpO1xuICBjb25zdCBlbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgZWxGb290ZXIgPSBpbml0aWFsRm9vdGVyKCk7XG4gIGVsQ29udGFpbmVyLmFwcGVuZChlbEhlYWRlciwgZWxNYWluLCBlbEZvb3Rlcik7XG4gIHJldHVybiBlbENvbnRhaW5lcjtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsQm9uZTtcbiIsImNvbnN0IGluaXRpYWxDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBlbENvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbENvbnRhY3QudGV4dENvbnRlbnQgPSBgSSdtIHRoZSBjb250YWN0YDtcbiAgcmV0dXJuIGVsQ29udGFjdDtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsQ29udGFjdDtcbiIsImNvbnN0IGluaXRpYWxGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGVsRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZWxDb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZWxDb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIxIExpblwiO1xuICBlbEZvb3Rlci5hcHBlbmQoZWxDb3B5cmlnaHQpO1xuICByZXR1cm4gZWxGb290ZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbEZvb3RlcjtcbiIsImltcG9ydCBpbml0aWFsTmF2IGZyb20gXCIuL2luaXQtbmF2YmFyXCI7XG5cbmNvbnN0IGluaXRpYWxIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGVsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBlbE5hbWUudGV4dENvbnRlbnQgPSBcIlBhc3RhTWFuaWFcIjtcbiAgY29uc3QgZWxOYXYgPSBpbml0aWFsTmF2KCk7XG5cbiAgZWxIZWFkZXIuYXBwZW5kKGVsTmFtZSwgZWxOYXYpO1xuICByZXR1cm4gZWxIZWFkZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbEhlYWRlcjtcbiIsImNvbnN0IGluaXRpYWxIb21lID0gKCkgPT4ge1xuICBjb25zdCBlbEhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbEhvbWUudGV4dENvbnRlbnQgPSBgSSdtIHRoZSBob21lYDtcbiAgcmV0dXJuIGVsSG9tZTtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsSG9tZTtcbiIsImNvbnN0IGluaXRpYWxNZW51ID0gKCkgPT4ge1xuICBjb25zdCBlbE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbE1lbnUudGV4dENvbnRlbnQgPSBgSSdtIHRoZSBtZW51YDtcbiAgcmV0dXJuIGVsTWVudTtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTWVudTtcbiIsImNvbnN0IGluaXRpYWxOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IGVsTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbmF2TGlzdCA9IFtcIkhPTUVcIiwgXCJNRU5VXCIsIFwiQ09OVEFDVFwiXTtcbiAgbmF2TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIik7XG4gICAgY29uc3QgbmF2SXRlbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBuYXZJdGVtTGluay5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW0tbGlua1wiKTtcbiAgICBuYXZJdGVtTGluay50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbmF2SXRlbS5hcHBlbmQobmF2SXRlbUxpbmspO1xuICAgIGVsTmF2LmFwcGVuZChuYXZJdGVtKTtcbiAgfSk7XG4gIHJldHVybiBlbE5hdjtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTmF2O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbEJvbmUgZnJvbSBcIi4vaW5pdC1ib25lXCI7XG5pbXBvcnQgaW5pdGlhbEhvbWUgZnJvbSBcIi4vaW5pdC1ob21lXCI7XG5pbXBvcnQgaW5pdGlhbE1lbnUgZnJvbSBcIi4vaW5pdC1tZW51XCI7XG5pbXBvcnQgaW5pdGlhbENvbnRhY3QgZnJvbSBcIi4vaW5pdC1jb250YWN0XCI7XG5cbi8vIGFkZCBjbGljayBsaXN0ZW5lciB0byBuYXZ0YWJzXG5jb25zdCBhZGRDbGlja0xpc3RlbmVyVG9OYXZUYWJzID0gKCkgPT4ge1xuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWl0ZW0tbGlua1wiKTtcbiAgbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSBldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpO1xuICAgICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgIGlmIChpc0FjdGl2ZSAhPT0gLTEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYXJyKTtcbiAgICAgICAgYXJyLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGxldCBhY3RpdmVNb2R1bDtcbiAgICAgICAgY29uc29sZS5sb2coZXYudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgc3dpdGNoIChldi50YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICBjYXNlIFwiSE9NRVwiOlxuICAgICAgICAgICAgYWN0aXZlTW9kdWwgPSBpbml0aWFsSG9tZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIk1FTlVcIjpcbiAgICAgICAgICAgIGFjdGl2ZU1vZHVsID0gaW5pdGlhbE1lbnUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJDT05UQUNUXCI6XG4gICAgICAgICAgICBhY3RpdmVNb2R1bCA9IGluaXRpYWxDb250YWN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbWFpblNlY3Rpb24ucmVwbGFjZUNoaWxkKGFjdGl2ZU1vZHVsLCBtYWluU2VjdGlvbi5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBpbml0aWFsIGluZGV4IHBhZ2VcbigoKSA9PiB7XG4gIGNvbnN0IGVsQm9uZSA9IGluaXRpYWxCb25lKCk7XG4gIGNvbnN0IG15Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBlbE1haW4gPSBlbEJvbmUucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGVsTWFpbi5hcHBlbmQoaW5pdGlhbEhvbWUoKSk7XG4gIG15Qm9keS5hcHBlbmQoZWxCb25lKTtcbiAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWl0ZW0tbGlua1wiKTtcbiAgaG9tZU5hdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBhZGRDbGlja0xpc3RlbmVyVG9OYXZUYWJzKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9