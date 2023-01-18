import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  switchTodo: (id: string) => void;
};

type Props = {
  children: React.ReactNode;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  // items의 초기값을 빈배열로 두면 타입스크립트에서 어떤 타입이 올지 모르기때문에 에러발생
  // 따라서 context에 정의
  addTodo: () => {},
  removeTodo: (id: string) => {},
  switchTodo: (id: string) => {},
});

// context를 제공해주는 component만들기, TodosContextProvider는 context의 상태를 관리하는 역할
// 타입은 React.FC로 설정한다 - 여기에 함수형 컴포넌트를 저장한다는 의미
// 함수형 컴포넌트는 렌더링이 가능한 콘텐츠를 반환해야 한다
// children은 default값으로 props에 추가로 정의할 필요X
const TodosContextProvider: React.FC<Props> = ({ children }) => {
  // state를 통해 todos배열의 상태를 관리해줘야 한다
  // 추가될 todos의 타입은 반드시 modes폴더의 todo.ts에서 정의한 class Todo의 형태여야 한다
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const handleRemoveTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const handleSwitchTodo = (id: string) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id === id);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo,
    switchTodo: handleSwitchTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
