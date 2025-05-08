const h1 = document.querySelector("h1");
const span = document.querySelector("h1 span");
const btnPlus = document.querySelector(".plus");
const btnMinus = document.querySelector(".minus");
btnPlus.addEventListener("click", function () {
  span.innerText++;
  if (+span.innerText === 10) {
    btnPlus.disabled = true;
    h1.className = "active";
  }
});
btnMinus.addEventListener("click", function () {
  span.innerText--;
});

//DOM Attribute
//ClassList
