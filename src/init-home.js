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
export default initialHome;
