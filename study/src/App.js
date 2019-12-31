import React, { useState } from 'react';

const Todo = ({ todo, index, complete, remove}) => {
  return (
    <div></div>
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
          
        </div>
      </div>
    </>
  )
}

export default App;
