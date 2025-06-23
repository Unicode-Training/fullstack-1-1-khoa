//Promise: Xử lý nhiều Promise cùng 1 lúc
// const getUser = (id) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const users = [
//         {
//           id: 1,
//           name: "User 1",
//           salary: 1000,
//         },
//         {
//           id: 2,
//           name: "User 2",
//           salary: 2000,
//         },
//         {
//           id: 3,
//           name: "User 3",
//           salary: 3000,
//         },
//       ];
//       const user = users.find((item) => item.id === id);
//       resolve(user);
//     }, Math.random() * 2000);
//   });
// };
// const ids = [1, 2, 3];
// const salaryPromise = new Promise((resolve) => {
//   let count = 0;
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const userId = ids[i];
//     getUser(userId).then((user) => {
//       total += user.salary;
//       count++;
//       if (count === ids.length) {
//         resolve(total);
//       }
//     });
//   }
// });
//In ra tổng salary của các users trong mảng ids
//Gợi ý: Tạo promise mới để chứa tổng salary
// salaryPromise.then((data) => {
//   console.log(data);
// });

//Promise.all(): Giải quyết các promise được cung cấp sau đó trả về 1 kết quả
// const promiseArr = ids.map((item) => getUser(item));
// Promise.all(promiseArr).then((data) => {
//   const total = data.reduce((total, user) => total + user.salary, 0);
//   console.log(total);
// });

//Error handling
console.log("Lệnh 1");
console.log("Lệnh 2");
try {
  //   abc();
  //   ahihi();
  let a = -1;
  if (a < 0) {
    throw new Error("a phải là số dương");
  }
} catch (error) {
  //   console.dir(error);
  document.body.innerHTML = error.message;
} finally {
  console.log("hoàn thành");
}
console.log("Lệnh 3");
