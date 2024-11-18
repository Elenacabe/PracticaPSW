import React from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/Ranking.css';

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
        <div className="ranking-container">
            <h1>Ranking</h1>
            <table className="ranking-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Victorias</th>
                        <th>Derrotas</th>
                        <th>Porcentaje de victoria</th>
                        <th>Partidas totales</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.wins}</td>
                            <td>{user.total_games - user.wins}</td>
                            <td>{user.winPercentage.toFixed(2)}%</td>
                            <td>{user.total_games}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        
        <Footer />
    </div>
    );
}



export default Ranking;