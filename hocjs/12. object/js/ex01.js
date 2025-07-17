//Đối tượng: Mô tả đặc điểm cụ thể của 1 sự vật, hiện tượng
//Ví dụ: Thông tin chi tiết của 1 người dùng, thông tin chi tiết của sản phẩm,..

//Khai báo đối tượng (object)
const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 32,
  //key: value,
};

//Truy cập vào 1 key trong object
// console.log(user.name);
// console.log(user["name"]);
// const key = "email";
// console.log(user.key);

//Thêm key mới cho object
user.address = "Hà Nội";
user["phone"] = "01234";

//Cập nhật: Gán lại giá trị cho key đã tồn tại trong object

//Xóa key khỏi object
// delete user.address;
console.log(user);

//Duyệt từng key trong object
// for (let key in user) {
//   console.log(key, user[key]);
// }

// const keys = Object.keys(user);
// keys.forEach((key) => {
//   console.log(key, user[key]);
// });

//Bài tập:
// const obj1 = { name: "Hoàng An", email: "hoangan.web@gmail.com" };
// const obj2 = { age: 32, address: "Hà Nội" };
// //Nối 2 object thành 1 object
// const obj3 = {};
// for (let key in obj1) {
//   obj3[key] = obj1[key];
// }
// for (let key in obj2) {
//   obj3[key] = obj2[key];
// }
// console.log(obj3);

const queryString = "keyword=Hoàng+An&status=active&page=1";
//Chuyển query string thành object
/*
{
  keyword: "Hoàng An",
  status: "active",
  page: "1"
}
*/
const query = {};
const queryStringArr = queryString.split("&");
queryStringArr.forEach((item) => {
  const itemArr = item.split("=");
  console.log(itemArr);

  //   itemArr[1] = itemArr[1].replaceAll("+", " ");
  //   query[itemArr[0]] = itemArr[1];
});
console.log(query);
