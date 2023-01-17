import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

function App() {
  // state를 통해 todos배열의 상태를 관리해줘야 한다
  // 추가될 todos의 타입은 반드시 modes폴더의 todo.ts에서 정의한 class Todo의 형태여야 한다
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
