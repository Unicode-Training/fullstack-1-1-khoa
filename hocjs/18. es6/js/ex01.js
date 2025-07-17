//Destructuring Assignment: Phá vỡ cấu trúc của object, array để truy cập vào các thuộc tính, index và gán thành các biến riêng biệt
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
//   address: "Hồ Chí Minh",
//   position: "Teacher",
// };
// // const name = user.name;
// // const email = user.email;
// const { name: fullname, email, address = "Hà Nội", ...rest } = user;

// console.log(fullname, email);
// console.log(address);
// console.log(rest);

// const myArr = ["Hoàng An", "hoangan.web@gmail.com", 33, "Hà Nội", "Teacher"];
// const [fullname, email, , address, ...rest] = myArr;
// console.log(fullname, email);
// console.log(address);
// console.log(rest);

//Spread Operator
// const info = {
//   address: "Hà Nội",
// };
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   ...info,
// };
// console.log(user);

// const init = [1, 2, 3];
// const data = ["a", "b", ...init, "c"];
// console.log(data);
