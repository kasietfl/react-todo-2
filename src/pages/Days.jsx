import React from 'react'

function Days({days, onClickItem}) {

  return (
    <div className='days'>
      <h1>To-Do App</h1>
      {days.map(day => 
        <div key={day.id} className='week-day' onClick={() => onClickItem(day)} >
          <span className='link'>{day.name}</span>
        </div>  
      )}
        
    </div>
  )
}

export default Days