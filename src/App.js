import Jokes from "./Jokes";
import "./App.css";
import Todos from "./Todos";
import TodoDetails from "./TodoDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<p>Home</p>} />
        </Routes>
        <Routes>
          <Route path="/jokes" element={<Jokes />} />
        </Routes>
        <Routes>
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/:id" element={<TodoDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
