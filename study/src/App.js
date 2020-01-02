import React, { useState } from 'react';

const Todo = ({ todo, index, complete, remove}) => {
  return (
    <>
      <div 
        className="todo"
        style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
      >
        {todo.text}
      </div>
      <div>
        <button conClick={() => complete(index)}>Complete</button>
        <button conClick={() => remove(index)}>X</button>
      </div>
    </>
  )
}



const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return
    addTodo(value)
    setValue('')
  }
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
  const addTodo = text => {
    const newTodos = [...todo, { text }]
    setTodo(newTodos)
  }

  const complete = index => {
    const newTodos = [...todo]
    newTodos[index].isCompleted = true
    setTodo(newTodos)
  }

  const remove = index => {
    const newTodos = [...todo]
    newTodos.splice(index, 1)
    setTodo(newTodos)
  }
  
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
