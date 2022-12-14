import CardContainer from "./CardContainer";
import './BodyConatiner.css';

const BodyContainer = ({members_data}) => {

    return (
        <div className="box">
            {members_data.map(individual_data => {
             return <CardContainer members_data = {individual_data} 
                     key = {individual_data.id}/>})}
        </div>
    )
}

export default BodyContainer;