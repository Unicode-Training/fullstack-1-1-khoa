export const useAuth = () =>
  useState("auth", () => {
    return {
      isAuth: true,
      user: { name: "Hoàng an" },
    };
  });

export const useTodoList = () => {
  const todoList = useState("todoList", () => []);
  const fetchTodo = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    todoList.value = await response.json();
  };
  return { todoList, fetchTodo };
};
