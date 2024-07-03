import React from 'react'
import style from "./ExpenseItem.module.css"

const ExpenseItem = (props) => {


  return (
    <div className={style.expenses}>
      <h1>{props.title}</h1>
      <h2>{props.price}</h2>
      <h3>{props.date}</h3>
    </div>
  )
}

export default ExpenseItem
