import { useEffect, useState } from "react";


const AvailablePlayers = ({addPlayerToQueue}) => {
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        fetch("/public/players.json")
            .then(res => res.json())
            .then(data => setAllPlayers(data))
    }, [])

    // console.log(allPlayers);

    return (
        <div>
            <h2 className=" text-4xl font-bold text-center">Available Players: {allPlayers.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allPlayers.map(player => (
                    <div key={player.player_id} className="card shadow-xl">
                        <figure>
                            <img
                                src={player.player_image}
                                alt="Player Image" />
                            </figure>
                        <div className="p-4">
                            <div className="flex items-center space-x-2">
                                <img className="w-12 h-12 border-2 border-solid rounded-full" src={player.player_image}></img>
                                <h2 className="plyer-name">{player.player_name}</h2>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <i className="fa-solid fa-flag"></i>
                                    <p>{player.national_team}</p>
                                </div>
                                
                                <button className="btn">{player.player_role}</button>
                            </div>
                            <p className="">Rating: {player.rating}</p>
                            <div className="flex justify-between items-center">
                                <p>{player.batting_balling_type}</p>
                                <p>{player.batting_balling_type}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Price: ${player.bidding_price}</p>
                                <button onClick={() => addPlayerToQueue(player)} className="btn">Choose Player</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;