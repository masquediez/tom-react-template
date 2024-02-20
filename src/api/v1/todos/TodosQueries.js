import api from "../../config/api";

async function fetchAllTodos() {
  const result = await api.get("/todos/all");
  return result.data;
}

async function fetchTodoById(todoId) {
  const result = await api.get("/todos/byid", { params: { todoId } });
  return result.data.todo;
}

async function fetchTodosByUserId(userId) {
  const result = await api.get(`/todos/byuserid/${userId}`);
  return result.data;
}

async function markTodoAsCompleted(todoId) {
  const result = await api.put(`/todos/mark/${todoId}`);
  return result.data;
}

async function updateTodo(todoId, updatedTodo) {
  const result = await api.put(`/todos/update/${todoId}`, {
    updatedTodo: updatedTodo,
  });
  return result.data;
}

async function deleteTodo(todoId) {
  const result = await api.delete(`/todos/delete/${todoId}`);
  return result.data;
}

export default {
  fetchAllTodos,
  fetchTodoById,
  fetchTodosByUserId,
  markTodoAsCompleted,
  updateTodo,
  deleteTodo,
};
