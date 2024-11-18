import React from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Ranking({ user }) {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getAllUsers');
                setUsers(response.data);
            } catch (error) {
                setError(true);
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []); // El array vacío asegura que solo se ejecuta una vez al montar el componente.

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading users.</p>;

    return (
        <div>
            <Nav />
            <h2>ranking loco</h2>
            {users.map((user) => (
                <ol  key={user.id}>
                    {user.username} ------------ {user.winPercentage}------{user.total_games}------{user.wins}%
                </ol>
            ))}
            <Footer />
        </div>
    );
}



export default Ranking;