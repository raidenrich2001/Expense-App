

function Date(props)
{  
    const month= props.date.toLocaleString('en-US', {month:'long'})
    const day=props.date.toLocaleString('en-US',{day : '2-digit'})
    const year=props.date.getFullYear();
    return(
        <div className='column leftside'>
        <h2 className="a1">{day} {month} {year}</h2>
        </div>
)
}
export default Date;