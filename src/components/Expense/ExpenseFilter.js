
import'./ExpenseFilter.css'
function ExpenseFilter(props)
{
    function sendchange(event)
    {
        props.cha(event.target.value);
    }

    return(
     
        <div id = 'row'>
            <div className='colum leftsid'>
                    <h1 style={{Color:'white',fontSize:'25px'}}> FILTER BY YEAR </h1>
            </div>
            <form className='colum rightsid'>
                <select id='dropdownbtn' onChange={sendchange} value={props.senddefault}>
                    <option className='option'>2019</option>
                    <option className='option'>2020</option>
                    <option className='option'>2021</option>
                    <option className='option'>2022</option>
                </select>
            </form>
        </div>
    )
}
export default ExpenseFilter;