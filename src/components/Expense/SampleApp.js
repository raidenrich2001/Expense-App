
import Card from'../UI/Card';
import Date from './Date';
import "./SampleApp.css";
function SampleApp(props) {
    const title = props.title
    // const date = props.date.toString(),
    // const title=props.title;
    const amount=props.amount;

    return (
        <div>

        <Card>
            <div id="row">
               <Date date={props.date}></Date>
        
                <div className='column middleleft'>
                    <h2 className="a2">{title}</h2>
                </div>

                <div className="column rightside">
                    <h2 className="a3">Rs.{amount}</h2>
                </div>
            
            </div>
            <br></br>
        </Card>
        </div>
    )
}
export default SampleApp;