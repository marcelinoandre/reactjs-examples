import React from 'react'

function ListTodo ({ list }) {
  return (
    <ul>
      {list.map(todo => <li key={todo.id}>{todo.todo}</li>)}
    </ul>
  )
}

export default ListTodo
