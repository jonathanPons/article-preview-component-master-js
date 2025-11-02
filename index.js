// @ts-nocheck
const clickShare = document.getElementById("click-share");
const activeShare = document.querySelector(".active-share");
const presentationName = document.querySelector(".presentation-name");

const activeShareMobile = document.querySelector(".active-share-mobile");
const clickShareMobile = document.getElementById("click-share-mobile");

// Fonction : activer la barre (1er clic)
function showMobileShare() {
  activeShareMobile.classList.add("active");
  presentationName.classList.add("hide");
  clickShare.classList.add("hide"); // Cache le bouton original
}

// Fonction : désactiver la barre (2e clic)
function hideMobileShare() {
  activeShareMobile.classList.remove("active");
  presentationName.classList.remove("hide");
  clickShare.classList.remove("hide"); // Réaffiche le bouton original
}

clickShare.addEventListener("click", () => {
  if (window.innerWidth <= 426) {
    showMobileShare();
  } else {
    // Desktop : toggle du tooltip
    document.querySelector(".active-share").classList.toggle("active");
  }
});
clickShareMobile.addEventListener("click", () => {
  if (window.innerWidth <= 426) {
    hideMobileShare();
  }
});
