/*
Câu lệnh rẽ nhánh

1. Câu lệnh if thiếu

if (condition) {
    code
}

2. Câu lệnh if else đầy đủ
if (condition) {
    code true
} else {
    code false
}

3. Câu lệnh if else nhiều nhánh
if (condition1) {
    code1
} else if (condition2) {
    code2
} else if (condition3) {
    code3
} else {
    code4
}

4. Câu lệnh if else lồng nhau
if (condition1) {
    if (condition2) {
        code
    } else {
        code 
    }
} else {
    code
}
*/

//Bài tập: Tính lương thực nhận của 1 nhân viên sau khi trừ thuế
/*
- Nếu lương <= 5000000 --> 0%
- Nếu lương > 5000000 && lương <= 10000000 --> 3%
- Còn lại: 5%
*/
let salary = -11000000; //Lương cơ bản
let income; //Lương thực nhận
let tax;
if (salary > 0) {
  if (salary <= 5000000) {
    tax = 0;
  } else if (salary <= 10000000) {
    tax = 3;
  } else {
    tax = 5;
  }
  income = salary - (salary * tax) / 100;
  console.log(income);
} else {
  console.log("Không hợp lệ");
}
