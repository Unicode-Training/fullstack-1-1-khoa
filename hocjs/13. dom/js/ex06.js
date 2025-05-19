//DOM CSS: Can thiệp css vào html thông qua thuộc tính style (inline css)
const btnEl = document.querySelector(".btn");
const contentEl = document.querySelector(".content");
const btn2El = document.querySelector(".btn-2");
console.log(contentEl.style);
//Naming Convention:
// - color --> color
// - background-color --> backgroundColor
// - font-size --> fontSize
btnEl.addEventListener("click", function () {
  //   contentEl.style = `color: red`;
  //   contentEl.style.color = "red";
  //   contentEl.style.fontSize = "2rem";
  //   contentEl.style.fontStyle = "italic";
  const css = {
    color: "red",
    fontSize: "2rem",
    fontStyle: "italic",
  };
  Object.assign(contentEl.style, css);
});
btn2El.addEventListener("click", function () {
  contentEl.style.background = null;
});

/*
DOM CSS dùng khi nào?
- Áp dụng cho đoạn css ngắn
- Áp dụng cho các thuộc tính css có giá trị động (Giá trị được tính toán bằng js)
*/

//Thực hành:
/*
Xây dựng chức năng FadeIn, FadeOut

Gợi ý:
- JS:
+ setTimeout
+ DOM CSS
- CSS:
+ transition
+ opacity
*/
