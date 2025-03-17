//Toán tử: Nối các toán hạng
// biểu thức = toán hạng + toán tử
//Ví dụ: s = a + b * c;

//1. Toán tử số học
// +, -, *, /, %, **
// ++, --
// let a = 10;
// let b = "a";
// let c = a / b;
// console.log(c);

// let a = 1;
// a++;
// a--;
// console.log(a);

// let a = 1;
// let s = 0;
// s = a++;
// console.log(a);
// console.log(s);

// let count = 1;
// let total = count++ + ++count + 5 + count++ + ++count;
// // 1 + 3 + 5 + 3 + 5
// console.log(total);

//2. Toán tử so sánh (Lúc nào cũng trả về boolean)
// >, >=, <, <=, ==, ===, !=, !==
// let a = 30;
// let b = 20;
// let c = a > b;
// console.log(c);

// let a = "Anb";
// let b = "Anh";
// console.log(a < b);

// let a = "an";
// let b = "An";
// console.log(a > b);

//Tuyệt đối không so sánh với null, undefined, boolean

// let a = true;
// let b = 0;
// console.log(a == b);

//3. Toán tử luận lý
//&&, ||, !
// let a = 16;
// let check = a >= 5 || a <= 15;
// check = !check;
// console.log(check);

//Truthy --> Trong ngữ cảnh phải sử dụng boolean mà tự động về true gọi là truthy
//Falsy --> Trong ngữ cảnh phải sử dụng boolean mà tự động về false gọi falsy

// let a = 10;
// let b = 20;
// let check = !a && b <= 30;
// console.log(check);

//Cách hoạt động của toán tử &&: Tìm falsy, nếu tìm thấy falsy sẽ dừng lại và kết quả falsy, nếu không tìm thấy trả về kết quả biểu thức cuối cùng

// let a = 10;
// let b = -1;
// let c = 10;
// let result = a && b && c < 10 && "An";
// console.log(result);

//Cách hoạt động của toán tử ||: Tìm truthy, nếu tìm thấy truthy sẽ dừng lại và trả về kết quả truthy, nếu không tìm thấy sẽ trả về kết quả cuối cùng
// let a = 0;
// let b = 20;
// let c = null;
// let result = a || b || c;
// console.log(result);

//4. Toán tử nullish coalescing (??)
// let a = 1;
// let b = a ?? "Ok chưa?";
// console.log(b);

//5. Toán tử 3 ngôi (?:)
// let a = 10;
// let b = a >= 5 ? 20 : 0;
// console.log(b);

//Bài tập: Viết lại logic toán tử nullish bằng cách sử dụng toán tử 3 ngôi

// let a = 1;
// // let b = a ?? "Ok chưa?";
// let b = a === undefined || a === null ? "Ok chưa?" : a;
// console.log(b);
