//DOM Navigation
/*
- Cho phép lựa chọn các node dựa vào các quan hệ
+ Cha: parentElement --> Chỉ cấp cha gần nhất
+ Con: children --> Trả về danh sách các con gần nhất
+ Trái: previousElementSibling 
+ Phải: nextElementSibling
*/

// const liList = document.querySelectorAll("li");
// liList.forEach((element) => {
//   element.addEventListener("click", function () {
//     // const ulParent = element.parentElement;
//     // ulParent.style.border = `2px solid red`;
//     // console.log(element.parentElement.parentElement);
//     const nextEl = element.nextElementSibling;
//     if (nextEl) {
//       nextEl.style.color = "red";
//     }
//   });
// });

// const menu = document.querySelector(".menu");
// for (let i = 0; i < menu.children.length; i++) {
//   menu.children[i].style.color = "red";
// }

const aList = document.querySelectorAll(".menu a");
aList.forEach((a) => {
  const subMenu = a.nextElementSibling;
  if (subMenu) {
    subMenu.parentElement.classList.add("has-children");
  }
  a.addEventListener("click", (e) => {
    e.preventDefault();
    if (subMenu) {
      const liActive = document.querySelector(".menu li.active");

      a.parentElement.classList.toggle("active");

      if (liActive) {
        liActive.classList.remove("active");
      }
    }
  });
});
