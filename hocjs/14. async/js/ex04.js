//Async function
// - Luôn trả về 1 promise
//Await keyword
// - Resolve 1 promise
// - Chờ khi nào promise trả về kết quả --> Các lệnh bên dưới nó mới chạy tiếp
// - Chỉ hoạt động ở async function

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Kết quả");
//     reject("Networking Error");
//   }, 2000);
// });
// const something = async () => {
//   try {
//     const data = await myPromise;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
//   console.log("Lệnh 2");
//   console.log("Lệnh 3");
// };
// something();

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
// const getTotal = async () => {
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const user = await getUser(ids[i]);
//     total += user.salary;
//   }
//   console.log(total);
// };
// getTotal();

const myPromise = new Promise((resolve) => {
  const data = {
    params: new Promise((resolve) => {
      resolve({ id: 10 });
    }),
  };
  resolve(data);
});
const displayParams = async () => {
  //Sử dụng await lấy ra id
  const params = await myPromise;
  const idObj = await params.params;
  console.log(idObj.id);
};
displayParams();
