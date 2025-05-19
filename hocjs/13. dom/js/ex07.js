const fadeoutBtnEl = document.querySelector(".fadeout-btn");
const fadeinBtnEl = document.querySelector(".fadein-btn");
const contentEl = document.querySelector(".content");
const DURATION = 1000;
fadeoutBtnEl.addEventListener("click", function () {
  contentEl.style.transition = `opacity ${DURATION}ms ease`;
  contentEl.style.opacity = 0;
  setTimeout(() => {
    contentEl.style.display = "none";
    contentEl.style.transition = null;
    contentEl.style.opacity = null;
  }, DURATION);
});
fadeinBtnEl.addEventListener("click", function () {
  contentEl.style.transition = `opacity ${DURATION}ms ease`;
  contentEl.style.display = "block";
  contentEl.style.opacity = 0;
  setTimeout(() => {
    contentEl.style.opacity = 1;
  }, DURATION / 2);
});
