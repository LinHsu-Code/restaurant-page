import initialBone from "./init-bone";
import initialHome from "./init-home";
import initialMenu from "./init-menu";
import initialContact from "./init-contact";

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
            activeModul = initialHome();
            break;
          case "MENU":
            activeModul = initialMenu();
            break;
          case "CONTACT":
            activeModul = initialContact();
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
  const elBone = initialBone();
  const myBody = document.querySelector("body");
  const elMain = elBone.querySelector("main");
  elMain.append(initialHome());
  myBody.append(elBone);
  const homeNav = document.querySelector(".nav-item-link");
  homeNav.classList.add("active");
  addClickListenerToNavTabs();
})();
