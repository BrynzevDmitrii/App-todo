import styles from "./TodoList.module.css";
const TodoList = ({ item, toggleTask, removeTask }) => {
  return (
    <ul key={item.id} className={styles["wrapper"]}>
      <li>
        <button
          onClick={() => {
            toggleTask(item.id);
          }}
          className={styles["performed"]}
        >
          Выполнена
        </button>
        <div className={item.isCheked ? styles["todo-line"] : styles["todo"]}>
          {item.task}
        </div>
        <button
          onClick={() => {
            removeTask(item.id);
          }}
          className={styles["closed"]}
        >
          &times;
        </button>
      </li>
    </ul>
  );
};
export default TodoList;
