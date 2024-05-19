import { useEffect, useState } from 'react';
import AddGame from './AddGame';

const MyPage = () => {

    const [user, setUser] = useState([]) // Declare data and setData here
    const [loginEmail, setLoginEmail] = useState('')
    const [loanedGamesDb, setLoanedGamesDb] = useState([])

    // Function to handle the email input
    function handleLoginEmailChange(event) {
        setLoginEmail(event.target.value);
        console.log('loginEmail:', loginEmail)
    }

    // Function to handle the mail login
    const LoginWithEmail = async (loginEmail) => {
        try {

            let requestBody = { email: loginEmail }
            // console.log('requestBody:', requestBody)
            const response = await fetch(`https://localhost:7114/User/login/${loginEmail}`, { method: 'GET' });
            if (!response.ok) {
                throw new Error('Failed to login. Check your email.')
            }


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

    // Fetches loaned games by user ID from the backend API
    const fetchLoanedGames = async (userId) => {
        try {
            const response = await fetch(`https://localhost:7114/Loan/get-loan-by-id/?userId=${userId}`, { method: 'GET' });
            const data = await response.json();
            setLoanedGamesDb(data);
            console.log(data)
        } catch (error) {
            console.error('Error!!!: ', error);
        }
    }

    return (
        <>
            <div className='my-page__login-container'>
                <form className='my-page__login-input'>
                    <label>Login with Email: </label>
                    <input type="email" value={loginEmail} onChange={handleLoginEmailChange} ></input>
                    <button type="button" onClick={() => LoginWithEmail(loginEmail)}>Log in</button>
                </form>
            </div>

            <div className='my-page__my-info'>
                <h1>My page</h1>

                <h4>My profile</h4>
                <p>E-mail: {user.email} </p>
                <p>Name: {user.name} </p>
            </div>

            <div className='my-page__my-loans'>
                <h2>My loans</h2>
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