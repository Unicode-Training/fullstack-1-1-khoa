//Khi làm việc với event, thông qua các hàm có sẵn của DOM và tên các event có sẵn để lăng nghe được hành động từ phía người dùng --> Từ đó thực hiện 1 nhiệm vụ

//Cú pháp lắng nghe sự kiện
/*
element.on{tensukien} = function() {
    Nội dung xử lý
}
*/
// const btnEl = document.querySelector(".btn");
// btnEl.onclick = function () {
//   console.log("click");
// };
// btnEl.onmouseover = function () {
//   console.log("hover");
// };

// const inputEl = document.querySelector(".field");
// inputEl.oninput = function () {
//   console.log("Người dùng vừa gõ");
//   console.log(inputEl.value);
// };

const btnEl = document.querySelector(".btn");
const handleClick = function (e) {
  //   console.log("Hello anh em 1");
  //   console.log(e);
  //   if (e.shiftKey) {
  //     document.body.style.background = "red";
  //   } else {
  //     document.body.style.background = "green";
  //   }
  //   console.log(this);
};
btnEl.addEventListener("mousedown", handleClick);

// btnEl.addEventListener("click", function () {
//   console.log("Hello anh em 2");
// });
