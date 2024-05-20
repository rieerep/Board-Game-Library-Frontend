import { useEffect, useState } from 'react';
import Card from '/Skola/Inlämningsuppgift/Board Game Library/bg-library-front/src/components/Card.jsx';
import AddGame from './AddGame.jsx';

const CardList = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        // fetches data from the backend API
        const fetchData = async () => {
            try {

                const response = await fetch('https://localhost:7114/BoardGame', { method: 'GET' });
                const result = await response.json();
                console.log(result[0].name);
                console.log(result[0].publisher);
                console.log(result[0].boardGameId);
                console.log(result);
                setData(result)
            } catch (error) {
                console.log('Errorrr: ', error)
            }
        };
        fetchData();

    }, []);

    return (
        <>
            {data.map((game) => (
                <Card id={game.boardGameId} name={game.name} description={game.description} complexity={game.complexity} publisher={game.publisher} />
            ))}
            <AddGame />
        </>
    );
}

export default CardList;