import { useEffect, useState } from 'react';
import Card from '/Skola/Inlämningsuppgift/Board Game Library/bg-library-front/src/components/Card.jsx';

const CardList = (props) => {

    const [data, setData] = useState([]) // Declare data and setData here

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch('https://localhost:7114/Product', { method: 'GET' });
                const result = await response.json();
                console.log(result[0].name);
                console.log(result[0].publisher);
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
                <Card name={game.name} description={game.description} complexity={game.complexity} publisher={game.publisher} />
            ))}
        </>
    );
}

export default CardList;