import React from "react";
import { useState } from "react";

const Card = (props) => {

    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className='game-box'>
            <h2>{props.name}</h2>
            <p>Complexity:{props.complexity}</p>
            <p>Minimum age: {props.minimum_age}</p>
            <p>Publisher: {props.publisher}</p>
            <button onClick={() => setShowForm(true)}>Click to open</button>
            {showForm && (
                <form>
                    <label>Name:</label>
                    <input type="text" name="name" />
                    <label>E-mail:</label>
                    <input type="text" name="email" />
                </form>
            )}
        </div>
    );
};

export default Card;