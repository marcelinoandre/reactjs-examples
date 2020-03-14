import React from 'react'
import TodoProvider from './contexts/todo/Provider'
import Todo from './components/todo'

// import AddTodo from './components/todo/Add'
// import ListTodo from './components/todo/List'

function App () {
  return (
    <TodoProvider>
      <h1>Ola sr André</h1>
      <Todo />
    </TodoProvider>
  )
}

export default App

// TODO: // cRIAR LISTA
