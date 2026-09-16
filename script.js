const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const closeButton = document.querySelector(".lightbox-close");

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = image ? image.alt : "Portfolio plate";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});
