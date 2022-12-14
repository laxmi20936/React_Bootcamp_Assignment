import "./CardContainer.css";

const CardContainer = ({members_data}) =>{
    const{name,login,avatar_url ,id} = members_data;
    return(
        <div className="card-container">
            <div>
                <img className="image-card-container" src={avatar_url} alt = "no-image"/>
            </div>
            <div className="member-info">
                <h2>{name}</h2>
                <p>Username: {login}</p>
                <p>{id}</p>
            </div>
        </div>
    )
}

export default CardContainer;

