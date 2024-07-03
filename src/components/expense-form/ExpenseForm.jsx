import React, { useState } from 'react'
import ExpenseFormUI from '../UI/ExpenseFormUI'
import "./Expense-Form.css"
import Button from '../UI/Button'

const ExpenseForm = (props) => {

  const [title , setTitle] = useState("") // hello
  const [price , setPrice] = useState("")
  const [date , setDate] = useState("")

  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }
  const priceChangeHandler = (e) => {
    setPrice(e.target.value)
  }
  const dateChangeHandler = (e) => {
    setDate(e.target.value)
  }

    const submitHandler = (e) => {
        e.preventDefault()
    }

 

    const addNewExpenses = () => {
      const myExpenses = {
        title,
        price,
        date,
        id: Math.random().toString()
      }

      props.save(myExpenses)
      setTitle("")
      setPrice("")
      setDate("")

    }




  return (
    <form onSubmit={submitHandler} >
      <ExpenseFormUI onChange={titleChangeHandler} value={title} title="title:" type="text" />
      <ExpenseFormUI onChange={priceChangeHandler} value={price} title="price:" type="number" />
      <ExpenseFormUI onChange={dateChangeHandler} value={date} title="date:" type="date" />
      <div>
        <Button onClick={props.close} >close</Button>
        <Button onClick={addNewExpenses} >add</Button>
      </div>
    </form>
  )
}

export default ExpenseForm
