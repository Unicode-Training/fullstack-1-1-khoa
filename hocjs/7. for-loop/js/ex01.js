//Vòng lặp: Cú pháp của lập trình cho phép đoạn chương trình con sẽ lặp đi lặp lại theo số lần nào đó
// - Lặp với số lần xác định trước: for
// - Lặp với số lần không xác định: while, do while

/*
for (giatrikhoitao; dieukienchay; buocnhay) {
    code
}
*/
// for (let i = 1; i <= 10; i++) {
//   console.log("Lần lặp thứ: " + i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log("Lần lặp thứ: " + i);
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     for (let k = 1; k <= 5; k++) {
//       console.log(`i = ${i}, j = ${j}, k = ${k}`);
//     }
//   }
// }

//Từ khóa break, continue
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log("Lần lặp thứ: " + i);
//   //   if (i === 5) {
//   //     break;
//   //   }
// }

//Bài 1: Tính giá trị biểu thức
// S = 1 + 2 + ... + n
// let n = 10;
// let s = 0;
// for (let i = 1; i <= n; i++) {
//   //   s = s + i;
//   s += i; //s = s + i
// }
// console.log(s);

//Bài 2: Tính n! = 1 * 2 * .. *n
// let n = 5;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//   result *= i;
// }
// console.log(result);

//Bài 3: Tính giá trị biểu thức
//S = 1 + 1*2 + 1*2*3 + .. + 1*2*3*...*n
// let n = 5;
// let tmp = 1;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//   tmp *= i;
//   total += tmp;
// }
// console.log(total);

//Bài 4: Kiểm tra 1 số xem có phải số nguyên tố không?
/*
- Số nguyên --> Kiểm tra
- > 1
- Chỉ chia hết cho 1 và chính nó
*/
// let n = 6;
// let isPrime = true; //giả sử là đúng, tìm trường hợp sai
// if (n % 1 !== 0 || n <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }
// if (isPrime) {
//   console.log(`${n} la so nguyen to`);
// } else {
//   console.log(`${n} khong la so nguyen to`);
// }

//Tam giác *
/*

*
* *
* * *
* * * *
* * * * *

*/

// let n = 10;
// let output = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     output += "* ";
//   }
//   output += `<br/>`;
// }
// document.body.innerHTML = output;

//Bàn cờ vua
let rows = 8;
let columns = 8;
//Vẽ bàn cờ vua theo số hàng và số cột như trên
let html = `<table width="100%" border="1" cellspacing="0" cellpadding="0">`;
//Logic vòng lặp dựa vào rows, columns để tạo ra mã html
for (let row = 1; row <= rows; row++) {
  html += `<tr>`;
  for (let col = 1; col <= columns; col++) {
    const total = col + row;
    const className = total % 2 !== 0 ? `class="black"` : "";
    html += `<td ${className}></td>`;
  }
  html += `</tr>`;
}
html += `</table>`;
document.body.innerHTML = html;
