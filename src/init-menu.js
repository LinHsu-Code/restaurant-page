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
export default initialMenu;
