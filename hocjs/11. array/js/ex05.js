//Kiểu dữ liệu tham chiếu (Làm việc dựa trên địa chỉ)
//Kiểu dữ liệu nguyên thủy (Chỉ làm việc dựa trên giá trị)

// const arr1 = [];
// const arr2 = [];
// const check = arr1 === arr2;
// console.log(check);

// const arr1 = ["An", 32];
// const arr2 = arr1;
// arr2[0] = "Khoa";
// console.log(`arr1`, arr1);
// console.log(`arr2`, arr2);

//So sánh array
//1. So sánh nông (So sánh cấp ngoài cùng)
//2. So sánh sâu (So sánh tất cả các cấp)
// const arr1 = ["An", "hoangan.web@gmail.com", [32], ["Khoa", [1]]];
// const arr2 = ["An", "hoangan.web@gmail.com", [32], ["Khoa", [1]]];
// const equalArray = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   const check = arr1.every((item, index) => {
//     if (!Array.isArray(item)) {
//       return item === arr2[index];
//     } else {
//       return equalArray(item, arr2[index]);
//     }
//   });
//   return check;
// };

// if (equalArray(arr1, arr2)) {
//   console.log("2 mảng giống nhau");
// } else {
//   console.log("2 mảng khác nhau");
// }

//Sao chép array sang địa chỉ mới
// const arr1 = ["An", "hoangan.web@gmail.com", 32];

//Sao chép nông (Shallow copy)
// const arr2 = [...arr1]; //spead operator
//Dùng các phương thức tạo mảng mới của array: slice, map, filter,...
// const arr2 = arr1.slice(0);
// arr2[0] = "an unicode";

// console.log(arr1);
// console.log(arr2);

const arr1 = ["An", "hoangan.web@gmail.com", [32]];
// const arr2 = arr1.slice(0);
//Chuyển mảng thành chuỗi json
//Chuyển json thành mảng
const json = JSON.stringify(arr1); //Chuyển mảng thành json
const arr2 = JSON.parse(json); //Chuyển json thành mảng
arr2[2][0] = 33;
console.log(arr1);
console.log(arr2);
