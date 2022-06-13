import styles from "./TodoList.module.css";
const TodoList = ({ item, toggleTask, removeTask }) => {
  return (
    <ul>
      <li>
        <div key={item.id} className={styles["wrapper"]}>
          <button
            onClick={() => {
              toggleTask(item.id);
            }}
            className={styles["performed"]}
          >
            Выполнена
          </button>
          <div
            data-testid="task"
            className={item.isCheked ? styles["todo-line"] : styles["todo"]}
          >
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
        </div>
      </li>
    </ul>
  );
};

export default TodoList;
