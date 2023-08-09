import React from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import '../Expenses/ExpenseItem.css';

function ExpenseItem(props) {

  const clickHandler = () => {
    console.log('clicked !!!!');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} /> {/* Pass the date prop to ExpenseDate component */}
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>{props.amount}
      </div>
      <button onClick={clickHandler}>  Delete Expense </button>
    </Card>
    
  );
}

export default ExpenseItem;
