import React from "react";
import { useState } from "react";

const Card = (props) => {

    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new game object with the form data
        const game = {
            name: name,
            email: email
        };

        // Send a POST request to your backend API
        fetch('https://localhost:7114/Product/Loan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(game)
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the backend
                console.log(data);
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
    };

    return (
        <div className='game-box'>
            <h2>{props.name}</h2>
            <p>Complexity:{props.complexity}</p>
            <p>Minimum age: {props.minimum_age}</p>
            <p>Publisher: {props.publisher}</p>
            <button onClick={() => setShowForm(true)}>Click to open</button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>E-mail:</label>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit">Loan game</button>
                </form>
            )}
        </div>
    );
};

export default Card;