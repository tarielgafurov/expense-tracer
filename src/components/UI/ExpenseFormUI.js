import React from 'react'
import "./ExpenseFormUI.css"

const ExpenseFormUI = (props) => {
  return (
    <div className='container-form' >
      <label>{props.title}</label>
      <input value={props.value} onChange={props.onChange} type={props.type} placeholder={props.placeholder || "..."} />
    </div>
  )
}

export default ExpenseFormUI
