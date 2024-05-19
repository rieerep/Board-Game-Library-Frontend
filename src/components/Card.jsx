import React from "react";
import { useState } from "react";

const Card = (props) => {

    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let game = {
            name: name,
            email: userEmail,
            boardGameId: props.id
        }
        console.log(game);
        console.log(userEmail);

        // Sends a POST request to the backend API
        fetch('https://localhost:7114/Loan/RegisterLoan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: userEmail, boardGameId: props.id })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

            })
            .catch(error => {
                console.error(error);
            });
        setName('');
        setUserEmail('');
        console.log('Name after loan: ', name);
        console.log('Email after loan: ', userEmail);
        setMessage('Game has been loaned.');
    };

    return (
        <div className='game-box'>
            <div className='game-box__game'>
                <h2>{props.name}</h2>
                <p>Complexity:{props.complexity}</p>
                <p>Minimum age: {props.minimum_age}</p>
                <p>Publisher: {props.publisher}</p>
                <p>ID: {props.id}</p>
                {/* <button id="game-box__dele-button">Delete game</button> */}

            </div>
            <div className='game-box__game'>
                <button onClick={() => setShowForm(true)}>Click to loan</button>
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
        </div>
    );
};

export default Card;