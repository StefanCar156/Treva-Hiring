const sectionTextElements = document.querySelectorAll(".text");
const sectionImageElements = document.querySelectorAll(".image");

window.addEventListener("scroll", () => {
  console.log((Math.floor(window.scrollY / 1000) * 700) % 700);
  for (let i = 0; i < sectionTextElements.length; i++) {
    if (
      (Math.floor(window.scrollY / 1000) * 700) % 700 == 0 &&
      window.scrollY > (i + 1) * 700
    ) {
      sectionTextElements[i].classList.add("show-text");
      sectionImageElements[i].classList.add("show-image");
    } else {
      sectionTextElements[i].classList.remove("show-text");
      sectionImageElements[i].classList.remove("show-image");
    }
  }
});
