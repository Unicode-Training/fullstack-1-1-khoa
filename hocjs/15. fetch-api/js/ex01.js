const serverApi = `http://localhost:3000`;
// fetch(`${serverApi}/users`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((users) => {
//     console.log(users);
//   });
const getUsers = async () => {
  try {
    const response = await fetch(`${serverApi}/users`, {});
    if (!response.ok) {
      throw new Error(`HTTP error! ${response.statusText}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};
// getUsers();

// const getUser = async (id) => {
//   try {
//     const response = await fetch(`${serverApi}/users/${id}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! ${response.statusText}`);
//     }
//     const user = await response.json();
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getUser(1);

// const addUser = async (data) => {
//   try {
//     const response = await fetch(`${serverApi}/users`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! ${response.statusText}`);
//     }
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// addUser({
//   name: "Xuân khoa",
//   email: "khoa@gmail.com",
// });

// const updateUser = async (data, id) => {
//   try {
//     const response = await fetch(`${serverApi}/users/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! ${response.statusText}`);
//     }
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateUser(
//   {
//     name: "User 1 Unicode",
//   },
//   1
// );

// const deleteUser = async (id) => {
//   try {
//     const response = await fetch(`${serverApi}/users/${id}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! ${response.statusText}`);
//     }
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// deleteUser(1);
