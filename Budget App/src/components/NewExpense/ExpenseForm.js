import React, { useState } from 'react'


import './ExpenseForm.css'

const ExpenseForm = (props) => {

    // Multiple state manage using multiple state
    // const [enteredTitle, setTitle] = useState('')
    // const [enteredAmount, setAmount] = useState('')
    // const [enteredDate, setDate] = useState('')

    // Multiple state manage using single state
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangedHandler = (e) => {
        // for multiple state update
        // setTitle(e.target.value)

        // For single state update
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // })

        // proper way of state update
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: e.target.value }
        })
    }

    const amountChangedHandler = (e) => {
        // for multiple state update
        // setAmount(e.target.value)

        // For single state update
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // })

        // proper way of state update
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: e.target.value }
        })
    }

    const dateChangedHandler = (e) => {
        // setDate(e.target.value)
        // For single state update

        // for multiple state update
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // })

        // proper way of state update
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: e.target.value }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        // console.log(expenseData)

        // sending back data to parent
        props.onSaveExpenseData(expenseData)

        // Reset the form
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    }

  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={userInput.enteredTitle} onChange={titleChangedHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangedHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={userInput.enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangedHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm