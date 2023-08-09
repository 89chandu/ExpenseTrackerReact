import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {

  const expense = [
    {
      id: 'e1',
      title: 'Car Insurance', 
      amount:294.67, 
      date: new Date(2021,2,28),
    },

    {
      id: 'e2',
      title: 'Food order',
       amount:294.67, 
       date: new Date(2021,2,28),
      },

    {
      id:'e3',
      title: 'Travel',
       amount:294.67,
        date: new Date(2021,2,28)
      },

    {
      id:'e4',
      title: 'Shopping',
       amount:294.67, 
       date: new Date(2021,2,28),
      },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title={expense[0].title} 
      amount={expense[0].amount} 
      date={expense[0].date}>
      </ExpenseItem>

      <ExpenseItem 
      title={expense[1].title} 
      amount={expense[1].amount} 
      date={expense[1].date}>
      </ExpenseItem>

      <ExpenseItem 
      title={expense[2].title} 
      amount={expense[2].amount} 
      date={expense[2].date}>
      </ExpenseItem>

      <ExpenseItem 
      title={expense[3].title} 
      amount={expense[3].amount} 
      date={expense[3].date}>
      </ExpenseItem>




      
    </div>
  );
}

export default App;
