const serverApi = `http://localhost:3000`;

const getUsers = async () => {
  try {
    const response = await fetch(`${serverApi}/users`, {});
    if (!response.ok) {
      throw new Error(`HTTP error! ${response.statusText}`);
    }
    const users = await response.json();
    renderUsers(users);
  } catch (error) {
    console.log(error);
  }
};

const renderUsers = (users) => {
  const tbody = document.querySelector("tbody");
  const html = users
    .map(
      (user, index) => `<tr>
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button>Sửa</button>
          </td>
          <td>
            <button>Xóa</button>
          </td>
        </tr>`
    )
    .join("");
  tbody.innerHTML = html;
};

getUsers();
