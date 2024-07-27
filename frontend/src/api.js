const BASE_URL = "http://localhost:3001";

export const getTodos = () => {
  return fetch(`${BASE_URL}/api/todos/`).then((res) => res.json());
};

export const editTodos = (id, data) => {
  return fetch(`${BASE_URL}/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

export const deleteTodos = () => {};

export const createTodos = () => {};
