import HomePage from '@/components/HomePage'
import React from 'react'
import styles from './page.module.css'

const page = () => {
  return (
    <main className={styles.main}>
      <HomePage></HomePage>
      {/* <AddTodo></AddTodo> */}
      {/* <Todos></Todos> */}
    </main>
  )
}

export default page