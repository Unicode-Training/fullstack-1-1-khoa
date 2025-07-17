//Ép kiểu: Chuyển kiểu dữ liệu này sang kiểu dữ liệu khác

//1. Chuyển kiểu bất kỳ sang chuỗi
// let a = 10;
// // a = a + "";
// a = a.toString();
// console.log(typeof a);

// let isCheck = true;
// isCheck = isCheck + "";
// console.log(isCheck, typeof isCheck);

// let users = ["Item 1", "Item 2"];
// users = users + "";
// console.log(users, typeof users);

//Ví dụ: Có 1 số, cần loại bỏ hàng đơn vị
// let price = 12000;
// price = price + "";
// price = price.slice(0, price.length - 1);
// console.log(price);

//2. Chuyển kiểu dữ liệu bất kỳ sang số
// let fullname = "10";
// // fullname = Number(fullname);
// fullname = +fullname;
// console.log(fullname, typeof fullname);

// let isChecked = false;
// isChecked = +isChecked;
// console.log(isChecked, typeof isChecked);

// let a = undefined;
// a = +a;
// console.log(a, typeof a);

// let users = [1];
// users = +users;
// console.log(users, typeof users);

//Không ép kiểu --> Kết quả tính toán có thể không chính xác
// let a = "10";
// let b = 10;
// let c = +a + +b;
// console.log(c);

//3. Ép các kiểu dữ liệu sang boolean
// let a = -1;
// a = Boolean(a);
// console.log(a, typeof a);

//Các giá trị sau: "", NaN, undefined, null, 0 --> Chuyển thành false. Còn lại là true
