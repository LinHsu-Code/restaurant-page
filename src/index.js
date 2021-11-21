// const myContainer = document.querySelector("#container");
// myContainer.textContent = "Hi Lin";

import initialBone from "./init-bone";
import initialHome from "./init-home";
import initialMenu from "./init-menu";
import initialContact from "./init-contact";

const elBone = initialBone();
const elHome = initialHome();
const elMenu = initialMenu();
const elContact = initialContact();

const myBody = document.querySelector("body");
const elMain = elBone.querySelector("main");
elMain.append(elHome);
myBody.append(elBone);
