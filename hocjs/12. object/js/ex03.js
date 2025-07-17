//Từ khóa this (context = ngữ cảnh): Object tại vị trí được gọi (hàm)
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getInfo: function () {
//     return {
//       age: 32,
//       getAge: function () {
//         console.log(this);
//       },
//       getEmail: () => {
//         console.log(this);
//       },
//     };
//   },
// };
// user.getInfo().getAge();
// user.getInfo().getEmail();

//bind, call, apply (3 phương thức của function)
// const a = {
//   name: "Hoàng An",
//   getEmail: function (value1, value2) {
//     console.log(this);
//     console.log(`value1`, value1);
//     console.log(`value2`, value2);
//   },
// };
// const b = {
//   email: "hoangan.web@gmail.com",
// };
//bind: Thay đổi this của 1 hàm (Vẫn trả về 1 hàm chứ không thực thi)
// const getEmail = a.getEmail.bind(b);
// getEmail();
// a.getEmail.bind(b)();

//call: Thay đổi this của 1 hàm và thực thi hàm (Có thể truyền tham số)

//apply: Giống call, chỉ khác nó sẽ nhận đối số ở dạng mảng
// a.getEmail.call(b, "An");
// const args = ["An", "Khoa"];
// a.getEmail.apply(b, args);

//Object Prototype: Kế thừa thuộc tính và phương thức
//Lưu ý: Object Prototype xuất hiện cả trong các hàm tạo khác (Array, String, Number,...)
// Object.prototype.message = "Unicode";
// const a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const b = {
//   age: 32,
//   address: "Hà Nội",
// };
// console.log(a.message);
// console.log(b.message);

// const users = [];
// console.log(users);

// console.log(users.message);

// const fullname = "Hoàng An";
// console.log(fullname.message);

// const age = 32;
// console.log(age.message);

// const check = false;
// console.log(check.message);

// Array.prototype.getLast = function () {
//   return this[this.length - 1];
// };
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr.getLast());
