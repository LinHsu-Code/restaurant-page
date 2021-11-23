import initialHeader from "./init-header";
import initialFooter from "./init-footer";

const initialBone = () => {
  const elContainer = document.createElement("div");
  elContainer.classList.add("container");
  const elHeader = initialHeader();
  const elMain = document.createElement("main");
  elMain.textContent = `I'm the main`;
  const elFooter = initialFooter();
  elContainer.append(elHeader, elMain, elFooter);
  return elContainer;
};
export default initialBone;
