const initialBone = () => {
  const elContainer = document.createElement("div");
  elContainer.classList.add("container");
  const elHeader = document.createElement("header");
  elHeader.textContent = `I'm the header`;
  const elMain = document.createElement("main");
  elMain.textContent = `I'm the main`;
  const elFooter = document.createElement("footer");
  elFooter.textContent = `I'm the footer`;
  elContainer.append(elHeader, elMain, elFooter);
  return elContainer;
};
export default initialBone;
