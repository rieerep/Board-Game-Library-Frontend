import { useEffect, useState } from 'react';

const MyPage = () => {

    const [user, setUser] = useState([]) // Declare data and setData here
    const [loginEmail, setLoginEmail] = useState('')
    const [loanedGamesDb, setLoanedGamesDb] = useState([])

    // Assuming you have an array of loaned games from your backend
    const loanedGames = [
        { id: 1, title: 'Game 1', publisher: 'Game publisher', dueDate: '2024-06-12' },
        { id: 2, title: 'Exit', publisher: 'Alfaspel', dueDate: '2024-06-13' },
        { id: 3, title: 'Wingspan', publisher: 'Stonemaier Games', dueDate: '2024-06-13' },
        { id: 4, title: 'Wingspan', publisher: 'Stonemaier Games', dueDate: '2024-06-13' },
    ];

    function handleLoginEmailChange(event) {
        setLoginEmail(event.target.value);
        console.log('loginEmail:', loginEmail)
    }

    const LoginWithEmail = async (loginEmail) => {
        try {
            let requestBody = { email: loginEmail }
            console.log('requestBody:', requestBody)
            const response = await fetch(`https://localhost:7114/User/login/${loginEmail}`, { method: 'GET' });
            console.log('response:', response);
            const result = await response.json();
            console.log(result.Name);
            console.log(result.Email);
            setUser(result)

            fetchLoanedGames(result.id);
            console.log(user)
            console.log('user', user)
        } catch (error) {
            console.log('Errorrr: ', error)
        }
    };


    const fetchLoanedGames = async (userId) => {
        try {
            const response = await fetch(`https://localhost:7114/Loan/get-loan-by-id?userId=${userId}`, { method: 'GET' });
            const data = await response.json();
            setLoanedGamesDb(data);
            console.log(data)
        } catch (error) {
            console.error('Error!!!: ', error);
        }
    }



    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch('https://localhost:7114/Loan/1', { method: 'GET' });
                console.log('response:', response);
                const result = await response.json();
                console.log(result.Name);
                console.log(result.Email);
                setUser(result)
                console.log(user)
                console.log('user', user)
            } catch (error) {
                console.log('Errorrr: ', error)
            }
        };
        fetchData();

    }, []);



    // useEffect(() => {
    //     const getUser = async () => {
    //         try {
    //             const response = await fetch('https://localhost:7114/User/1', {
    //                 method: 'GET'
    //             });
    //             const data = await response.json();
    //             setUser(data)
    //         } catch (error) {
    //             console.error('Error!!!: ', error);
    //         }
    //     }
    //     console.log(user);
    //     getUser();
    // }, []);

    return (
        <>
            <label>Login: </label>
            <input value={loginEmail} onChange={handleLoginEmailChange} ></input>
            <button onClick={() => LoginWithEmail(loginEmail)}>Log in</button>

            <h1>My page</h1>

            <p>My profile</p>
            <p>E-mail: {user.email} </p>
            <p>Name: {user.name} </p>

            <div className="my-page__my-loans">
                <h2>My loans</h2>
                <table className="loan-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Publisher</th>
                            <th>Due to</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loanedGames.map(game => (
                            <tr key={game.id}>
                                <td>{game.title}</td>
                                <td>{game.publisher}</td>
                                <td>{game.dueDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <table className="loan-table">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Title</th>
                            <th>Loan date</th>
                            <th>Due to</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loanedGamesDb.map(loans => (
                            <tr key={loans.id}>
                                <td>{loans.userId}</td>
                                <td>{loans.boardGame.name}</td>
                                <td>{loans.loanDate}</td>
                                <td>{loans.dueDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        </>
    );
}

export default MyPage;