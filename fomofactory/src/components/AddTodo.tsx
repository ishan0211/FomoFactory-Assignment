"use client"
import { useTodos } from '@/store/todos'
import React, { FormEvent, useState } from 'react'

const AddTodo = () => {
  const [todo,settodo] = useState("")

  const{handleAddTodo} = useTodos()

  const handleFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    handleAddTodo(todo)
    settodo("")
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="write your todo" name="" id="" value={todo} onChange={(e)=>settodo(e.target.value)} />
      <button type="submit">ADD</button>
    </form>
  )
}

export default AddTodo