import React from 'react';
import './ExpenseForm.css'

const ExpenseForm  = () => {
    // document.getElementById('').addEventListener('click',(event) => {})


    const titleChangeHandler = (event) => {
        console.log("event");
    };

    return (
        <form>
            <div className="new-expense__controls">
            <div className="new-expesne__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>

                </div>
                <div className="new-expesne__control">
                    <label>Amount</label>
                    <input type='number' min="0.01"/>

                </div>

                <div className="new-expesne__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31"></input>

                </div>
            </div>
            <div className="new-expesne__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

};
export default ExpenseForm;