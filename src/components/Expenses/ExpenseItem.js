import React, {useState} from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import '../Expenses/ExpenseItem.css';

function ExpenseItem(props) {

  const [title,setTitle] = useState(props.title); // it must be called inside function

  const clickHandler = () => {
   setTitle("updated");
    console.log("ExpenseItem evaluted by React");
    
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} /> {/* Pass the date prop to ExpenseDate component */}
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>{props.amount}
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    
  );
}

export default ExpenseItem;
