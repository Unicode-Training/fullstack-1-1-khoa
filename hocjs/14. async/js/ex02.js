const todoApi = `https://jsonplaceholder.typicode.com/todos`;

const makeHttpRequest = (url, method = "GET") => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest(); //khởi tạo object từ XMLHttpRequest
    xhttp.open(method, url, true); //Thiết lập thông tin request: METHOD, URL
    xhttp.send(); //Gửi request
    xhttp.onreadystatechange = function () {
      //readyState = 4 --> Trả về kết quả
      //status --> status code
      if (this.readyState == 4) {
        if (this.status == 200) {
          const data = JSON.parse(this.response);
          resolve(data);
        } else {
          reject("Error: " + this.status);
        }
      }
    };
  });
};

const renderTodoList = (data) => {
  const todoList = document.querySelector("#todo-list");
  const html = data
    .map(
      (item) => `
  <div>
    <h3>${item.title}</h3>
    <button data-id="${item.id}">Detail</button>
  </div>
  `
    )
    .join("");
  todoList.innerHTML = html;

  const btnList = document.querySelectorAll("#todo-list button");
  btnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      getTodoDetailFromAPI(id, btn);
    });
  });
};
const renderTodoDetail = (data, el) => {
  const h4 = document.createElement("h4");
  h4.innerText = `Status: ${data.completed ? "Completed" : "Pending"}`;
  const parentEl = el.parentElement;
  parentEl.insertBefore(h4, el);
};
const getTodoFromAPI = () => {
  makeHttpRequest(todoApi).then(renderTodoList);
};
const getTodoDetailFromAPI = (id, el) => {
  makeHttpRequest(`${todoApi}/${id}`).then((data) => {
    renderTodoDetail(data, el);
  });
};
getTodoFromAPI();

//Bài tập: Khi click vào button
// - Lấy id của của todo
// - Gọi API --> https://jsonplaceholder.typicode.com/todos/{id}
// - Cập nhật giao diện
