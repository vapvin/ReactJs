import React, { useState } from 'react';

const Todo = ({ todo, index, complete, remove}) => {
  return (
    <div></div>
  )
}

const handleSubmit = e => {
  e.preventDefault();
  if(!value) return
  addTodo(value)
  setValue('')
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

const App = () => {
  const [todo, setTodo] = useState([])
  return (
    <>
      <div className="app">
        <div className="todo_list">

          {
            todo.map((item, index) => (
              <Todo 
                key={item}
                index={index}
                todo={todo}
                complete={complete}
                remove={remove}
              />
            ))
          }

          <TodoForm addTodo={addTodo} />
          
        </div>
      </div>
    </>
  )
}

export default App;
