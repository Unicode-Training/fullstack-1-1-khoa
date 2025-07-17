//Hàm: Cú pháp cho phép gom các đoạn chương trình còn để thuận tiện cho việc gọi lại
//Thể hiện là 1 hành động (Động từ)
//Quy tắc đặt tên: camelCase

/*
Cú pháp: Decreation Function
function tenHam() {
    Nội dung hàm
}

function tenHam(param1, param2,...) {
    Nội dung hàm
}

Gọi hàm
tenHam();
tenHam(arg1, arg1,...);

Hàm return và hàm không return

- Hàm return sẽ trả 1 về giá trị sau từ khóa return
- Khi từ khóa return --> Các đoạn code dưới return sẽ không hoạt động
*/
// function showMessage(msg, status = "success") {
//   console.log("hello world", msg);
//   console.log(status);
// }

// showMessage("Unicode", "error");

// function getMessage() {
//   return "Unicode";
//   console.log("Ok");
// }
// const result = getMessage();
// console.log(result);

// function showMessage() {
//   console.log("Unicode");
//   return 1;
// }
// const message = showMessage();
// console.log(message);

// function sum(a, b) {
//   const total = a + b;
//   return total;
// }
// console.log(sum(1, 2));

// function div(a, b) {
//   if (b === 0) {
//     return "Không tính được";
//   }
//   return a / b;
// }
// const result = div(10, 2);
// console.log(result);

/*
Bài tập: Xây dựng 1 hàm tìm số lớn nhất trong 3 số (3 số được quy ước bởi 3 tham số)
Hàm trả về kết quả số lớn nhất (return)
*/
// function getMax(a, b, c) {
//   let max = a;
//   if (max < b) {
//     max = b;
//   }
//   if (max < c) {
//     max = c;
//   }
//   return max;
// }

// const max = getMax(50, 100, -9);
// console.log(max);

//Biến toàn cục và biến cục bộ
/*
4 phạm vi
- global scope
- function scope
- block scope (if, for, while,...)
- module scope
*/

// let a = 10; //global: ở đâu cũng truy cập được
// function something() {
//   console.log(a);
//   let b = 20;
//   if (b === 20) {
//     let c = 30;
//     console.log(b, c);
//   }
//   console.log(c);
// }
// function setData() {
//   a = 20;
// }
// // setData();
// something();

//Expression Function: Hàm biểu thức
// const getMessage = function () {
//   console.log("xin chào anh em");
// };
// getMessage();

//Trùng tên hàm
// function hello() {
//   console.log("Ok chưa?");
// }
// function hello() {
//   console.log("Ok rồi");
// }
// hello();

// const hello = function () {
//   console.log("Hello");
// };
// const hello = function () {
//   console.log("Hello");
// };

//Callback
// const display = function (a, func, ...args) {
//   console.log(a);
//   //   console.log(args);

//   if (typeof func === "function") {
//     func(...args); //spread operator
//     // func.apply(null, args);
//   }
// };
// const showMessage = function (msg, status, show) {
//   console.log("Unicode", msg, status, show);
// };
// display(10, showMessage, "B", "C", "D");

//Rest Parameter --> Tham số còn lại (Trả về 1 mảng)

let b = 20;

function display(c) {
  let a = 10;
  function showMessage() {
    console.log(`b`, b);

    console.log(`a`, a);

    console.log(`c`, c);
  }
  return showMessage;
}
const showMessage = display("Unicode");
showMessage();
//Hàm showMessage gọi là hàm closure
