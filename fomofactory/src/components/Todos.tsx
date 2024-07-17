"use client"

import { useTodos } from '@/store/todos'
import React from 'react'

const Todos = () => {
    const {todos} = useTodos()
    console.log(todos)
    let filterTodos = todos;
  return (
    <ul>
        {
            filterTodos.map((todo)=>{
                return <li key={todo.id}>
                    {todo.task}
                </li>
            })
        }
    </ul>
  )
}

export default Todos