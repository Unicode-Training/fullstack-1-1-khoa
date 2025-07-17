const ul = document.querySelector("ul");
const liList = document.querySelectorAll("ul li");
liList.forEach((li) => {
  const upBtn = li.querySelector(".up");
  const downBtn = li.querySelector(".down");
  upBtn.addEventListener("click", () => {
    const prevEl = li.previousElementSibling;
    if (!prevEl) {
      return;
    }

    ul.insertBefore(li, prevEl);
  });

  downBtn.addEventListener("click", () => {
    const nexEl = li.nextElementSibling;
    if (!nexEl) {
      return;
    }
    //Thêm vào sao nextEl
    ul.insertBefore(li, nexEl.nextElementSibling);
  });
});
