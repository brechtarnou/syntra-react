import { createContext, useState } from "react";
import Jokes from "./pages/Jokes";
import "./App.css";
import Todos from "./pages/Todos";
import Home from "./pages/Home";
import TodoDetails from "./pages/TodoDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("light");

  const updateTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
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
    </ThemeContext.Provider>
  );
}

export default App;
