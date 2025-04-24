//Các vòng lặp xử lý mảng
console.log(Array.prototype);
//1. forEach
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.forEach((value, index) => {
//   console.log(value, index);
// });

//2. map
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const newArr = myArr.map((value, index) => {
//   console.log(value, index);
//   return `${index} - ${value}`;
// });
// console.log(newArr);

//3. filter
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// const newArr = myArr.filter((value, index) => {
//   console.log(value, index);
//   //Nếu về return về truthy --> Lấy phần tử tương ứng để thêm vào mảng mới
//   return index % 2 === 0;
// });
// console.log(newArr);

//Bài tập 1: Tính tổng các số chẵn trong mảng dưới (Dùng vòng lặp forEach)
// const numbers = [5, 2, 9, 1, 0, 8];
// let total = 0;
// numbers.forEach((value) => {
//   if (value % 2 === 0) {
//     total += value;
//   }
// });
// console.log(total);

//Bài tập 2:
// const users = [
//   "Tạ Hoàng An",
//   "Nguyễn Văn Quân",
//   "Phạm Văn Tuấn",
//   "Phạm Tuấn Anh",
// ];
// let keyword = "văn";
// //Dùng vòng lặp filters, tìm kiếm danh sách users theo từ khóa
// /*
// Output: ['Tạ Hoàng An', 'Phạm Tuấn Anh']
// */
// const newArr = users.filter((value) => {
//   return value.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(newArr);

//Bài tập 3:
// const customers = [
//   ["User 1", "user1@gmail.com", 28],
//   ["User 2", "user2@gmail.com", 29],
//   ["User 3", "user3@gmail.com", 30],
// ];
//Sử dụng map để tăng 2 tuổi tuổi của user có email là user2@gmail.com

/*
[
  ["User 1", "user1@gmail.com", 28],
  ["User 2", "user2@gmail.com", 31],
  ["User 3", "user2@gmail.com", 30],
]
*/
// const newArr = customers.map((customer) => {
//   if (customer.includes("user2@gmail.com")) {
//     customer[2] += 2;
//   }
//   return customer;
// });
// console.log(newArr);

//4. find
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.find((value) => {
//   return value % 2 === 0;
// });
// console.log(result);

//5. findLast

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.findLast((value) => {
//   return value % 2 === 0;
// });
// console.log(result);

//6. findIndex
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.findIndex((value) => {
//   return value % 2 === 0;
// });
// console.log(result);

//7. findLastIndex
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.findLastIndex((value) => {
//   return value % 2 === 0;
// });
// console.log(result);

//Bài tập: Xóa số chẵn đầu tiên khỏi mảng numbers
// const numbers = [1, 2, 3, 4, 5, 6];
// const index = numbers.findIndex((value) => {
//   return value % 2 === 0;
// });

// if (index !== -1) {
//   numbers.splice(index, 1);
// }
// console.log(numbers);

//8. some
// const numbers = [1, 2, 3, 5, 7, 9];
// const result = numbers.some((value) => {
//   return value % 2 === 0;
// });
// console.log(result);

//9. every
// const numbers = [1, 3, 5, 7, 9];
// const result = numbers.every((value) => {
//   return value % 2 !== 0;
// });
// console.log(result);

//10. reduce
// const numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);
// const result = numbers.reduce((prev, current, index) => {
//   console.log(`prev`, prev, `current`, current, `index`, index);
//   return current;
// }, 0);
// console.log(result);

// const result = numbers.reduce((prev, current) => {
//   return prev + current;
// }, 0);
// console.log(result);

//Bài tập: Tìm max trong mảng (Dùng reduce)
// const numbers = [5, 2, 3, 9, -1];
// const result = numbers.reduce((prev, current) => {
//   //prev = max
//   if (prev < current) {
//     return current;
//   }
//   return prev;
// });
// console.log(result);

// Bài tập: Xóa bỏ phần tử trùng nhau trong mảng
// const users = ["User 1", "User 2", "User 3", "User 2", "User 4", "User 1"];
// const newUsers = users.reduce((prev, current) => {
//   if (!prev.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);

// console.log(newUsers);
