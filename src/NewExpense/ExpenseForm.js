import { useState } from "react";
import './ExpenseForm.css';
function ExpenseForm(props)
{
const[Entertitle,setEntertitle]=useState('');
const [Account,setAccount]= useState("");
const [Dateu,setDateu]= useState("");
const submit={
  loan:Entertitle,
  amount:Account,
  date:new Date(Dateu)
 }
  function textchange(e)
  {
   setEntertitle(e.target.value)
  }
  function  numberchange(e)
  {
   setAccount(e.target.value)
  }
  function datechange(e)
  {
   setDateu(e.target.value)
  }
  function click(e)
  {
    e.preventDefault();
   
    props.q(submit);
  setDateu('');
  setAccount('');
  setEntertitle('');
  }

return(
    <div>
        <div className="formdesign">
       <form className='form' name='Expenseform'>
        <label>TITLE</label><input onChange={textchange}  value={Entertitle} type="text" name="title"></input>
        <br></br>
        <label>AMOUNTT</label><input onChange={numberchange}  type="number"value={Account} name="account"></input>
        <br></br>
        <label>DATE</label><input onChange={datechange}  type="date" value={Dateu} name="date"></input>
        <br></br>
        <input type ='submit' id='submit' onClick={click}></input>
        <button onClick={props.onCancel}>Cancel</button>
       </form> 
       </div>
       <br></br>
       <br></br>
    </div>
)
}
export default ExpenseForm;