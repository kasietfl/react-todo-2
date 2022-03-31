import React from 'react'
import {BsCheckCircle, BsXCircle} from 'react-icons/bs'

function Task({tasks, completeTask, deleteTask}) {

  
  return tasks.map((task, index) => (
    <div className='todo-row' key={index}>
        <div key={task.id}>
            {task.text}
        </div>
        <div className="icons">
            <BsCheckCircle onClick={completeTask} className='icon-complete'/>
            <BsXCircle onClick={()=> deleteTask(task.id)} className='icon-delete'/> 
        </div>
    </div>
  ))
}

export default Task