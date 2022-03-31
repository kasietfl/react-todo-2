import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import Task from './Task'
import TodoForm from './TodoForm'

import {BsArrowLeftCircle} from 'react-icons/bs'

function TaskList({activeItem}) {

  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks.map(task => task)));
    localStorage.setItem("dayId", JSON.stringify(activeItem))
    const items = JSON.parse(localStorage.getItem('tasks'));
    console.log(items)
    setTasks(items)
  }, [tasks, activeItem]);


  

  function addTask(task){
      if(!task.text || /^\s*$/.test(task.text)){
        return;
      }

      const newTasks = [task, ...tasks]
      setTasks(newTasks)
  }

  function deleteTask(id){
    let removeArr = [...tasks].filter(task => task.id !== id);
    setTasks(removeArr);
  }

  function completeTask(){
    console.log(activeItem.name)
  }

  return (
    <div >
      <div className='title'>
        <Link to="/"><BsArrowLeftCircle className='icon-back'/></Link>
        <h1>Plans for {activeItem && activeItem.name}</h1>
      </div>
      {activeItem && <TodoForm onSubmit={addTask} activeItem={activeItem.id}/>}
      <Task 
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default TaskList