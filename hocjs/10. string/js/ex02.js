// let email = "contact@unicode.vn";
//Lấy username của email trên

// let fullname = "TẠ HOÀNG AN";
//Kiểm tra chuỗi trên có phải tất cả đều viết hoa không?

let fullname = "phạm văn     hiếu";

//Yêu cầu 1: Viết hoa ký tự đầu --> Tạ hoàng an
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
// console.log(fullname);

//Yêu cầu 2: Chuyển tất cả các ký tự đầu của mỗi từ: Tạ Hoàng An
for (let i = 0; i < fullname.length; i++) {
  let char = fullname.charAt(i);
  let charNext = fullname.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    let position = i + 1;
    fullname =
      fullname.slice(0, position) +
      fullname.charAt(position).toUpperCase() +
      fullname.slice(position + 1);
  }
}
console.log(fullname);
