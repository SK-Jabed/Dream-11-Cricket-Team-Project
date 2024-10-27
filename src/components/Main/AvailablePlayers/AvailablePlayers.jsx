import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import batsman_logo from "/src/assets/cricket.png"
import bowler_logo from "/src/assets/shot.png"
import rating_logo from "/src/assets/badge.png"
import price_logo from "/src/assets/affordable.png"
import player_rating_logo from "/src/assets/star.png"


const AvailablePlayers = ({addPlayerToQueue}) => {
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(() => {
        fetch(`players.json`)
            .then(res => res.json())
            .then(data => setAllPlayers(data))
    }, [])

    return (
        <div className="container mx-auto mt-4 lg:mt-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {
                    allPlayers.map(player => (
                    <div key={player.player_id} className="card shadow-2xl p-4">
                        <figure>
                            <img className="w-[28rem] h-[18rem] rounded-xl"
                                src={player.player_image}
                                alt="Player Image" />
                            </figure>
                        <div className="">
                            <div className="flex items-center gap-2 mt-4 lg:mt-6">
                                <img className="w-14 h-14 border-2 border-solid rounded-full object-cover" src={player.player_profile}></img>
                                <h2 className="plyer-name text-lg md:text-xl lg:text-2xl font-semibold">{player.player_name}</h2>
                            </div>
                            <div className="flex justify-between items-center mt-1 border-b-2 pb-2">
                                <div className="flex items-center gap-2 justify-center">
                                    <i className="fa-solid fa-flag text-lg text-gray-600"></i>
                                    <div className="flex items-center gap-1">
                                    <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-600">{player.national_team}</p>
                                    <img className="w-8 h-8 border-2 border-solid rounded-full object-cover" src={player.national_flag}></img>
                                    </div>
                                </div>

                                <button type="button" className="btn group flex h-12 w-36 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30">
                                    
                                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">{player.player_role}</div>
                                </button>
                            </div>
                            <div className="flex justify-between text-lg font-semibold items-center mt-4">
                                <div className="flex items-center gap-1">
                                    <img className="w-6" src={rating_logo}></img>
                                    <p className="">Rating:</p>
                                </div>
                                <div className="flex items-center gap-1 justify-center">
                                <p className="">{player.rating}</p>
                                <img className="w-5" src={player_rating_logo}></img>
                                </div>
                            </div>
                            <div className="flex justify-between text-base font-semibold items-center mt-2">
                                <div className="flex items-center"> 
                                <img className="w-8" src={batsman_logo}></img>
                                <p>Batting Style:</p>
                                </div>
                                <p className="text-gray-500">{player.batting_style}</p>
                            </div>    
                            <div className="flex justify-between text-base font-semibold items-center mt-1 border-b-2 pb-2">
                                <div className="flex items-center gap-1"> 
                                <img className="w-7" src={bowler_logo}></img>
                                <p>Bowling Style:</p>
                                </div>                               
                                <p className="text-gray-600">{player.bowling_style}</p>
                            </div>                                  
                            
                            <div className="flex justify-between items-center pt-2 pb-2 border-b-2">
                                <div className="flex items-center gap-1"> 
                                <img className="w-7" src={price_logo}></img>
                                <p className="text-lg font-bold">Price:</p>                               
                                </div>
                                <p className="text-gray-800 text-lg font-bold">${player.bidding_price}</p>                               
                            </div>
                            <div className="flex justify-center items-center pt-2">
                            <button onClick={() => addPlayerToQueue(player)} type="button" className=" group flex h-14 w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30">                                    
                                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out text-lg font-semibold">Choose Player</div>
                            </button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

AvailablePlayers.propTypes = {
    addPlayerToQueue: PropTypes.func
}

export default AvailablePlayers;