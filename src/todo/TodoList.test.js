/* eslint-disable jest/valid-expect */
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
const mokeData = {
  id: "jhbvuy3",
  task: "Купить молоко",
  isCheked: false,
};

const mokeDataTrue = {
    id: "jhbvuy3",
    task: "Купить молоко",
    isCheked: true,
  };

describe("renders TodList component", () => {
  test("list render", () => {
    render(<TodoList item={mokeData} />);

    expect(screen.getAllByRole("list"));
  });

  test("dinamic styles", ()=>{
    render(<TodoList item={mokeDataTrue}/>)

    const performed =screen.getAllByTestId('task').sort((el)=>el.className="todo-line")
    expect(performed)
  })

});

