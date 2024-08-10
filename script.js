const nav = document.querySelector(".navigation");

function toggleBurgerMenu() {
  nav.classList.toggle("active");
}

document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
  });
});


document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const img = this.querySelector("img");
    if (img) {
      const overlay = document.getElementById("overlay");
      const overlayImg = document.getElementById("overlay-img");
      overlayImg.src = img.src;
      overlay.style.display = "flex";
    }
  });
});

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

