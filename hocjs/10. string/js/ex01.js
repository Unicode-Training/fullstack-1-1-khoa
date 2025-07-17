//String --> Kiểu dữ liệu nguyên thủy
//Lưu ý: Trong các kiểu dữ liệu nguyên thủy --> Bọc ra ngoài 1 object để chứa các phương thức, thuộc tính xử lý của kiểu dữ liệu tương úng (Trừ null, undefined)
//Mỗi kiểu dữ liệu, sẽ có 1 hàm tạo (Constructor)
//Trong string, constructor là String
//Khai báo
// let fullname = "Hoàng An"; //string
// console.log(fullname, typeof fullname);

console.log(String.prototype);

let str = "Học Fullstack không Fullstack khó";

//1. length --> Lấy số lượng ký tự của chuỗi

//2. charAt(index) --> Lấy ký tự của chuỗi theo index (index từ 0)
// console.log(str.charAt(1));

//3. charAtCode(index) --> Lấy mã Ascii cua ký tự theo index
// console.log(str.charCodeAt(0));

//4. indexOf(value) --> Lấy index đầu tiên của value trong chuỗi (Nếu không tìm thấy trả về -1)
// console.log(str.indexOf("Fullstack"));

//5. lastIndexOf(value) --> Lấy index cuối cùng của value trong chuỗi (Nếu không tìm thấy trả về -1)
// console.log(str.lastIndexOf("Fullstack"));

//6. includes(value) --> Kiểm tra xem value có trong chuỗi không, trả về true/false
// console.log(str.includes("Fullstack"));

//7. slice(indexStart, indexEnd) --> Cắt chuỗi từ indexStart đến indexEnd-1
// console.log(str.slice(2, 5));
// console.log(str.slice(2));
// console.log(str.slice(-5));

//8. replace(searchValue, replaceValue) --> Tìm searchValue đầu tiên và thay thế thành replaceValue
// console.log(str.replace("Fullstack", "Unicode"));

//9. replaceAll(searchValue, replaceValue) --> Tìm tất cả searchValue và thay thế thành replaceValue
// console.log(str.replaceAll("Fullstack", "Unicode"));

//10. split(separator) --> Tách chuỗi thành mảng dựa theo separator
// console.log(str.split(" "));

//11. trim() --> Loại bỏ khoảng trắng đầu và cuối chuỗi

//12. trimStart() --> Loại bỏ khoảng trắng đầu chuỗi

//13. trimEnd() --> Loại bỏ khoảng trắng cuối chuỗi
// let str2 = " Hoàng An  ";
// console.log(str2);
// console.log(str2.trim());

//14. toLowerCase() --> Chuyển các ký tự thành chữ thường
// console.log(str.toLowerCase());

//15. toUpperCase() --> Chuyển các ký tự thành chữ hoa
// console.log(str.toUpperCase());

//16. repeat(n) --> Lặp chuỗi theo số lần nhất định
// console.log(str.repeat(3));

//17. match(pattern) --> Cắt chuỗi theo pattern (Biểu thức chính quy)
// let content = `So dien thoai cua toi la 0394822896 va so 0388875179`;
// let pattern = /0\d{9}/g;
// let phone = content.match(pattern);
// console.log(phone);
