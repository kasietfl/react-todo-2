import React from 'react'
import {RiEditLine} from 'react-icons/ri'
import {BsCheckCircle, BsXCircle} from 'react-icons/bs'

import TodoForm from './TodoForm'

function Task({tasks, completeTask, editTask, deleteTask}) {

  const [edit, setEdit] = React.useState({
    id: null,
    value: ''
  })

  function submitUpdate(value){
    editTask(edit.id, value)
      setEdit({
          id: null,
          value: ""
      })
  }

  if(edit.id){
      return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }


  return tasks.map((task, index) => (
    <div className={task.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div key={task.id} >
            <span className='task-text'>{task.text}</span>
        </div>
        <div className="icons">
            <BsCheckCircle onClick={() => completeTask(task.id)} className='icon-complete'/>
            <BsXCircle onClick={()=> deleteTask(task.id)} className='icon-delete'/> 
            <RiEditLine  onClick={() => setEdit({ id: task.id, value: task.text })}/>
        </div>
    </div>
  ))
}

export default Task