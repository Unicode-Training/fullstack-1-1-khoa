const password = "Hoangan#123";
//Kiểm tra độ mạnh yếu mật khẩu
/*
- >= 8 ký tự
- Có ít nhất 1 chữ hoa
- Có ít nhất 1 chữ thường
- Có ít nhất 1 số
- Có ít nhất 1 ký tự đặc biệt: !@#$%^&*()
*/

//char >= 'A' && char <= 'Z'
let checkLength = false;
let checkUpperCase = false;
let checkLowerCase = false;
let checkNumber = false;
let checkSpecial = false;
if (password.length >= 8) {
  checkLength = true;
  const symbol = `!@#$%^&*()`;
  for (let i = 0; i < password.length; i++) {
    const char = password.charAt(i);
    const charCode = password.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      checkUpperCase = true;
    }
    if (charCode >= 97 && charCode <= 122) {
      checkLowerCase = true;
    }
    if (charCode >= 48 && charCode <= 57) {
      checkNumber = true;
    }
    if (symbol.includes(char)) {
      checkSpecial = true;
    }
  }
}
if (
  checkLength &&
  checkUpperCase &&
  checkLowerCase &&
  checkNumber &&
  checkSpecial
) {
  console.log("Mật khẩu mạnh");
} else {
  console.log("Mật khẩu yếu");
}
