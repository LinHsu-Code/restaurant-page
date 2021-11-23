const initialNav = () => {
  const elNav = document.createElement("nav");
  const navList = ["HOME", "MENU", "CONTACT"];
  navList.forEach((item) => {
    const navItem = document.createElement("div");
    const navItemLink = document.createElement("a");
    navItemLink.textContent = item;
    navItem.append(navItemLink);
    elNav.append(navItem);
  });
  return elNav;
};
export default initialNav;
