import { useNavigate } from "react-router-dom";

const Todo = ({ todo, updateTodo, removeTodo }) => {
  const navigate = useNavigate();
  return (
    <>
      <p>{todo.name}</p>
      <button onClick={() => updateTodo(todo.id)}>Update</button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
      <button
        onClick={() => {
          navigate(`/todos/${todo.id}`);
        }}
      >
        Details
      </button>
    </>
  );
};

export default Todo;

/**
 * https://reactrouter.com/en/main
 *  npm install react-router-dom
 * BrowserRouter
 * Routes
 * Route -> path (dynamic paths are with :keyword)-> the keyword will be the key in the params object
 * useParams -> to get your dynamic value
 * useNavigate -> returns a function to navigate to another route
 */

/**
 * Characters (Overview page), on click of a character we navigate to the detail page /character/:id
 *
 * Character (Detail page to display more information), we need an id to fetch the details. How can we get the id? --> get the params of the url via useParams()
 */
