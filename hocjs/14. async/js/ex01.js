/*
Đồng bộ
- lệnh 1
- lệnh 2
- lệnh 3

Bất đồng bộ
- lệnh 1
- lệnh 2
- lệnh 3

Trong js có cả 2: đồng bộ và bất đồng bộ
*/

// alert("lệnh 1");
// console.log("Lệnh 2");

// setTimeout(() => {
//   console.log("Lệnh 1");
// }, 2000);
// console.log("Lệnh 2");

//Xử lý bất đồng bộ là gì?
// => Chuyển từ bất đồng bộ thành đồng bộ
// 1. Callback Function
// 2. Promise Object
// 3. Async, Await Function

// const getUser = (callback) => {
//   setTimeout(() => {
//     const users = ["User 1", "User 2", "User 3"];
//     if (typeof callback === "function") {
//       callback(users);
//     }
//   }, 2000);
// };
// const getProduct = (callback) => {
//   setTimeout(() => {
//     const users = ["Product 1", "Product 2", "Product 3"];
//     if (typeof callback === "function") {
//       callback(users);
//     }
//   }, 1500);
// };
// getUser((data) => {
//   document.body.innerHTML = data.map((user) => `<li>${user}</li>`).join("");
//   getProduct((data) => {
//     document.body.innerHTML += data
//       .map((product) => `<li>${product}</li>`)
//       .join("");
//     //Tác vụ khác
//   });
// });

//Promise: Object đặc biệt dùng để xử lý các tác vụ đồng bộ và dễ bảo trì
//Concept: Chaining --> obj.method1().method2().method3()
//Status:
// - pending --> Chờ
// - fulfilled --> Hoàn thành
// - rejected --> Thất bại

//Các bước làm việc với promise
//B1: Đưa logic bất đồng bộ vào object promise
//B2: Gọi promise để hiển thị kết quả
/*
new Promise((resolve, reject) => {
    resolve('Kết quả') --> Mong muốn kết quả hoàn thành
    reject('Thông báo lỗi') --> Mong muốn kết quả bị lỗi
})

Cú pháp gọi Promise
objectPromise.then((data) => {

})

then -> tương ứng với resolve
catch -> tương ứng với reject

- Hàm then cũng là promise
- Chỉ được phép gọi hàm then khi object là promise
- Để đưa dữ liệu vào promise của then --> return giá trị muốn đứa ở callback trong then
*/
const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ["User 1", "User 2", "User 3"];
      reject("Lỗi lấy user");
      //   resolve(users);
    }, 2000);
  });
};

const getProduct = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const products = ["Product 1", "Product 2", "Product 3"];
      //   resolve(products);
      reject("Lỗi lấy product");
    }, 1000);
  });
};

getUser()
  .then((data) => {
    console.log(data);
    document.body.innerHTML = data.map((user) => `<li>${user}</li>`).join("");
  })
  .catch((error) => {
    document.body.innerHTML += `<h3>${error}</h3>`;
  })
  .finally(() => {
    return getProduct();
  })
  .then((data) => {
    console.log(data);
    document.body.innerHTML += data
      .map((product) => `<li>${product}</li>`)
      .join("");
  })
  .catch((error) => {
    document.body.innerHTML += `<h3>${error}</h3>`;
  });
