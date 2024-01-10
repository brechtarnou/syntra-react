import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    const newTodo = {
      name: todoInput,
      id: uuidv4(),
      status: "in_progress",
    };
    setTodoInput("");
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: todo.status === "done" ? "in_progress" : "done",
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <>
      <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <h3>In progress</h3>
      {todos
        .filter((todo) => todo.status === "in_progress")
        .map((todo) => {
          return (
            <Todo todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} />
          );
        })}
      <h3>Done</h3>
      {todos
        .filter((todo) => todo.status === "done")
        .map((todo) => {
          return (
            <Todo todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} />
          );
        })}
    </>
  );
};

export default Todos;
