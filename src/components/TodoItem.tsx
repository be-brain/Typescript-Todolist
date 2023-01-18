const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
  // onSwitchTodo: () => void;
  // ()안에 내포되어 있는것 = event: React.MouseEvent
}> = (props) => {
  // modes폴더의 todo.ts에서 직접받아오기 → ~React.FC<{todo:Todo}>
  return (
    <li>
      {props.text}
      <button type="submit" onClick={props.onRemoveTodo}>
        Delete
      </button>
      {/* <button onClick={props.onSwitchTodo}>{isActive ? "완료" : "취소"}</button> */}
    </li>
  );
};

export default TodoItem;
