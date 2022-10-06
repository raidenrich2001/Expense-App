

function Card(props)
{
    return(<div className={props.id}>

        {props.children}
    </div>

)
}
export default Card;