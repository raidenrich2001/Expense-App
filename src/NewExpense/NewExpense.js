import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
function NewExpense(props)
{
    const [openForm,setOpenForm] = useState(false);
    function clicked()
    {
        setOpenForm(true);
    }
    function cancelClick()
    {
        setOpenForm(false);
    }
 function a(b)
 {
    const expense ={
    ...b
    }

    props.j(expense);
    setOpenForm(false);
 }
    return(
        <div>
        { !openForm ? <div className="addExpensebuttonbox"><button onClick={clicked}> Add Expense </button></div>: <ExpenseForm q={a} onCancel={cancelClick}></ExpenseForm>}
        </div>
    )                                                                                   
}
export default NewExpense;