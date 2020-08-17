import React, { useState } from 'react';
import './App.css';
import Todo from './components/todo'
import AddTask from './components/addTask'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [task, setTask] = useState ([])
  const add=(text) =>{
    const newTask ={
      text : text,
      id: task.length
        }
      setTask([...task,newTask])
  }
  const edit=(ID, neW) => {
    setTask(
      task.map((el) => (el.id === ID ? { ...el, text: neW } : el))
    );
  };
  const rem = (id) => {
    setTask(task.filter((el) => el.id !== id));
    console.log(id)
  };
  return (
    <div className="todo">
    <AddTask add={add}/>
    <Todo task={task}  edit={edit} rem = {rem}/>
    </div>
  );
}

export default App;
