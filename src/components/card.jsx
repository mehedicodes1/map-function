import "react";
import PropTypes from "prop-types";

const imageStyle = {
    height: '200px',
    width: '200px',
    backgroundColor: 'lightblue'
};

const Card = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name} style={imageStyle}/>
            <a href={props.url}>Visit</a>
            <p>{props.about}</p>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
};

export default Card;