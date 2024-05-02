import React from "react";

const Card = (props) => {
    return (
        <div className='game-box'>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>Complexity:{props.complexity}</p>
            <p>Minimum age: </p>
        </div>
    );
};

export default Card;