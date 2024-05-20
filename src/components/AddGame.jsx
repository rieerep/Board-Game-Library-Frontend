import React, { useState } from "react";


const AddGame = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [complexity, setComplexity] = useState('');
    const [min_age, setMin_age] = useState('No minimum age specified');
    const [publisher, setPublisher] = useState('');
    const [image, setImage] = useState('111');
    const [category, setCategory] = useState('');

    const handleAddGameSubmit = (e) => {
        e.preventDefault();
        let newGame = {
            Name: title,
            Description: description,
            Complexity: complexity,
            Min_age: min_age,
            Publisher: publisher,
            Image: image,
            Category: category
        }
        console.log(newGame);

        fetch('https://localhost:7114/BoardGame/AddGame', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newGame)
        })
            .then(response => response.json())
            .then(data => { console.log(data) })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <>
            <h1>Add a new game:</h1>
            <form className="add-game__container" onSubmit={handleAddGameSubmit} >
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Publisher:</label>
                <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)}></input>
                <label>Category:</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}></input>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <label>Complexity:</label>
                <input type="text" value={complexity} onChange={(e) => setComplexity(e.target.value)}></input>
                <label>Min age:</label>
                <input type="text" value={min_age} onChange={(e) => setMin_age(e.target.value)}></input>
                <label>Image:</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>

                <button type="submit">Add Game</button>
            </form>

        </>

    );
}


export default AddGame;