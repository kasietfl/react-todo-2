import React, {useState, useRef, useEffect} from 'react'

function TodoForm(props) {

    const inputRef = useRef()

    const [input, setInput] = useState('');

    useEffect(()=>{
        inputRef.current.focus();
    })

    function handleChange(e){
        setInput(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            dayId: props.activeItem
        });

        setInput('');
    }

  return (
    <div>
        <form className='todo-form' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Add task'
            name='text'
            value={input}
            onChange={handleChange}
            className='todo-input'
            ref={inputRef}
            autoComplete='off'
        />
        <button className='todo-button' >Add</button>
        </form>
    </div>
  )
}

export default TodoForm