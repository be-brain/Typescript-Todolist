import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);
  // useRef가 무엇과 연결되는지 알려줘야 한다 → HTMLInputElement
  // 초기값은 없으므로 null로 지정

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoInputRef.current!.value;
    // handleSubmit함수는 form이 제출될때만 실행된다
    // form이 제출되는 것은 ref={todoInputRef}가 연결된 다음이다
    // todoInputRef.current의 초기값을 null로 지정했으므로 error발생
    // 따라서 값이 있으면 value를 가져와라 라는 명령을 위해 ?.사용
    // 빈값(null)이 아니라고 확신할수있는 경우에는 !.사용(=확실히 연결이 완료된 경우)
    /* 정리 : null일 수도 있는 값을 다룰 때 → ?. */
    /* 정리 : 절대 null일리가 없는 실제값을 가져올 때 → !. */

    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
