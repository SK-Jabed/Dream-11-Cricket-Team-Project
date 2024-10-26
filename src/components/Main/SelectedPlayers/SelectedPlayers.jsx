

const SelectedPlayers = ({playerQueue, handleRemovePlayer, handleIsActiveBtn}) => {
    return (
        <div>
            <h2 className=" text-4xl font-bold text-center">Selected Players: {playerQueue.length}</h2>

            <div >
                {
                    playerQueue.map((player, idx) => (
                        <div key={idx} className="border-2 border-solid p-2 rounded-2xl flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <div className="flex items-center space-x-2">
                                <p>{idx + 1}</p>
                                <img className="w-20 h-20 border-1 p-1 border-yellow-400 rounded-2xl" src={player.player_image} alt="Selected Players Image"></img>                            
                                </div>
                                <div>
                                    <p>{player.player_name}</p>
                                    <p>{player.batting_balling_type}</p>
                                </div>
                            </div>
                            <div className="border-2 border-solid border-yellow-300 px-5 py-3 rounded-xl hover:bg-yellow-400">
                            <button onClick={() => handleRemovePlayer(player.player_id)} className="flex items-center space-x-2">
                                <a>Remove</a>
                                <i className="fa-solid fa-trash text-red-500"></i>
                                </button>
                            </div>
                        </div>
                    ))
                }

            </div>

            <div className="mt-8 ">
                <button onClick={() => handleIsActiveBtn("available")} className="bg-yellow-400 rounded-xl py-3 px-5 hover:bg-yellow-500"><a className="text-lg font-bold">Add More Player</a></button>
            </div>
        </div>
    );
};

export default SelectedPlayers;