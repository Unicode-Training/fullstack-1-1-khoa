/*
- Array là Object (Đối tượng)
- Thể hiện 1 danh sách
+ Phần tử (Element)
+ Chỉ số (Index)
*/
const myArr = []; //Khai báo mảng

//Lấy độ dài của mảng
// console.log(myArr.length);

//Thêm phần tử vào mảng
myArr[0] = "Hoàng An";
myArr[1] = "Unicode";
myArr[myArr.length] = "Khoa";
myArr[myArr.length] = "Tuấn";

//Sửa phần tử trong mảng (Xác định index)
myArr[1] = "Unicode Academy";

//Lấy phần tử theo index
// console.log(myArr[2]);

//Duyệt qua các phần tử
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
// }
// for (let index in myArr) {
//   console.log(myArr[index]);
// }
// for (let value of myArr) {
//   console.log(value);
// }

//Xóa phần tử trong mảng theo index (Tạo ra 1 mảng mới không có phần tử cần xóa)
// const newArr = [];
// const indexDelete = 1;
// for (let index in myArr) {
//   index = +index;
//   //   if (index === indexDelete) {
//   //     continue;
//   //   }
//   //   newArr[newArr.length] = myArr[index];
//   if (index !== indexDelete) {
//     newArr[newArr.length] = myArr[index];
//   }
// }
// console.log(newArr);

console.log(myArr);
//Bài tập: Thêm 1 phần tử mới vào đầu mảng
const value = "Hello Array";
const newArr = [];
newArr[0] = value;
// for (let index in myArr) {
//   newArr[newArr.length] = myArr[index];
// }
newArr[1] = myArr[0];
newArr[2] = myArr[1];
console.log(newArr);
