const serverApi = `http://localhost:3000`;
const LIMIT = 3;
let currentPage = 1;
const getUsers = async (keyword = "") => {
  try {
    let url = `${serverApi}/users?_limit=${LIMIT}&_page=${currentPage}`;
    if (keyword) {
      url = `${serverApi}/users?q=${keyword}&_limit=${LIMIT}&_page=${currentPage}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! ${response.statusText}`);
    }
    const users = await response.json();
    const total = response.headers.get("x-total-count");
    renderUsers(users);
    renderPaginate(total);
  } catch (error) {
    console.log(error);
  }
};
const renderPaginate = (total) => {
  const paginateEl = document.querySelector(".pagination");
  const maxPage = Math.ceil(total / LIMIT);
  let html = "";
  if (currentPage > 1) {
    html += `<button>Prev</button>`;
  }

  for (let i = 1; i <= maxPage; i++) {
    html += `<button class="${
      i === currentPage ? "active" : ""
    }">${i}</button>`;
  }
  html += `<button>Next</button>`;
  paginateEl.innerHTML = html;
  const btnList = paginateEl.querySelectorAll("button");
  btnList.forEach((btn) => {
    btn.addEventListener("click", function () {
      const page = +btn.innerText;
      currentPage = page;
      getUsers();
    });
  });
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

const addUser = async (data) => {
  const response = await fetch(`${serverApi}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};

const emailExist = async (email) => {
  const response = await fetch(`${serverApi}/users?email=${email}`);
  const data = await response.json();
  return data.length;
};

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameEl = document.querySelector(".name");
  const emailEl = document.querySelector(".email");
  const name = nameEl.value;
  const email = emailEl.value;
  const checkEmail = await emailExist(email);
  const errorEmailEl = document.querySelector(".error-email");
  errorEmailEl.innerText = "";
  if (!checkEmail) {
    const addStatus = await addUser({ name, email });
    if (addStatus) {
      getUsers();
      nameEl.value = "";
      emailEl.value = "";
    }
  } else {
    errorEmailEl.innerText = "Email đã tồn tại";
  }
});

const searchEl = document.querySelector(".keyword");

//Kỹ thuật debounce
const debounce = (callback, timeout = 500) => {
  let id = null;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};
searchEl.addEventListener(
  "input",
  debounce(() => {
    const keyword = searchEl.value;
    getUsers(keyword);
  })
);

getUsers();
