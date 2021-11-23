const initialFooter = () => {
  const elFooter = document.createElement("footer");
  const elCopyright = document.createElement("p");
  elCopyright.textContent = "Copyright © 2021 Lin";
  elFooter.append(elCopyright);
  return elFooter;
};
export default initialFooter;
