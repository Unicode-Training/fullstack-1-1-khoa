//DOM = Document Object Model
//Mô hình hóa tài liệu HTML dưới dạng đối tượng
/*
Thay đổi giao diện của trang web (Thay đổi html) dựa vào hành động nào đó từ phía người dùng (Event)

Server --> Trả về HTML --> Trình duyệt mô hình hóa (DOM) --> Hiển thị cho người dùng
*/

//DOM Element --> Sử dụng các phương thức của đối tượng document để truy cập vào các thẻ html và trả về object

//1. Truy cập vào phần tử thông qua id (Trả về phần tử đầu tiên)
// const titleEl = document.getElementById("title");
// console.dir(titleEl);
// console.log(titleEl.innerText);
// titleEl.innerText = `ahihi`;

//2. Truy cập vào phần tử thông qua class (Trả về 1 danh sách)
// const titleList = document.getElementsByClassName("sub-title");
// console.log(titleList);
// titleList[1].innerText = "Ahihi";

//3. Truy cập vào phần tử thông qua tagname (Trả về 1 danh sách)
// const titleList = document.getElementsByTagName("h2");
// console.log(titleList);

//4. Truy cập thông qua css selector (Truy cập phần tử đầu tiên)
// const title = document.querySelector(".sub-title");
// console.log(title);

//5. Truy cập thông qua css selector (Truy cập tất cả phần tử)
// const titleList = document.querySelectorAll(".sub-title");
// console.log(titleList);
