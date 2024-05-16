import React from "react";
import { useState } from "react";

const Card = (props) => {

    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [userEmail, setUserEmail] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a new game object with the form data
        let game = {
            //name: name,
            email: userEmail,
            boardGameId: props.id
        }
        console.log(game);
        console.log(userEmail);
        ;


        // Send a POST request to your backend API
        fetch('https://localhost:7114/Loan/RegisterLoan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: userEmail, boardGameId: props.id })
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
            <div className='game-box__game'></div>
            <h2>{props.name}</h2>
            <p>Complexity:{props.complexity}</p>
            <p>Minimum age: {props.minimum_age}</p>
            <p>Publisher: {props.publisher}</p>
            <p>ID: {props.id}</p>
            <button onClick={() => setShowForm(true)}>Click to open</button>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>E-mail:</label>
                    <input type="email" name="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    <button type="submit" >Loan game</button>
                </form>
            )}
        </div>
    );
};

export default Card;