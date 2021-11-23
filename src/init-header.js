import initialNav from "./init-navbar";

const initialHeader = () => {
  const elHeader = document.createElement("header");
  const elName = document.createElement("h1");
  elName.textContent = "PastaMania";
  const elNav = initialNav();

  elHeader.append(elName, elNav);
  return elHeader;
};
export default initialHeader;
