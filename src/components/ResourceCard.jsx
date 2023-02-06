import '../styles/ResourceCard.css'

const ResourceCard = ({item, infoButton}) => {
    return (
        <div className="resource-card">
            <div className="container">
                <div className="box">
                    <img src={item.img} alt="" />
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                    <button className='card-button' onClick={() => infoButton(item)}>Info</button>
                </div>
            </div>
        </div>
    );
}

export default ResourceCard;