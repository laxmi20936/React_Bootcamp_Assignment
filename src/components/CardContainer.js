import "./CardContainer.css";

const CardContainer = ({members_data}) =>(
        <div className="card-container">
            <div>
                <img className="image-card-container" src={members_data.imageSrc} alt = "no-image"/>
            </div>
            <div className="member-info">
                <h2>{members_data.name}</h2>
                <p>{members_data.company} ({members_data.designation})</p>
                <p>{members_data.place}</p>
            </div>
      </div>
)

export default CardContainer;

