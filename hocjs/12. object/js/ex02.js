// const a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
// };
//Object.values(): Trả về mảng chứa các value của 1 object
// console.log(Object.values(a));

//Object.entries(): Trả về mảng chứa các key và value của 1 object
// console.log(Object.entries(a));

//Object.fromEntries(): Chuyển mảng entries về object
// const myArr = [
//   ["name", "Hoàng An"],
//   ["email", "hoangan.web@gmail.com"],
// ];
// console.log(myArr);
// console.log(Object.fromEntries(myArr));

//Object.assign(target, source1, source2,....): Nối các object source1, source2,...vào object target và trả về object mới
// const obj1 = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const obj2 = {
//   age: 32,
//   address: "Hà Nội",
// };
// const obj3 = {
//   phone: "0123456789",
// };
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);
// console.log(obj1);

//So sánh 2 object

//Các bước thực hiện
//1. Lấy số lượng key của từng object. So sánh nếu số lượng key khác nhau --> 2 object không bằng nhau
//2. Lấy giá trị từng key của object 1 và so sánh với giá trị từng key của object 2 (So sánh các key tương ứng)
// const isObject = (obj) => {
//   return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
// };
// const compareObject = (obj1, obj2) => {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }
//   for (let key in obj1) {
//     const value1 = obj1[key];
//     const value2 = obj2[key];
//     //Kiểm tra value1 và value2 có phải object không?
//     if (isObject(value1) && isObject(value2)) {
//       return compareObject(value1, value2);
//     }
//     if (value1 !== value2) {
//       return false;
//     }
//   }
//   return true;
// };
// const x = {
//   name: "Hoàng An",
//   age: 32,
//   meta: {
//     value: "Unicode",
//   },
// };
// const y = {
//   name: "Hoàng An",
//   age: 32,
//   meta: {
//     value: "Unicode 1",
//   },
// };
// const result = compareObject(x, y);
// console.log(result);

//Sao chép object
const a = {
  name: "Hoàng An",
  age: 32,
  meta: {
    value: "Unicode",
  },
};
// const b = a;
// const b = { ...a }; //spread operator (shallow copy)
// const b = Object.assign({}, a); //shallow copy
const json = JSON.stringify(a);
const b = JSON.parse(json);
b.name = "An Unicode";
b.meta.value = "Ahihi";
console.log(a);
console.log(b);
