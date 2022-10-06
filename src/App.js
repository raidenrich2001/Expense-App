
import { useState } from 'react';
import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './NewExpense/NewExpense';

function App() {
  const title = "Expense App";
  const a = [
    {
     loan: "CarExpense",
      amount: "2000",
      date: new Date()
    }
    ,
    {
      loan: "Groceries",
      amount: "4000",
      date: new Date(2001,3,26)
    }
    ,
    {
      loan: "Electricity",
      amount: "5000",
      date: new Date()
    }
  ];
  const [Infor,setInfor] = useState(a);


  function addinfo(d)
  {
    setInfor( (previous)=>
    {
      return [d, ...previous]
    })
  }

  return (
    <div style={{backgroundColor : 'lightblue'}}> 
      <div id='title'>
        <h1>{title}</h1>
      </div>
      <div>
          <NewExpense j={addinfo}></NewExpense>
      </div>
      <div className='body'>
        <div className='bodycolor'>
          <Expense a={Infor} ></Expense>
        </div>
      </div>

    </div>
  )
}
export default App;
