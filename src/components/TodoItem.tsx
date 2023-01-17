import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string }> = (props) => {
  // modes폴더의 todo.ts에서 직접받아오기 → ~React.FC<{todo:Todo}>
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
