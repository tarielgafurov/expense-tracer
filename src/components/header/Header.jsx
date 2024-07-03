import React, { useState } from 'react'
import "./Header.css"
import Button from '../UI/Button'

const Header = (props) => {
  return (
    <header>
      <h1>Expense-tracer</h1>
      <Button onClick={props.formHandler} >open</Button>
    </header>
    
  )
}

export default Header
