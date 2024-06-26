import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "../components/Todo";
import ThemeLayout from "../components/ThemeLayout";

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
      //If you do not return you automatically return undefined. If one of the elements of the array does not reach the if statement, and you would not have a return some of the elements will be undefined
      return todo;
    });
    setTodos(newTodos);
  };
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <ThemeLayout>
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
    </ThemeLayout>
  );
};

export default Todos;
