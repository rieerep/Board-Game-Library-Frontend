const MyPage = () => {
    // Assuming you have an array of loan data
    const loans = [
        { id: 1, title: 'Loan 1' },
        { id: 2, title: 'Loan 2' },
        { id: 3, title: 'Loan 3' },
    ];

    // Assuming you have an array of loaned games from your backend
    const loanedGames = [
        { id: 1, title: 'Game 1', publisher: 'Game publisher', dueDate: '2024-06-12' },
        { id: 2, title: 'Exit', publisher: 'Alfaspel', dueDate: '2024-06-13' },
        { id: 3, title: 'Wingspan', publisher: 'Stonemaier Games', dueDate: '2024-06-13' },
        { id: 4, title: 'Wingspan', publisher: 'Stonemaier Games', dueDate: '2024-06-13' },
    ];

    return (
        <>
            <h1>My page</h1>

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
            <ul>
                {loans.map(loan => (
                    <li key={loan.id}>{loan.title}</li>
                ))}
            </ul>
        </>
    );
}

export default MyPage;