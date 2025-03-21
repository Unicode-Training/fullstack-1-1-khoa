//Câu lệnh rẽ nhánh switch case
/*
- Chỉ chấp nhận so sánh ===
- Phù hợp với nhiều nhánh và nhiều điều kiện hoặc
*/
const action = "edit";
switch (action) {
  case "create":
  case "insert":
  case "add":
    console.log("Thêm");
    break;
  case "update":
  case "edit":
    console.log("Sửa");
    break;
  case "delete":
  case "remove":
  case "destroy":
    console.log("Xóa");
    break;
  default:
    console.log("Danh sách");
    break;
}

//Bài tập: Chuyển đoạn code trên thành if else
