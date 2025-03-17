//comment 1 dòng
/*
comment nhiều dòng
*/

//Biến --> dùng lưu trữ dữ liệu tạm thời (Lưu ở RAM), có thể đặt tên
//Quy tắc camelCase: xinChaoAnhEm
//Sử dụng danh từ, tường minh, Tiếng anh
//Cho phép các ký tự: hoa, thường, số, gạch dưới và $
//Không được bắt đầu bằng số
//Không được đặt tên biến trùng với các từ khóa của js

// let userEmail = "hoangan.web@gmail.com";
// let age = 32;
// let fullName;
// console.log(userEmail);
// console.log(age);

// fullName = "Hoàng An";
// console.log(fullName);

//Nối 2 biến trong js (+)
// let a = "Hoàng An";
// let b = "Unicode";
// let c = a + " " + b;
// console.log(c);

let course = "Fullstack";
// let welcome = "Chào mừng bạn đến với khóa học " + course + " tại Unicode";
let welcome = `<h1>Chào mừng bạn đến với khóa học ${course} tại Unicode</h1>`; //backtick

//Hiển thị nội dung lên màn hình trình duyệt
//1. document.write()
// document.write(welcome);
//2. DOM
// document.body.innerHTML = welcome;
document.querySelector("#root").innerHTML = welcome;

//Hằng số
// - Các hằng số cố định được khai báo từ đầu --> Viết hoa hết và nối bởi gạch dưới
// - Các hằng số được sinh ra trong quá trình viết chương trình --> Đặt tên như biến
// const PI = 3.14;
// console.log(PI);
// const BASE_VALUE = 10;
// for (let i = 1; i <= 10; i++) {
//   const value = i * BASE_VALUE;
//   console.log(value);
// }

const BASE_VALUE = undefined;
console.log(BASE_VALUE);
