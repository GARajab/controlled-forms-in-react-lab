 
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react'
import './App.css'
import AddNewBook from './component/Bookshelf'

const App = ()=> {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Bookshelf</h1>
      <AddNewBook/>
    </>
  )
}

export default App
