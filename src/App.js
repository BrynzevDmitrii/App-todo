import { useState } from "react";
import Form from "./form/Form";
import TodoList from "./todo/TodoList";
import styles from "./App.module.css"
import 'antd/dist/antd.css'

function App() {
  const [tasks, setTasks ]= useState([])

  function addTask(valueTask) {
    if(valueTask){
      const newTask = {
        id:Math.random().toString(12).substring(2,9), 
        task: valueTask,
        isCheked: false,
      }
      setTasks([...tasks, newTask])
    }
  }

  function removeTask(id) {
setTasks([...tasks.filter((task)=>task.id!== id)])
  }

  function toggleTask(id) {
setTasks ([...tasks.map((task)=>
    task.id === id ? {...task, isCheked: !task.isCheked} : {...task})
  ])
}

  return (
    <div className={styles['App']}>
      <header>
        <h1>Задачи:{tasks.length}</h1>
      </header>

      <Form
      addTask = {addTask}
      />
      {tasks.map((task)=>{
        return (
        <TodoList 
        item= {task}
        key = {task.id}
        toggleTask = {toggleTask}
        removeTask = {removeTask}
        
        />
      )
      })}
   
    </div>
  );
}

export default App;
