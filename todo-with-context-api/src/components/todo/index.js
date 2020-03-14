import React, { useContext, useEffect } from 'react'
import TodoContext from '../../contexts/todo/Context'

import AddTodo from './Add'
import ListTodo from './List'

function TodoWarap () {
  const { dispatchTodo, arrTodo } = useContext(TodoContext)

  useEffect(() => {
    console.log(arrTodo)
  })
  return (
    <>
      <AddTodo dispatch={dispatchTodo} />
      <ListTodo list={arrTodo} />
    </>
  )
}

export default TodoWarap
