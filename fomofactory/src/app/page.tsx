import AddTodo from '@/components/AddTodo'
import HomePage from '@/components/HomePage'
import Todos from '@/components/Todos'
import React from 'react'

const page = () => {
  return (
    <main>
      <div><h2>ishan is here</h2></div>
      <AddTodo></AddTodo>
      <Todos></Todos>
      <HomePage></HomePage>
      {/* <PriceList></PriceList> */}
    </main>
  )
}

export default page