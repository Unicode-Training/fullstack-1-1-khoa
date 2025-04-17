console.log(Array.prototype);

// const users = ["User 1", "User 2", "User 3", "User 4"];

//1. length --> Lấy độ dài của mảng
// console.log(users.length);

// users.length = 3; //Lấy 3 phần tử đầu
// console.log(users);

//2. at(index) --> Lấy phần tử theo index, tương tenbien[index]
// console.log(users.at(1));

//3. fill(value) --> Thay thế các phần tử thành 1 giá trị (Thay đổi mảng ban đầu)
// console.log(users.fill("An"));

//4. concat(array1, array2,...) --> Nối các mảng thành 1 (Không thay đổi mảng ban đầu)
// const arr1 = [1, 2, 3];
// const arr2 = ["A", "B", "C"];
// const newArr = users.concat(arr1, arr2);
// console.log(newArr);

//5. slice(start, end): Cắt mảng thành 1 mảng mới từ vị trí index đến end-1
// console.log(users.slice(0, 2));
// console.log(users.slice(2));
// console.log(users.slice(-2));

//6. indexOf(value) --> Tìm index đầu tiên có giá trị khớp với value, nếu không tìm thấy trả về -1
// console.log(users.indexOf("User 2"));

//7. lastIndexOf(value) --> Tìm index cuối cùng có giá khớp với value, nếu không tìm thấy trả về -1

//8. includes(value) --> Tìm value khớp với phần tử trong mảng và trả về true/false
// console.log(users.includes("User 2"));

//9. join(separator) --> Nối các phần tử mảng thành chuỗi và có ký tự ngăn cách (separator)
// console.log(users.join("-"));

//10. push() --> Thêm phần tử mới vào cuối mảng (Thay đổi giá trị ban đầu)
// const count = users.push("A", "B", "C");
// console.log(users);
// console.log(count);

//11.unshift() --> Thêm phần tử mới vào đầu mảng (Thay đổi giá trị ban đầu)
// const count = users.unshift("A", "B", "C");
// console.log(users);
// console.log(count);

//12. pop() --> Xóa phần tử cuối mảng và trả về giá trị phần tử vừa xóa (Thay đổi mảng ban đầu)
// const value = users.pop();
// console.log(value);
// console.log(users);

//13. shift() --> Xóa phần tử đầu mảng và trả về giá trị phần tử vừa xóa (Thay đổi mảng ban đầu)
// const value = users.shift();
// console.log(value);
// console.log(users);

//14. sort() --> Sắp xếp mảng theo thứ tự tăng dần
// const customers = ["Hoàng", "An", "Tùng", "Khoa"];
// customers.sort();
// console.log(customers);

/*
sort nâng cao
sort(callback)

function callback(a, b) {
    //a: Phần tử sau
    //b: Phần tử trước
    Nếu hàm này trả về giá trị âm: Tự động đổi chỗ giá trị a, b
}
*/

// const number = [1, 2, 10, 100, 8];
// number.sort(function (a, b) {
//   if (b < a) {
//     return -100000;
//   }
// });
// console.log(number);

//15. reverse(): Đảo ngược mảng (Thay đổi mảng ban đầu)
// users.reverse();
// console.log(users);

//16. splice(index, count) --> Xóa count phần tử từ vị trí index
// users.splice(1, 2);
// console.log(users);

// const number = [5, 9, -1, 2, 7];
//Tìm số lớn thứ 2 trong mảng
// let max = number[0];
// for (let i = 0; i < number.length; i++) {
//   const value = number[i];
//   if (max < value) {
//     max = value;
//   }
// }
// console.log(max);

// const numberClone = number.slice(0);
// numberClone.sort(function (a, b) {
//   if (b < a) {
//     return -1;
//   }
// });
// const max = numberClone[1];
// console.log(max);

const customers = [
  "Tạ Hoàng An",
  "Nguyễn Văn Hoàng",
  "Phan Tuấn Anh",
  "Nguyễn Xuân Khoa",
];
//Sắp xếp mảng customers theo tên có thứ tự tăng dần
/*
[
    "Tạ Hoàng An",
    "Phan Tuấn Anh",
    "Nguyễn Văn Hoàng",
    "Nguyễn Xuân Khoa"
]
*/

// const getFirstName = function (fullname) {
//   return fullname.split(" ").slice(-1).join();
// };

// customers.sort(function (a, b) {
//   const firstNameA = getFirstName(a);
//   const firstNameB = getFirstName(b);
//   if (firstNameB > firstNameA) {
//     return -1;
//   }
// });
// console.log(customers);

// const arr1 = [5, 6, 1, 3, 9];
// const arr2 = [7, 2, 3, 6];

// //Tìm giao giữa 2 mảng: [6,3] hoặc [3,6]
// const newArr = [];
// for (let i = 0; i < arr1.length; i++) {
//   const value = arr1[i];
//   if (arr2.includes(value)) {
//     newArr.push(value);
//   }
// }
// console.log(newArr);

//Làm phẳng mảng
let a = 20;
const arr = [1, [2], 3, [4, 5], [[6], [[[[7]]]]]];
console.log(arr);

//Phẳng: [1,2,3,4,5]

//Kiểm tra 1 biến có phải mảng không? Array.isArray(bien)
// console.log(Array.isArray(a));

const flatArr = function (arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!Array.isArray(value)) {
      newArr.push(value);
    } else {
      const result = flatArr(value);
      if (result.length) {
        for (let j = 0; j < result.length; j++) {
          newArr.push(result[j]);
        }
      }
    }
  }
  return newArr;
};
console.log(flatArr(arr));
