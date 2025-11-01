// @ts-nocheck
const clickShare = document.getElementById("click-share");
const activeShare = document.querySelector(".active-share");
const presentationName = document.querySelector(".presentation-name");
const ongletMobile = document.querySelector(".onglet-mobile");
console.log("activeShare", activeShare);
console.log("presentation-name", presentationName);
// AU clic, faire apparaitre la class active share //

clickShare.addEventListener("click", () => {
  activeShare.classList.toggle("active");
  if (window.innerWidth <= 425) {
    presentationName.classList.toggle("remove");
    activeShare.classList.toggle("run");
  }
});
