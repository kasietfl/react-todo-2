import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import Task from './Task'
import TodoForm from './TodoForm'

import {BsArrowLeftCircle} from 'react-icons/bs'


function TaskList({activeItem}) {
  
  function loadData() {
    const items = JSON.parse(localStorage.getItem('tasks'));
    // let dayId = localStorage.getItem('dayId')
    
    if (items) {
      return items
    } 
}

  const [tasks, setTasks] = useState(loadData())
  

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks.map(task => task)));
    localStorage.setItem("dayId", JSON.stringify(activeItem && activeItem.id))
  }, [ tasks, activeItem ]);


  function addTask(task){
      if(!task.text || /^\s*$/.test(task.text)){
        return;
      }

      const newTasks = [task, ...tasks]
      setTasks(newTasks)
  }

  function editTask(todoId, newValue){
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }

    setTasks(prev => prev.map(item => item.id === todoId ? newValue : item));
}  

  function deleteTask(id){
    let removeArr = [...tasks].filter(task => task.id !== id);
    setTasks(removeArr);
  }

  function completeTask(id){
    let updatedTodos = tasks.map(task => {
        if(task.id === id){
          task.isComplete = !task.isComplete
        }
        return task;
    })
    setTasks(updatedTodos);
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
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default TaskList