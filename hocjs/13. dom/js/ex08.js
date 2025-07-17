//Event Object: Một object chứa các thông tin của 1 event
// const btnEl = document.querySelector(".btn");
// btnEl.addEventListener("mousedown", function (e) {
//   //e = event object
//   //   console.log(e);
//   //   console.log(e.target);
//   //   console.log(this);
// });

// document.addEventListener("keyup", function (e) {
//   console.log(e);
// });

/*
clientX, clientY: Khoảng cách tại Vị trí tác động sự kiện so với body
offsetX, offsetY: Khoảng cách tại vị trí tác động sự kiện so với viền của element
target: Mục tiêu mà sự kiện tác động lên
*/
// const appEl = document.querySelector(".app");
// let h3List = document.querySelectorAll("h3");
// h3List.forEach((h3) => {
//   h3.addEventListener("click", function () {
//     this.style.color = "red";
//   });
// });

// const addBtnEl = document.querySelector(".add-btn");
// addBtnEl.addEventListener("click", function () {
//   appEl.innerHTML += `<h3>Item ${h3List.length + 1}</h3>`;
//   h3List = document.querySelectorAll("h3");
//   h3List.forEach((h3) => {
//     h3.addEventListener("click", function () {
//       this.style.color = "red";
//     });
//   });
// });

// const appEl = document.querySelector(".app");
// const addBtnEl = document.querySelector(".add-btn");
// addBtnEl.addEventListener("click", function (e) {
//   const h3List = document.querySelectorAll("h3");
//   appEl.innerHTML += `<h3>Item ${h3List.length + 1}</h3>`;
// });

// appEl.addEventListener("click", function (e) {
//   if (e.target.localName === "h3") {
//     e.target.style.color = "red";
//   }
// });

//Dynamic HTML

//preventDefault
// const aEl = document.querySelector("a");
// aEl.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(this.href);
// });
const menuEl = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  //   alert("Không thể click chuột phải");
  const x = e.clientX;
  const y = e.clientY;
  const css = {
    position: `absolute`,
    top: `${y}px`,
    left: `${x}px`,
    display: `block`,
  };
  Object.assign(menuEl.style, css);
});
document.addEventListener("click", function () {
  menuEl.style.display = "none";
  console.log("document click");
});
menuEl.addEventListener("click", function (e) {
  console.log("menu click");
  e.stopPropagation();
  if (e.target.localName === "li") {
    e.target.style.color = "red";
  }
});

//Nổi bọt của thẻ html

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    menuEl.style.display = "none";
  }
});
