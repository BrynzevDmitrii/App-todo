import { useState } from "react";

const Form = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.currentTarget.value);
  }

  function handleSabmit(e) {
    e.preventDefault();
    addTask(inputValue);
    setInputValue("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSabmit(e);
    }
  }
  return (
    <form onSubmit={handleSabmit} className="wrapper">
      <input
        type="text"
        placeholder="Добавьте задачу"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button>Создать</button>
    </form>
  );
};

export default Form;
