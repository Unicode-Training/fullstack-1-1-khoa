//Attrbiute
//Truy cập vào các thuộc tính: element.tenthuoctinh (Thuộc tính phải là thuộc khả dụng trong thẻ html đó)
// const imgEl = document.querySelector("img");
// const btnEl = document.querySelector(".btn");
// console.log(imgEl);
// console.log(`src: ${imgEl.src}`);
// console.log(`alt: ${imgEl.alt}`);
// console.log(`title: ${imgEl.title}`);
// console.log(`width: ${imgEl.width}`);
// console.log(`height: ${imgEl.height}`);
// btnEl.addEventListener("click", function () {
//   imgEl.src = `https://fastly.picsum.photos/id/822/536/354.jpg?hmac=9SpWynDccCitrWhlYnRoAmb-sYoLNpUVQHmLsbbOLm4`;
// });

//getAttribute(tenthuoctinh)
// console.log(`data-id`, imgEl.getAttribute("data-id"));

//setAttribute(tenthuoctinh, giatri)
// imgEl.setAttribute("data-id", "456");
// imgEl.setAttribute("data-index", "ahihi");

//Lưu ý: Hàm getAttribute và setAttribute áp dụng với mọi thuộc tính

//Data Attribute: Thuộc tính do lập trình viên tự tạo để giải quyết bài toán nào đó bằng JS, có định dạng: data-kytubatky
//Có 2 cách:
// 1. Dùng hàm getAttribute, setAttribute
// 2. Dùng Object Dataset
// console.log(imgEl.dataset);
// console.log(imgEl.dataset.id); //data-id
// imgEl.dataset.index = "ahihi"; //data-index

//Thêm data-animation-duration
// imgEl.dataset.animationDuration = "1000";

//Lưu ý: Nếu muốn làm việc class trong html, cần dùng className
// console.log(imgEl.className);
// imgEl.className = "active";

//ClassList: Object cho phép thao tác với class linh hoạt
// console.log(imgEl.classList);

//Thêm class mới
// imgEl.classList.add("img-03");

// //Xóa class
// imgEl.classList.remove("img-02");

// //Thay thế class
// imgEl.classList.replace("img-03", "img-04");

// //Kiểm tra class tồn tại
// console.log(imgEl.classList.contains("img-04"));

// //Toggle class
// // - Nếu class tồn tại --> Xóa bỏ
// // - Nếu class không tồn tại --> Thêm mới
// imgEl.classList.toggle("img-05"); //Thêm mới
// imgEl.classList.toggle("img-05"); //Xóa bỏ

const liList = document.querySelectorAll("ul li");
liList.forEach((element) => {
  element.addEventListener("click", () => {
    //Xóa active của item đang mở
    const itemActive = document.querySelector("ul li.active");

    element.classList.toggle("active");

    if (itemActive) {
      itemActive.classList.remove("active");
    }
  });
});

/*
Khi click vào element --> Kiểm tra xem có item nào có class active không?
Nếu có --> Xóa class đó khỏi item
Thêm mới class active vào item vừa click
*/

const inputEl = document.querySelector(".todo-form input");
const btnEl = document.querySelector(".todo-form button");
const errorEl = document.querySelector(".error");
const todoListEl = document.querySelector(".todo-list");
const todoList = [];
const render = () => {
  //Đọc mảng todoList --> Cập nhật vào todoListEl
  //   console.log(todoList);

  const html = todoList
    .map((todo, index) => {
      return `<li><input type="checkbox" data-index="${index}" ${
        todo.completed ? "checked" : ""
      }> <span class="${todo.completed ? "completed" : ""}">${
        todo.name
      }</span> <span data-index="${index}">&times;</span></li>`;
    })
    .join("");
  todoListEl.innerHTML = html;
  //Lắng nghe sự kiện
  const spanList = document.querySelectorAll(".todo-list span");
  const checkboxList = document.querySelectorAll(".todo-list input");
  spanList.forEach((element, i) => {
    element.addEventListener("click", () => {
      const index = element.dataset.index;
      todoList.splice(index, 1);
      render();
    });
    if (checkboxList[i]) {
      checkboxList[i].addEventListener("change", function () {
        const index = this.dataset.index;
        //Lấy trạng thái của checkbox
        if (this.checked) {
          //Checkbox được check
          todoList[index].completed = true;
        } else {
          todoList[index].completed = false;
        }
        console.log(todoList);

        render();
      });
    }
  });
};
btnEl.addEventListener("click", function () {
  const value = inputEl.value; //Lấy giá trị của input
  errorEl.innerText = "";
  if (!value) {
    errorEl.innerText = `Vui lòng nhập tên công việc`;
    return;
  }
  //Thêm công việc vào mảng todoList
  todoList.push({
    name: value,
    completed: false,
  });
  render();

  //Xóa input
  inputEl.value = "";
  inputEl.focus();
});
