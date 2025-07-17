//while loop: Không biết trước số lần, dựa vào biểu thức đúng sai để quyết định lặp hay không?
// Vòng lặp dễ bị treo nếu không để ý đến việc thay đổi biểu thức lặp
/*
while (dieu kien) {
    Logic
    Logic thay đổi điều kiện
}

do {
    Logic
    Logic thay đổi điều kiện
} while (dieukien)
*/
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//Ví dụ: Cho trước 1 số nguyên n, lấy số nguyên đó chia cho 2. Tìm số lần mà số nguyên đó có thể chia hết cho 2
// n = 1000 --> 500 --> 250 --> 125
// let n = 1000;
// let count = 0;
// while (n % 2 === 0) {
//   count++;
//   n = n / 2;
// }
// console.log(count);

//Bài tập: Đảo ngược số nguyên n (Không dùng xử lý chuỗi)
let n = 56853; //54321
let result = 0;
while (n !== 0) {
  const temp = n % 10;
  result = result * 10 + temp;
  n = (n - temp) / 10;
}
console.log(result);
