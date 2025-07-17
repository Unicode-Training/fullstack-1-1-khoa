//Các kiểu dữ liệu trong js
/*
1. number --> Số
2. string --> Chuỗi
3. boolean --> Logic (true, false)
4. null
5. undefined
6. symbol
7. bigint --> Số lớn mà number không chứa được
==> Kiểu dữ liệu nguyên thủy

8. object: array, object, function,...
==> Kiểu dữ liệu tham chiếu
*/

//Kiểm tra 1 biến thuộc kiểu dữ liệu nào, dùng từ khóa typeof

//number
let a = 10;
console.log(a, typeof a);

//string
let fullname = "Hoàng An";
console.log(fullname, typeof fullname);

//boolean
let isCheck = true;
console.log(isCheck, typeof isCheck);

//null
let b = null;
console.log(b, b == null);

//undefined
let c;
console.log(c, typeof c);

//symbol
let d = Symbol("Unicode");
console.log(d, typeof d);

//bigInt
// let price = 12000n;
let price = BigInt(12000);
console.log(price, typeof price);

//object
const user = {
  name: "hoàng an",
  email: "hoangan.web@gmail.com",
};
console.log(user, typeof user);

const users = ["User 1", "User 2"];
console.log(users, typeof users);

function hello() {}
console.log(typeof hello);
