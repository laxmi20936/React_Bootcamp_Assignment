import CardContainer from "./CardContainer";

const BodyContainer = ({members_data}) => {
    console.log("laxmi" ,members_data)
    return members_data.map(individual_data => {
        return <CardContainer members_data = {individual_data} key = {individual_data.id}/>
    }) 
}

export default BodyContainer;