//IIFE: Immediately Invoked Function Expression
// (function (msg) {
//   console.log("something", msg);
// })("Unicode");

//Giải thuật đệ quy
// Web: Thường được sử dụng để giải quyết các bài toán đa cấp
// const showNumber = function (n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

//Tìm số fibonacci
const fibonacci = function (n) {
  //n = Số fibonacci cần tìm
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
// console.log(fibonacci(5));

/*
fibonacci(5) = fibonacci(4) + fibonacci(3)
             = fibonacci(3) + fibonacci(2) + fibonacci(2) + fibonacci(1)   
             = fibonacci(2) + fibonacci(1)  + 1 + 1 + 1
             =  1  + 1 + 3 = 5
*/

//Bài tập: Viết hàm tính tổng các số chẵn từ 1 đến n dùng giải thuật đệ quy
// const getTotal = function (n) {
//   //Logic
//   if (n === 0) {
//     return 0;
//   }
//   //Nếu n là số lẻ --> Tìm số chẵn gần nhất
//   if (n % 2 !== 0) {
//     n--;
//   }
//   console.log(n);

//   return n + getTotal(n - 2);
// };
// const total = getTotal(9);
// console.log(total);

//Arrow function (ES6)
// const showMessage = () => {
//   console.log("Xin chào anh em");
// };
// showMessage();

const sum = (a, b) => a + b;
console.log(sum(10, 20));
