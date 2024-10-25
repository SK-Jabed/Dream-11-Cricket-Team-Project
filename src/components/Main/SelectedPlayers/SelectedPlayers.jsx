

const SelectedPlayers = ({playerQueue}) => {
    return (
        <div>
            <h2 className=" text-4xl font-bold text-center">Selected Players: {playerQueue.length}</h2>

            <div className="mt-8 ">
                <button onClick={} className="bg-yellow-400 rounded-xl py-3 px-5 hover:bg-yellow-500"><a className="text-lg font-bold">Add More Player</a></button>
            </div>
        </div>
    );
};

export default SelectedPlayers;