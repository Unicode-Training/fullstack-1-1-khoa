//XSS
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const todoList = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputEl = form.querySelector("input");
  const todo = inputEl.value;
  if (!todo) {
    return alert("Vui lòng nhập");
  }
  todoList.push(todo);
  renderTodoList();
  inputEl.value = "";
});
const convertHtmlToEntity = (str) => {
  return str.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
};
const renderTodoList = () => {
  const html = todoList.map((todo) => {
    return `<li>${convertHtmlToEntity(todo)}</li>`;
  });
  ul.innerHTML = html.join("");
  //   ul.innerHTML = "";
  //   todoList.forEach((todo) => {
  //     const li = document.createElement("li");
  //     li.innerText = todo;
  //     ul.append(li);
  //   });
};
