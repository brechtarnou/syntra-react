const Todo = ({ todo, updateTodo, removeTodo }) => {
  return (
    <>
      <p>{todo.name}</p>
      <button onClick={() => updateTodo(todo.id)}>Update</button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </>
  );
};

export default Todo;
