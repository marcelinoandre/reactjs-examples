import React, { useReducer } from 'react'
import TodoContext from './Context'
import reducer from './reducer'

function Provider ({ children }) {
  const [arrTodo, dispatchTodo] = useReducer(reducer, [])
  return (
    <TodoContext.Provider value={{ arrTodo, dispatchTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export default Provider
