import React from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/Stadistics.css';

function Stadistics({ user }) {
    const [userData, setUserData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [rankingPosition, setRankingPosition] = React.useState(null);

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/user/${user}`);
                setUserData(response.data);

                const rankingResponse = await axios.get('http://localhost:5000/getAllUsers');
                const ranking = rankingResponse.data;
                const position = ranking.findIndex((u) => u.username === user) + 1;
                setRankingPosition(position);
            } catch (error) {
                setError(true);
                console.error('Error fetching user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [user]); // El array vacío asegura que solo se ejecuta una vez al montar el componente.

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading users.</p>;


    return (
        <div>
            <Nav />
            <div className="stadistics-logic">
            <div className="stadistics-container">
                <h1>Estadísticas de {userData.username}</h1>
                <table className="stats-table">
                    <thead>
                        <tr>
                            <th>Victorias</th>
                            <th>Derrotas</th>
                            <th>Porcentaje de victoria</th>
                            <th>Partidas totales</th>
                            <th>Posición en el ranking</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{userData.wins}</td>
                            <td>{userData.total_games - userData.wins}</td>
                            <td>{userData.winPercentage.toFixed(2)}%</td>
                            <td>{userData.total_games}</td>
                            <td>{rankingPosition}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            </div>
            
            
            
            <Footer />
        </div>
    );
}



export default Stadistics;