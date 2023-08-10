import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

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

  const addExpenseHandler = expense =>  {
    console.log("in App.js");
    console.log(expense);
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expense} ></Expenses>
    
    </div>
  );
}

export default App;
