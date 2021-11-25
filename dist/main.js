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
  elContact.classList.add("main-contact");

  const elAddress = document.createElement("address");
  const elLocation = document.createElement("p");
  elLocation.innerHTML =
    "<span>🏠</span>57 Anchorvale Road, #02-02, Sengkang Sports Centre, Singapore 544964";
  const elTel = document.createElement("p");
  elTel.innerHTML = "<span>☎️</span>+65 6312 4522";
  elAddress.append(elLocation, elTel);

  const elMap = document.createElement("div");
  elMap.classList.add("iframe-wrapper");
  elMap.innerHTML =
    '<iframe src="https://www.google.com/maps/d/embed?mid=1yYI5JrAJ8XlAaLgwjgoBujI_9MoYIo8K" width="640" height="480"></iframe>';
  elContact.append(elAddress, elMap);
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
      name: "Combos",
      introText: "Bundle meals for different group sizes and occasions.",
      imageSrc: "./assets/images/Holiday-Treat.png",
    },
    {
      name: "Promos",
      introText: "Deep!Deep! Dish Bundle",
      imageSrc: "./assets/images/FestiveFeastBundle.png",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0E7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3REFBYTtBQUNoQztBQUNBLG1CQUFtQix3REFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1ozQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25COUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQVTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQVU7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlKQUF5SixVQUFVLGlCQUFpQixpQkFBaUIsV0FBVztBQUNoTjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlCM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDZDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDQTtBQUNBO0FBQ007O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQVc7QUFDckM7QUFDQTtBQUNBLDBCQUEwQixzREFBVztBQUNyQztBQUNBO0FBQ0EsMEJBQTBCLHlEQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzREFBVztBQUM1QjtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LWJvbmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0LWhvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbml0aWFsSGVhZGVyIGZyb20gXCIuL2luaXQtaGVhZGVyXCI7XG5pbXBvcnQgaW5pdGlhbEZvb3RlciBmcm9tIFwiLi9pbml0LWZvb3RlclwiO1xuXG5jb25zdCBpbml0aWFsQm9uZSA9ICgpID0+IHtcbiAgY29uc3QgZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb25zdCBlbEhlYWRlciA9IGluaXRpYWxIZWFkZXIoKTtcbiAgY29uc3QgZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IGVsRm9vdGVyID0gaW5pdGlhbEZvb3RlcigpO1xuICBlbENvbnRhaW5lci5hcHBlbmQoZWxIZWFkZXIsIGVsTWFpbiwgZWxGb290ZXIpO1xuICByZXR1cm4gZWxDb250YWluZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbEJvbmU7XG4iLCJjb25zdCBpbml0aWFsQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgZWxDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxDb250YWN0LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhY3RcIik7XG5cbiAgY29uc3QgZWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFkZHJlc3NcIik7XG4gIGNvbnN0IGVsTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZWxMb2NhdGlvbi5pbm5lckhUTUwgPVxuICAgIFwiPHNwYW4+8J+PoDwvc3Bhbj41NyBBbmNob3J2YWxlIFJvYWQsICMwMi0wMiwgU2VuZ2thbmcgU3BvcnRzIENlbnRyZSwgU2luZ2Fwb3JlIDU0NDk2NFwiO1xuICBjb25zdCBlbFRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlbFRlbC5pbm5lckhUTUwgPSBcIjxzcGFuPuKYju+4jzwvc3Bhbj4rNjUgNjMxMiA0NTIyXCI7XG4gIGVsQWRkcmVzcy5hcHBlbmQoZWxMb2NhdGlvbiwgZWxUZWwpO1xuXG4gIGNvbnN0IGVsTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxNYXAuY2xhc3NMaXN0LmFkZChcImlmcmFtZS13cmFwcGVyXCIpO1xuICBlbE1hcC5pbm5lckhUTUwgPVxuICAgICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9kL2VtYmVkP21pZD0xeVlJNUpyQUo4WGxBYUxnd2pnb0J1aklfOU1vWUlvOEtcIiB3aWR0aD1cIjY0MFwiIGhlaWdodD1cIjQ4MFwiPjwvaWZyYW1lPic7XG4gIGVsQ29udGFjdC5hcHBlbmQoZWxBZGRyZXNzLCBlbE1hcCk7XG4gIHJldHVybiBlbENvbnRhY3Q7XG59O1xuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbENvbnRhY3Q7XG4iLCJjb25zdCBpbml0aWFsRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBlbEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGVsQ29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVsQ29weXJpZ2h0LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgMjAyMSBMaW5cIjtcbiAgZWxGb290ZXIuYXBwZW5kKGVsQ29weXJpZ2h0KTtcbiAgcmV0dXJuIGVsRm9vdGVyO1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxGb290ZXI7XG4iLCJpbXBvcnQgaW5pdGlhbE5hdiBmcm9tIFwiLi9pbml0LW5hdmJhclwiO1xuXG5jb25zdCBpbml0aWFsSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBlbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgZWxOYW1lLnRleHRDb250ZW50ID0gXCJQYXN0YU1hbmlhXCI7XG4gIGNvbnN0IGVsTmF2ID0gaW5pdGlhbE5hdigpO1xuXG4gIGVsSGVhZGVyLmFwcGVuZChlbE5hbWUsIGVsTmF2KTtcbiAgcmV0dXJuIGVsSGVhZGVyO1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxIZWFkZXI7XG4iLCJjb25zdCBpbml0aWFsSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgZWxIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZWxIb21lLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhvbWVcIik7XG4gIGNvbnN0IGludHJvQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICBjb25zdCBpbnRyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBpbnRyb1RpdGxlLnRleHRDb250ZW50ID1cbiAgICBcIlBhc3RhTWFuaWEgaXMgdGhlIGxhcmdlc3QgSXRhbGlhbiBjYXN1YWwgZGluaW5nIGNoYWluIGluIFNpbmdhcG9yZSBvZmZlcmluZyBhIGRpdmVyc2UgcmFuZ2Ugb2YgcGFzdGFzLlwiO1xuICBjb25zdCBpbnRyb1RleHRGaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm9UZXh0RmlyLnRleHRDb250ZW50ID0gYEZyb20gSXRhbGlhbiBjbGFzc2ljcyBsaWtlIFByYXduIEFnbGlvIGFuZCBDYXJib25hcmEsIHRvIHNwZWNpYWxseSBjcmFmdGVkIGZ1c2lvbiBkZWxpZ2h0cyBsaWtlIFNlYWZvb2QgVG9tIFl1bSBhbmQgU2FsdGVkIEVnZyBDaGlja2VuLCB0aGVyZeKAmXMgc29tZXRoaW5nIGZvciBldmVyeW9uZSFgO1xuICBjb25zdCBpbnRyb1RleHRTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW50cm9UZXh0U2VjLnRleHRDb250ZW50ID0gYFF1YWxpdHkgaXMgb3VyIHByaW9yaXR5ISBXZSBmYXJtIGFuZCBwcm9kdWNlIG91ciBvd24gaW4taG91c2UgdG9tYXRvIHNhdWNlIGZyb20gSXRhbGlhbiBSb21hIHRvbWF0b2VzIGluIHRoZSBub3J0aGVybiBwYXJ0IG9mIEl0YWx5LiBUaGUgZmluYWwgcHJvZHVjdCB0aGVuIGdvZXMgdGhyb3VnaCBhbiBpbnRlbnNpdmUgcXVhbGl0eSBjb250cm9sIHByb2Nlc3MgdG8gYXNzdXJlIHF1YWxpdHkgaW4gZXZlcnkgYml0ZSBvZiB0b21hdG8gcGFzdGEgeW91IHRha2UuYDtcbiAgY29uc3QgaW50cm9UZXh0VGhpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGludHJvVGV4dFRoaS50ZXh0Q29udGVudCA9IGBIaXQgYnkgYSBwYXN0YSBjcmF2aW5nIHlvdSBqdXN0IGNhbuKAmXQgc2hha2U/IEhhdmUgbm8gZmVhciDigJMgb3VyIHBhc3RhcyBhcmUgZWFzaWx5IGFjY2Vzc2libGUgZm9yIGRpbmUtaW4gYW5kIHRha2Vhd2F5cyBhdCBhbnkgb25lIG9mIG91ciAyMCBvdmVyIHN0b3JlcyBpbiBTaW5nYXBvcmUhIElmIGVhdGluZyBob21lIGlzIHlvdXIgY3VwIG9mIHRlYSwgd2XigJl2ZSBnb3QgeW91IGNvdmVyZWQhIFdlIGFyZSBhdmFpbGFibGUgZm9yIGRlbGl2ZXJ5IG9uIEZvb2RwYW5kYSwgRGVsaXZlcm9vIGFuZCBHcmFiRm9vZC5gO1xuICBjb25zdCBpbnRyb1RleHRGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGludHJvVGV4dEZvdXIudGV4dENvbnRlbnQgPSBgUGFzdGFNYW5pYSBpcyBhbHNvIGludGVybmF0aW9uYWwsIHdpdGggcHJlc2VuY2UgaW4gb3RoZXIgU0VBIGNvdW50cmllcywgU3JpIExhbmthLCBDYW1ib2RpYSwgQmFuZ2xhZGVzaCwgQ2hpbmEgYW5kIGluIHRoZSBNaWRkbGUgRWFzdCByZWdpb25zIWA7XG4gIGludHJvQXJ0aWNsZS5hcHBlbmQoXG4gICAgaW50cm9UaXRsZSxcbiAgICBpbnRyb1RleHRGaXIsXG4gICAgaW50cm9UZXh0U2VjLFxuICAgIGludHJvVGV4dFRoaSxcbiAgICBpbnRyb1RleHRGb3VyXG4gICk7XG5cbiAgY29uc3QgaW50cm9WaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGludHJvVmlkZW8uY2xhc3NMaXN0LmFkZChcImlmcmFtZS13cmFwcGVyXCIpO1xuICBpbnRyb1ZpZGVvLmlubmVySFRNTCA9XG4gICAgJzxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8wN1d2QXNncF9DTVwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcbiAgZWxIb21lLmFwcGVuZChpbnRyb0FydGljbGUsIGludHJvVmlkZW8pO1xuICByZXR1cm4gZWxIb21lO1xufTtcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxIb21lO1xuIiwiY29uc3QgaW5pdGlhbE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGVsTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsTWVudS5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51XCIpO1xuICBjb25zdCBtZW51bGlzdCA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkNvbWJvc1wiLFxuICAgICAgaW50cm9UZXh0OiBcIkJ1bmRsZSBtZWFscyBmb3IgZGlmZmVyZW50IGdyb3VwIHNpemVzIGFuZCBvY2Nhc2lvbnMuXCIsXG4gICAgICBpbWFnZVNyYzogXCIuL2Fzc2V0cy9pbWFnZXMvSG9saWRheS1UcmVhdC5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUHJvbW9zXCIsXG4gICAgICBpbnRyb1RleHQ6IFwiRGVlcCFEZWVwISBEaXNoIEJ1bmRsZVwiLFxuICAgICAgaW1hZ2VTcmM6IFwiLi9hc3NldHMvaW1hZ2VzL0Zlc3RpdmVGZWFzdEJ1bmRsZS5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUGl6emFzXCIsXG4gICAgICBpbnRyb1RleHQ6XG4gICAgICAgIFwiSGFuZGNyYWZ0ZWQgcGl6emFzIG1hZGUgZnJvbSBmcmVzaCBkb3VnaCBldmVyeWRheSEgQXQgZXZlcnkgb3V0bGV0IVwiLFxuICAgICAgaW1hZ2VTcmM6IFwiLi9hc3NldHMvaW1hZ2VzL01lYXRfVHJlYXQucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlNpZGVzXCIsXG4gICAgICBpbnRyb1RleHQ6IFwiU21hbGwgYml0ZXMgdG8gY29tcGxlbWVudCB5b3VyIG1lYWwuXCIsXG4gICAgICBpbWFnZVNyYzogXCIuL2Fzc2V0cy9pbWFnZXMvY3JhenktYnJlYWQucG5nXCIsXG4gICAgfSxcbiAgXTtcbiAgbWVudWxpc3QuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICBjb25zdCBlbE1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgY29uc3QgZWxNZW51SXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZWxNZW51SXRlbUltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbWVudUl0ZW0uaW1hZ2VTcmMpO1xuICAgIGNvbnN0IGVsTWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGVsTWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gbWVudUl0ZW0ubmFtZTtcbiAgICBjb25zdCBlbE1lbnVJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVsTWVudUl0ZW1UZXh0LnRleHRDb250ZW50ID0gbWVudUl0ZW0uaW50cm9UZXh0O1xuICAgIGVsTWVudUl0ZW0uYXBwZW5kKGVsTWVudUl0ZW1JbWcsIGVsTWVudUl0ZW1OYW1lLCBlbE1lbnVJdGVtVGV4dCk7XG4gICAgZWxNZW51LmFwcGVuZChlbE1lbnVJdGVtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsTWVudTtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTWVudTtcbiIsImNvbnN0IGluaXRpYWxOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IGVsTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbmF2TGlzdCA9IFtcIkhPTUVcIiwgXCJNRU5VXCIsIFwiQ09OVEFDVFwiXTtcbiAgbmF2TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIik7XG4gICAgY29uc3QgbmF2SXRlbUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBuYXZJdGVtTGluay5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW0tbGlua1wiKTtcbiAgICBuYXZJdGVtTGluay50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbmF2SXRlbS5hcHBlbmQobmF2SXRlbUxpbmspO1xuICAgIGVsTmF2LmFwcGVuZChuYXZJdGVtKTtcbiAgfSk7XG4gIHJldHVybiBlbE5hdjtcbn07XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTmF2O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbEJvbmUgZnJvbSBcIi4vaW5pdC1ib25lXCI7XG5pbXBvcnQgaW5pdGlhbEhvbWUgZnJvbSBcIi4vaW5pdC1ob21lXCI7XG5pbXBvcnQgaW5pdGlhbE1lbnUgZnJvbSBcIi4vaW5pdC1tZW51XCI7XG5pbXBvcnQgaW5pdGlhbENvbnRhY3QgZnJvbSBcIi4vaW5pdC1jb250YWN0XCI7XG5cbi8vIGFkZCBjbGljayBsaXN0ZW5lciB0byBuYXZ0YWJzXG5jb25zdCBhZGRDbGlja0xpc3RlbmVyVG9OYXZUYWJzID0gKCkgPT4ge1xuICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWl0ZW0tbGlua1wiKTtcbiAgbmF2SXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSBldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpO1xuICAgICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgIGlmIChpc0FjdGl2ZSAhPT0gLTEpIHtcbiAgICAgICAgYXJyLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgZXYudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGxldCBhY3RpdmVNb2R1bDtcbiAgICAgICAgY29uc29sZS5sb2coZXYudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgc3dpdGNoIChldi50YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICBjYXNlIFwiSE9NRVwiOlxuICAgICAgICAgICAgYWN0aXZlTW9kdWwgPSBpbml0aWFsSG9tZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIk1FTlVcIjpcbiAgICAgICAgICAgIGFjdGl2ZU1vZHVsID0gaW5pdGlhbE1lbnUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJDT05UQUNUXCI6XG4gICAgICAgICAgICBhY3RpdmVNb2R1bCA9IGluaXRpYWxDb250YWN0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbWFpblNlY3Rpb24ucmVwbGFjZUNoaWxkKGFjdGl2ZU1vZHVsLCBtYWluU2VjdGlvbi5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBpbml0aWFsIGluZGV4IHBhZ2VcbigoKSA9PiB7XG4gIGNvbnN0IGVsQm9uZSA9IGluaXRpYWxCb25lKCk7XG4gIGNvbnN0IG15Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBlbE1haW4gPSBlbEJvbmUucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGVsTWFpbi5hcHBlbmQoaW5pdGlhbEhvbWUoKSk7XG4gIG15Qm9keS5hcHBlbmQoZWxCb25lKTtcbiAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWl0ZW0tbGlua1wiKTtcbiAgaG9tZU5hdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBhZGRDbGlja0xpc3RlbmVyVG9OYXZUYWJzKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9