//Function Constructor: Hàm đặc biệt cho phép định nghĩa cấu trúc của 1 object (Giống 1 bản thiết kế)
// const User = function (name, email) {
//   //Thuộc tính (non-static)
//   this.name = name;
//   this.email = email;
//   this.text = "Hà Nội";

//   //Phương thức (none-static)
//   this.getName = function () {
//     return this.name;
//   };
// };

//Phương thức tĩnh, thuộc tính tĩnh: Không bị phụ thuộc vào đối tượng mà sẽ truy cập trực tiếp qua constructor
//this trong phương thức static chính là hàm tạo (constructor)
//this trong phương thức non-static chính là object khởi tạo
// User.message = "Unicode Academy";
// User.getMessage = function () {
//   return this.message;
// };

// User.getText = function () {
//   //khởi tạo object (instance) từ constructor (chính là this)
//   const instance = new this();
//   console.log(instance.text);
// };
// User.getText();
//Khởi tạo đối tượng từ constructor (Dùng từ khóa new)
// const user1 = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user1);
// console.log(user1.getName());
// console.log(User.message);
// console.log(User.getMessage());

// const user2 = new User("Khoa", "khoa@gmail.com");
// console.log(user2);

// const Calc = function () {};
// Calc.value = 0;
// Calc.set = function (value) {
//   this.value = value;
//   return this;
// };
// Calc.add = function (value) {
//   this.value += value;
//   return this;
// };
// Calc.substract = function (value) {
//   this.value -= value;
//   return this;
// };
// Calc.multiply = function (value) {
//   this.value *= value;
//   return this;
// };
// Calc.division = function (value) {
//   this.value /= value;
//   return this;
// };
// Calc.result = function () {
//   console.log(this.value);
//   this.value = 0; //Reset value
// };
// Calc.add(10).substract(5).multiply(2).division(3).result();
// Calc.add(10).substract(5).multiply(2).division(3).result(); // (0 + 10 - 5)  * 2 / 3
// Calc.add(10).substract(5).multiply(2).division(3).result();
// Calc.set(1).multiply(2).substract(5).result(); //1 x 2 - 5

const Person = function (name, email, gender) {
  this.name = name;
  this.email = email;
  this.gender = gender;
};
const Boy = function (name, email, age) {
  //Kế thừa toàn bộ thuộc tính của Person
  //Trong constructor Boy có các phương thức, thuộc tính khác
  Person.call(this, name, email, "male");
  this.age = age;
};

const Girl = function (name, email, address) {
  Person.call(this, name, email, "female");
  this.address = address;
};

// const boy1 = new Boy("Hoàng An", "hoangan.web@gmail.com", 32);
// console.log(boy1);

// const boy2 = new Boy("Khoa", "khoa@gmail.com", 24);
// console.log(boy2);

const girl1 = new Girl("Anh", "anh@gmail.com", "Hà Nội");
console.log(girl1);
