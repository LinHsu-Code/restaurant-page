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
export default initialContact;
