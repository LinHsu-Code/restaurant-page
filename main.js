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
  elHome.classList.add("main-home");
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
  elMenu.classList.add("main-menu");
  const menulist = [
    {
      name: "Promos",
      introText: "Deep!Deep! Dish Bundle",
      imageSrc: "./assets/images/FestiveFeastBundle.png",
    },
    {
      name: "Combos",
      introText: "Bundle meals for different group sizes and occasions.",
      imageSrc: "./assets/images/Holiday-Treat.png",
    },
    {
      name: "Pizzas",
      introText:
        "Handcrafted pizzas made from fresh dough everyday! At every outlet!",
      imageSrc: "./assets/images/Meat_Treat.png",
    },
    {
      name: "Sides",
      introText: "Small bites to complement your meal.",
      imageSrc: "./assets/images/crazy-bread.png",
    },
  ];
  menulist.forEach((menuItem) => {
    const elMenuItem = document.createElement("article");
    const elMenuItemImg = document.createElement("img");
    elMenuItemImg.setAttribute("src", menuItem.imageSrc);
    const elMenuItemName = document.createElement("h3");
    elMenuItemName.textContent = menuItem.name;
    const elMenuItemText = document.createElement("p");
    elMenuItemText.textContent = menuItem.introText;
    elMenuItem.append(elMenuItemImg, elMenuItemName, elMenuItemText);
    elMenu.append(elMenuItem);
  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0E7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBYTtBQUNoQztBQUNBLG1CQUFtQix3REFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1ozQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNMOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQVTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQVU7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlKQUF5SixVQUFVLGlCQUFpQixpQkFBaUIsV0FBVztBQUNoTjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlCM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDZDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDQTtBQUNBO0FBQ007O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzREFBVztBQUNyQztBQUNBO0FBQ0EsMEJBQTBCLHNEQUFXO0FBQ3JDO0FBQ0E7QUFDQSwwQkFBMEIseURBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFXO0FBQzVCO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtYm9uZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LWZvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LW5hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXRpYWxIZWFkZXIgZnJvbSBcIi4vaW5pdC1oZWFkZXJcIjtcbmltcG9ydCBpbml0aWFsRm9vdGVyIGZyb20gXCIuL2luaXQtZm9vdGVyXCI7XG5cbmNvbnN0IGluaXRpYWxCb25lID0gKCkgPT4ge1xuICBjb25zdCBlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnN0IGVsSGVhZGVyID0gaW5pdGlhbEhlYWRlcigpO1xuICBjb25zdCBlbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgZWxGb290ZXIgPSBpbml0aWFsRm9vdGVyKCk7XG4gIGVsQ29udGFpbmVyLmFwcGVuZChlbEhlYWRlciwgZWxNYWluLCBlbEZvb3Rlcik7XG4gIHJldHVybiBlbENvbnRhaW5lcjtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsQm9uZTtcbiIsImNvbnN0IGluaXRpYWxDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBlbENvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbENvbnRhY3QudGV4dENvbnRlbnQgPSBgSSdtIHRoZSBjb250YWN0YDtcbiAgcmV0dXJuIGVsQ29udGFjdDtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsQ29udGFjdDtcbiIsImNvbnN0IGluaXRpYWxGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGVsRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZWxDb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZWxDb3B5cmlnaHQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIxIExpblwiO1xuICBlbEZvb3Rlci5hcHBlbmQoZWxDb3B5cmlnaHQpO1xuICByZXR1cm4gZWxGb290ZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbEZvb3RlcjtcbiIsImltcG9ydCBpbml0aWFsTmF2IGZyb20gXCIuL2luaXQtbmF2YmFyXCI7XG5cbmNvbnN0IGluaXRpYWxIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGVsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBlbE5hbWUudGV4dENvbnRlbnQgPSBcIlBhc3RhTWFuaWFcIjtcbiAgY29uc3QgZWxOYXYgPSBpbml0aWFsTmF2KCk7XG5cbiAgZWxIZWFkZXIuYXBwZW5kKGVsTmFtZSwgZWxOYXYpO1xuICByZXR1cm4gZWxIZWFkZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbEhlYWRlcjtcbiIsImNvbnN0IGluaXRpYWxIb21lID0gKCkgPT4ge1xuICBjb25zdCBlbEhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbEhvbWUuY2xhc3NMaXN0LmFkZChcIm1haW4taG9tZVwiKTtcbiAgY29uc3QgaW50cm9BcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gIGNvbnN0IGludHJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGludHJvVGl0bGUudGV4dENvbnRlbnQgPVxuICAgIFwiUGFzdGFNYW5pYSBpcyB0aGUgbGFyZ2VzdCBJdGFsaWFuIGNhc3VhbCBkaW5pbmcgY2hhaW4gaW4gU2luZ2Fwb3JlIG9mZmVyaW5nIGEgZGl2ZXJzZSByYW5nZSBvZiBwYXN0YXMuXCI7XG4gIGNvbnN0IGludHJvVGV4dEZpciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbnRyb1RleHRGaXIudGV4dENvbnRlbnQgPSBgRnJvbSBJdGFsaWFuIGNsYXNzaWNzIGxpa2UgUHJhd24gQWdsaW8gYW5kIENhcmJvbmFyYSwgdG8gc3BlY2lhbGx5IGNyYWZ0ZWQgZnVzaW9uIGRlbGlnaHRzIGxpa2UgU2VhZm9vZCBUb20gWXVtIGFuZCBTYWx0ZWQgRWdnIENoaWNrZW4sIHRoZXJl4oCZcyBzb21ldGhpbmcgZm9yIGV2ZXJ5b25lIWA7XG4gIGNvbnN0IGludHJvVGV4dFNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbnRyb1RleHRTZWMudGV4dENvbnRlbnQgPSBgUXVhbGl0eSBpcyBvdXIgcHJpb3JpdHkhIFdlIGZhcm0gYW5kIHByb2R1Y2Ugb3VyIG93biBpbi1ob3VzZSB0b21hdG8gc2F1Y2UgZnJvbSBJdGFsaWFuIFJvbWEgdG9tYXRvZXMgaW4gdGhlIG5vcnRoZXJuIHBhcnQgb2YgSXRhbHkuIFRoZSBmaW5hbCBwcm9kdWN0IHRoZW4gZ29lcyB0aHJvdWdoIGFuIGludGVuc2l2ZSBxdWFsaXR5IGNvbnRyb2wgcHJvY2VzcyB0byBhc3N1cmUgcXVhbGl0eSBpbiBldmVyeSBiaXRlIG9mIHRvbWF0byBwYXN0YSB5b3UgdGFrZS5gO1xuICBjb25zdCBpbnRyb1RleHRUaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm9UZXh0VGhpLnRleHRDb250ZW50ID0gYEhpdCBieSBhIHBhc3RhIGNyYXZpbmcgeW91IGp1c3QgY2Fu4oCZdCBzaGFrZT8gSGF2ZSBubyBmZWFyIOKAkyBvdXIgcGFzdGFzIGFyZSBlYXNpbHkgYWNjZXNzaWJsZSBmb3IgZGluZS1pbiBhbmQgdGFrZWF3YXlzIGF0IGFueSBvbmUgb2Ygb3VyIDIwIG92ZXIgc3RvcmVzIGluIFNpbmdhcG9yZSEgSWYgZWF0aW5nIGhvbWUgaXMgeW91ciBjdXAgb2YgdGVhLCB3ZeKAmXZlIGdvdCB5b3UgY292ZXJlZCEgV2UgYXJlIGF2YWlsYWJsZSBmb3IgZGVsaXZlcnkgb24gRm9vZHBhbmRhLCBEZWxpdmVyb28gYW5kIEdyYWJGb29kLmA7XG4gIGNvbnN0IGludHJvVGV4dEZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm9UZXh0Rm91ci50ZXh0Q29udGVudCA9IGBQYXN0YU1hbmlhIGlzIGFsc28gaW50ZXJuYXRpb25hbCwgd2l0aCBwcmVzZW5jZSBpbiBvdGhlciBTRUEgY291bnRyaWVzLCBTcmkgTGFua2EsIENhbWJvZGlhLCBCYW5nbGFkZXNoLCBDaGluYSBhbmQgaW4gdGhlIE1pZGRsZSBFYXN0IHJlZ2lvbnMhYDtcbiAgaW50cm9BcnRpY2xlLmFwcGVuZChcbiAgICBpbnRyb1RpdGxlLFxuICAgIGludHJvVGV4dEZpcixcbiAgICBpbnRyb1RleHRTZWMsXG4gICAgaW50cm9UZXh0VGhpLFxuICAgIGludHJvVGV4dEZvdXJcbiAgKTtcblxuICBjb25zdCBpbnRyb1ZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW50cm9WaWRlby5jbGFzc0xpc3QuYWRkKFwiaWZyYW1lLXdyYXBwZXJcIik7XG4gIGludHJvVmlkZW8uaW5uZXJIVE1MID1cbiAgICAnPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzA3V3ZBc2dwX0NNXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xuICBlbEhvbWUuYXBwZW5kKGludHJvQXJ0aWNsZSwgaW50cm9WaWRlbyk7XG4gIHJldHVybiBlbEhvbWU7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbEhvbWU7XG4iLCJjb25zdCBpbml0aWFsTWVudSA9ICgpID0+IHtcbiAgY29uc3QgZWxNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxNZW51LmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnVcIik7XG4gIGNvbnN0IG1lbnVsaXN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiUHJvbW9zXCIsXG4gICAgICBpbnRyb1RleHQ6IFwiRGVlcCFEZWVwISBEaXNoIEJ1bmRsZVwiLFxuICAgICAgaW1hZ2VTcmM6IFwiLi9hc3NldHMvaW1hZ2VzL0Zlc3RpdmVGZWFzdEJ1bmRsZS5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiQ29tYm9zXCIsXG4gICAgICBpbnRyb1RleHQ6IFwiQnVuZGxlIG1lYWxzIGZvciBkaWZmZXJlbnQgZ3JvdXAgc2l6ZXMgYW5kIG9jY2FzaW9ucy5cIixcbiAgICAgIGltYWdlU3JjOiBcIi4vYXNzZXRzL2ltYWdlcy9Ib2xpZGF5LVRyZWF0LnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQaXp6YXNcIixcbiAgICAgIGludHJvVGV4dDpcbiAgICAgICAgXCJIYW5kY3JhZnRlZCBwaXp6YXMgbWFkZSBmcm9tIGZyZXNoIGRvdWdoIGV2ZXJ5ZGF5ISBBdCBldmVyeSBvdXRsZXQhXCIsXG4gICAgICBpbWFnZVNyYzogXCIuL2Fzc2V0cy9pbWFnZXMvTWVhdF9UcmVhdC5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU2lkZXNcIixcbiAgICAgIGludHJvVGV4dDogXCJTbWFsbCBiaXRlcyB0byBjb21wbGVtZW50IHlvdXIgbWVhbC5cIixcbiAgICAgIGltYWdlU3JjOiBcIi4vYXNzZXRzL2ltYWdlcy9jcmF6eS1icmVhZC5wbmdcIixcbiAgICB9LFxuICBdO1xuICBtZW51bGlzdC5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgIGNvbnN0IGVsTWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICBjb25zdCBlbE1lbnVJdGVtSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlbE1lbnVJdGVtSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBtZW51SXRlbS5pbWFnZVNyYyk7XG4gICAgY29uc3QgZWxNZW51SXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZWxNZW51SXRlbU5hbWUudGV4dENvbnRlbnQgPSBtZW51SXRlbS5uYW1lO1xuICAgIGNvbnN0IGVsTWVudUl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZWxNZW51SXRlbVRleHQudGV4dENvbnRlbnQgPSBtZW51SXRlbS5pbnRyb1RleHQ7XG4gICAgZWxNZW51SXRlbS5hcHBlbmQoZWxNZW51SXRlbUltZywgZWxNZW51SXRlbU5hbWUsIGVsTWVudUl0ZW1UZXh0KTtcbiAgICBlbE1lbnUuYXBwZW5kKGVsTWVudUl0ZW0pO1xuICB9KTtcblxuICByZXR1cm4gZWxNZW51O1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxNZW51O1xuIiwiY29uc3QgaW5pdGlhbE5hdiA9ICgpID0+IHtcbiAgY29uc3QgZWxOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCBuYXZMaXN0ID0gW1wiSE9NRVwiLCBcIk1FTlVcIiwgXCJDT05UQUNUXCJdO1xuICBuYXZMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiKTtcbiAgICBjb25zdCBuYXZJdGVtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIG5hdkl0ZW1MaW5rLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbS1saW5rXCIpO1xuICAgIG5hdkl0ZW1MaW5rLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBuYXZJdGVtLmFwcGVuZChuYXZJdGVtTGluayk7XG4gICAgZWxOYXYuYXBwZW5kKG5hdkl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGVsTmF2O1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxOYXY7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsQm9uZSBmcm9tIFwiLi9pbml0LWJvbmVcIjtcbmltcG9ydCBpbml0aWFsSG9tZSBmcm9tIFwiLi9pbml0LWhvbWVcIjtcbmltcG9ydCBpbml0aWFsTWVudSBmcm9tIFwiLi9pbml0LW1lbnVcIjtcbmltcG9ydCBpbml0aWFsQ29udGFjdCBmcm9tIFwiLi9pbml0LWNvbnRhY3RcIjtcblxuLy8gYWRkIGNsaWNrIGxpc3RlbmVyIHRvIG5hdnRhYnNcbmNvbnN0IGFkZENsaWNrTGlzdGVuZXJUb05hdlRhYnMgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtaXRlbS1saW5rXCIpO1xuICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIik7XG4gICAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgaWYgKGlzQWN0aXZlICE9PSAtMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgICAgICBhcnIuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICBldi50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgbGV0IGFjdGl2ZU1vZHVsO1xuICAgICAgICBjb25zb2xlLmxvZyhldi50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBzd2l0Y2ggKGV2LnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICAgIGNhc2UgXCJIT01FXCI6XG4gICAgICAgICAgICBhY3RpdmVNb2R1bCA9IGluaXRpYWxIb21lKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiTUVOVVwiOlxuICAgICAgICAgICAgYWN0aXZlTW9kdWwgPSBpbml0aWFsTWVudSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkNPTlRBQ1RcIjpcbiAgICAgICAgICAgIGFjdGl2ZU1vZHVsID0gaW5pdGlhbENvbnRhY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBtYWluU2VjdGlvbi5yZXBsYWNlQ2hpbGQoYWN0aXZlTW9kdWwsIG1haW5TZWN0aW9uLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vIGluaXRpYWwgaW5kZXggcGFnZVxuKCgpID0+IHtcbiAgY29uc3QgZWxCb25lID0gaW5pdGlhbEJvbmUoKTtcbiAgY29uc3QgbXlCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGVsTWFpbiA9IGVsQm9uZS5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgZWxNYWluLmFwcGVuZChpbml0aWFsSG9tZSgpKTtcbiAgbXlCb2R5LmFwcGVuZChlbEJvbmUpO1xuICBjb25zdCBob21lTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaXRlbS1saW5rXCIpO1xuICBob21lTmF2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGFkZENsaWNrTGlzdGVuZXJUb05hdlRhYnMoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=