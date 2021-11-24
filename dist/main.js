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
  const introArticle = document.createElement("article");
  const introTitle = document.createElement("h3");
  introTitle.textContent =
    "PastaMania is the largest Italian casual dining chain in Singapore offering a diverse range of pastas.";
  const introTextFir = document.createElement("p");
  introTextFir.textContent = `From Italian classics like Prawn Aglio and Carbonara, to specially crafted fusion delights like Seafood Tom Yum and Salted Egg Chicken, there’s something for everyone!`;
  const introTextSec = document.createElement("p");
  introTextSec.textContent = `Quality is our priority! We farm and produce our own in-house tomato sauce from Italian Roma tomatoes in the northern part of Italy. The final product then goes through an intensive quality control process to assure quality in every bite of tomato pasta you take.`;
  const introTextThi = document.createElement("p");
  introTextThi.textContent = `Hit by a pasta craving you just can’t shake? Have no fear – our pastas are easily accessible for dine-in and takeaways at any one of our 20 over stores in Singapore! If eating home is your cup of tea, we’ve got you covered! We are available for delivery on Foodpanda, Deliveroo and GrabFood.`;
  const introTextFour = document.createElement("p");
  introTextFour.textContent = `PastaMania is also international, with presence in other SEA countries, Sri Lanka, Cambodia, Bangladesh, China and in the Middle East regions!`;
  introArticle.append(
    introTitle,
    introTextFir,
    introTextSec,
    introTextThi,
    introTextFour
  );

  const introVideo = document.createElement("div");
  introVideo.classList.add("iframe-wrapper");
  introVideo.innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/07WvAsgp_CM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  elHome.append(introArticle, introVideo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0E7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBYTtBQUNoQztBQUNBLG1CQUFtQix3REFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1ozQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNMOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQVTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQVU7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5SkFBeUosVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVc7QUFDaE47QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3QjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0wzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNkMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNBO0FBQ0E7QUFDTTs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFXO0FBQ3JDO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQVc7QUFDckM7QUFDQTtBQUNBLDBCQUEwQix5REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQVc7QUFDNUI7QUFDQTtBQUNBLGdCQUFnQixzREFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1ib25lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LWNvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LWhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LW1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5pdGlhbEhlYWRlciBmcm9tIFwiLi9pbml0LWhlYWRlclwiO1xuaW1wb3J0IGluaXRpYWxGb290ZXIgZnJvbSBcIi4vaW5pdC1mb290ZXJcIjtcblxuY29uc3QgaW5pdGlhbEJvbmUgPSAoKSA9PiB7XG4gIGNvbnN0IGVsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgY29uc3QgZWxIZWFkZXIgPSBpbml0aWFsSGVhZGVyKCk7XG4gIGNvbnN0IGVsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBlbEZvb3RlciA9IGluaXRpYWxGb290ZXIoKTtcbiAgZWxDb250YWluZXIuYXBwZW5kKGVsSGVhZGVyLCBlbE1haW4sIGVsRm9vdGVyKTtcbiAgcmV0dXJuIGVsQ29udGFpbmVyO1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxCb25lO1xuIiwiY29uc3QgaW5pdGlhbENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGVsQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsQ29udGFjdC50ZXh0Q29udGVudCA9IGBJJ20gdGhlIGNvbnRhY3RgO1xuICByZXR1cm4gZWxDb250YWN0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxDb250YWN0O1xuIiwiY29uc3QgaW5pdGlhbEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZWxGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBlbENvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlbENvcHlyaWdodC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjEgTGluXCI7XG4gIGVsRm9vdGVyLmFwcGVuZChlbENvcHlyaWdodCk7XG4gIHJldHVybiBlbEZvb3Rlcjtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsRm9vdGVyO1xuIiwiaW1wb3J0IGluaXRpYWxOYXYgZnJvbSBcIi4vaW5pdC1uYXZiYXJcIjtcblxuY29uc3QgaW5pdGlhbEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgZWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGVsTmFtZS50ZXh0Q29udGVudCA9IFwiUGFzdGFNYW5pYVwiO1xuICBjb25zdCBlbE5hdiA9IGluaXRpYWxOYXYoKTtcblxuICBlbEhlYWRlci5hcHBlbmQoZWxOYW1lLCBlbE5hdik7XG4gIHJldHVybiBlbEhlYWRlcjtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsSGVhZGVyO1xuIiwiY29uc3QgaW5pdGlhbEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGVsSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGludHJvQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICBjb25zdCBpbnRyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBpbnRyb1RpdGxlLnRleHRDb250ZW50ID1cbiAgICBcIlBhc3RhTWFuaWEgaXMgdGhlIGxhcmdlc3QgSXRhbGlhbiBjYXN1YWwgZGluaW5nIGNoYWluIGluIFNpbmdhcG9yZSBvZmZlcmluZyBhIGRpdmVyc2UgcmFuZ2Ugb2YgcGFzdGFzLlwiO1xuICBjb25zdCBpbnRyb1RleHRGaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm9UZXh0RmlyLnRleHRDb250ZW50ID0gYEZyb20gSXRhbGlhbiBjbGFzc2ljcyBsaWtlIFByYXduIEFnbGlvIGFuZCBDYXJib25hcmEsIHRvIHNwZWNpYWxseSBjcmFmdGVkIGZ1c2lvbiBkZWxpZ2h0cyBsaWtlIFNlYWZvb2QgVG9tIFl1bSBhbmQgU2FsdGVkIEVnZyBDaGlja2VuLCB0aGVyZeKAmXMgc29tZXRoaW5nIGZvciBldmVyeW9uZSFgO1xuICBjb25zdCBpbnRyb1RleHRTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm9UZXh0U2VjLnRleHRDb250ZW50ID0gYFF1YWxpdHkgaXMgb3VyIHByaW9yaXR5ISBXZSBmYXJtIGFuZCBwcm9kdWNlIG91ciBvd24gaW4taG91c2UgdG9tYXRvIHNhdWNlIGZyb20gSXRhbGlhbiBSb21hIHRvbWF0b2VzIGluIHRoZSBub3J0aGVybiBwYXJ0IG9mIEl0YWx5LiBUaGUgZmluYWwgcHJvZHVjdCB0aGVuIGdvZXMgdGhyb3VnaCBhbiBpbnRlbnNpdmUgcXVhbGl0eSBjb250cm9sIHByb2Nlc3MgdG8gYXNzdXJlIHF1YWxpdHkgaW4gZXZlcnkgYml0ZSBvZiB0b21hdG8gcGFzdGEgeW91IHRha2UuYDtcbiAgY29uc3QgaW50cm9UZXh0VGhpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGludHJvVGV4dFRoaS50ZXh0Q29udGVudCA9IGBIaXQgYnkgYSBwYXN0YSBjcmF2aW5nIHlvdSBqdXN0IGNhbuKAmXQgc2hha2U/IEhhdmUgbm8gZmVhciDigJMgb3VyIHBhc3RhcyBhcmUgZWFzaWx5IGFjY2Vzc2libGUgZm9yIGRpbmUtaW4gYW5kIHRha2Vhd2F5cyBhdCBhbnkgb25lIG9mIG91ciAyMCBvdmVyIHN0b3JlcyBpbiBTaW5nYXBvcmUhIElmIGVhdGluZyBob21lIGlzIHlvdXIgY3VwIG9mIHRlYSwgd2XigJl2ZSBnb3QgeW91IGNvdmVyZWQhIFdlIGFyZSBhdmFpbGFibGUgZm9yIGRlbGl2ZXJ5IG9uIEZvb2RwYW5kYSwgRGVsaXZlcm9vIGFuZCBHcmFiRm9vZC5gO1xuICBjb25zdCBpbnRyb1RleHRGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGludHJvVGV4dEZvdXIudGV4dENvbnRlbnQgPSBgUGFzdGFNYW5pYSBpcyBhbHNvIGludGVybmF0aW9uYWwsIHdpdGggcHJlc2VuY2UgaW4gb3RoZXIgU0VBIGNvdW50cmllcywgU3JpIExhbmthLCBDYW1ib2RpYSwgQmFuZ2xhZGVzaCwgQ2hpbmEgYW5kIGluIHRoZSBNaWRkbGUgRWFzdCByZWdpb25zIWA7XG4gIGludHJvQXJ0aWNsZS5hcHBlbmQoXG4gICAgaW50cm9UaXRsZSxcbiAgICBpbnRyb1RleHRGaXIsXG4gICAgaW50cm9UZXh0U2VjLFxuICAgIGludHJvVGV4dFRoaSxcbiAgICBpbnRyb1RleHRGb3VyXG4gICk7XG5cbiAgY29uc3QgaW50cm9WaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGludHJvVmlkZW8uY2xhc3NMaXN0LmFkZChcImlmcmFtZS13cmFwcGVyXCIpO1xuICBpbnRyb1ZpZGVvLmlubmVySFRNTCA9XG4gICAgJzxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8wN1d2QXNncF9DTVwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcbiAgZWxIb21lLmFwcGVuZChpbnRyb0FydGljbGUsIGludHJvVmlkZW8pO1xuICByZXR1cm4gZWxIb21lO1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxIb21lO1xuIiwiY29uc3QgaW5pdGlhbE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGVsTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsTWVudS50ZXh0Q29udGVudCA9IGBJJ20gdGhlIG1lbnVgO1xuICByZXR1cm4gZWxNZW51O1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxNZW51O1xuIiwiY29uc3QgaW5pdGlhbE5hdiA9ICgpID0+IHtcbiAgY29uc3QgZWxOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCBuYXZMaXN0ID0gW1wiSE9NRVwiLCBcIk1FTlVcIiwgXCJDT05UQUNUXCJdO1xuICBuYXZMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiKTtcbiAgICBjb25zdCBuYXZJdGVtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIG5hdkl0ZW1MaW5rLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbS1saW5rXCIpO1xuICAgIG5hdkl0ZW1MaW5rLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBuYXZJdGVtLmFwcGVuZChuYXZJdGVtTGluayk7XG4gICAgZWxOYXYuYXBwZW5kKG5hdkl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGVsTmF2O1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxOYXY7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsQm9uZSBmcm9tIFwiLi9pbml0LWJvbmVcIjtcbmltcG9ydCBpbml0aWFsSG9tZSBmcm9tIFwiLi9pbml0LWhvbWVcIjtcbmltcG9ydCBpbml0aWFsTWVudSBmcm9tIFwiLi9pbml0LW1lbnVcIjtcbmltcG9ydCBpbml0aWFsQ29udGFjdCBmcm9tIFwiLi9pbml0LWNvbnRhY3RcIjtcblxuLy8gYWRkIGNsaWNrIGxpc3RlbmVyIHRvIG5hdnRhYnNcbmNvbnN0IGFkZENsaWNrTGlzdGVuZXJUb05hdlRhYnMgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtaXRlbS1saW5rXCIpO1xuICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIik7XG4gICAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgaWYgKGlzQWN0aXZlICE9PSAtMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgICAgICBhcnIuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgbGV0IGFjdGl2ZU1vZHVsO1xuICAgICAgICBjb25zb2xlLmxvZyhldi50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBzd2l0Y2ggKGV2LnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICAgIGNhc2UgXCJIT01FXCI6XG4gICAgICAgICAgICBhY3RpdmVNb2R1bCA9IGluaXRpYWxIb21lKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiTUVOVVwiOlxuICAgICAgICAgICAgYWN0aXZlTW9kdWwgPSBpbml0aWFsTWVudSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkNPTlRBQ1RcIjpcbiAgICAgICAgICAgIGFjdGl2ZU1vZHVsID0gaW5pdGlhbENvbnRhY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBtYWluU2VjdGlvbi5yZXBsYWNlQ2hpbGQoYWN0aXZlTW9kdWwsIG1haW5TZWN0aW9uLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vIGluaXRpYWwgaW5kZXggcGFnZVxuKCgpID0+IHtcbiAgY29uc3QgZWxCb25lID0gaW5pdGlhbEJvbmUoKTtcbiAgY29uc3QgbXlCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGVsTWFpbiA9IGVsQm9uZS5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgZWxNYWluLmFwcGVuZChpbml0aWFsSG9tZSgpKTtcbiAgbXlCb2R5LmFwcGVuZChlbEJvbmUpO1xuICBjb25zdCBob21lTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaXRlbS1saW5rXCIpO1xuICBob21lTmF2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGFkZENsaWNrTGlzdGVuZXJUb05hdlRhYnMoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=