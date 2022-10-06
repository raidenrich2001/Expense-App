
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import SampleApp from './SampleApp';
function Expense(props)
{
    const [Default,setDefault]= useState('2021');
        function change(e)
        {   
            setDefault(e)
        }
    const filterYear = props.a.filter((expense) =>
    {
        return expense.date.getFullYear().toString() === Default; 
    });
    return(
    <div>
    <div>
        <ExpenseFilter senddefault={Default} cha={change}></ExpenseFilter>
    </div>
    <div>
    {
           filterYear.length === 0 ? (<h1 style={{marginLeft:'350px'}}>No Expenses Found</h1>) : (filterYear.map((expense)=> (
                <SampleApp
                
                    title={expense.loan}
                    amount={expense.amount}
                    date={expense.date}>
                </SampleApp>
            )))
        }
    </div>
    </div>
    )
}
export default Expense;