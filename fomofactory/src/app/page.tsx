import AddTodo from '@/components/AddTodo'
import HomePage from '@/components/HomePage'
import Todos from '@/components/Todos'
import React from 'react'
import styles from './page.module.css'

const page = () => {
  return (
    <main className={styles.main}>
      <div><h2>ishan is here</h2></div>
      <HomePage></HomePage>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </main>
  )
}

export default page