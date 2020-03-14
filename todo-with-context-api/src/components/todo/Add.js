import React, { useState, useEffect } from 'react'
import { todoAdd } from '../../contexts/todo/actions'

function AddTodo ({ dispatch }) {
  const [todo, setTodo] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    console.log(done)
  }, [done])

  const handleSubmit = (form) => {
    form.preventDefault()

    console.log(done, 'form')

    dispatch(todoAdd(todo, done))
    setTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={e => setTodo(e.target.value)} type='text' name='todo' id='todo' value={todo} />
      <input type='checkbox' name='done' id='done' onChange={e => setDone(e.target.checked)} />
    </form>
  )
}

export default AddTodo
