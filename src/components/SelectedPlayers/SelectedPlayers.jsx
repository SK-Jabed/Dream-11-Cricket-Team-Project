import PropTypes from "prop-types";

const SelectedPlayers = ({
  playerQueue,
  handleRemovePlayer,
  handleIsActiveBtn,
}) => {
  return (
    <div>
      <div>
        {playerQueue.map((player, idx) => (
          <div
            key={idx}
            className="border-2 border-solid p-2 rounded-2xl flex justify-between items-center mb-2"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <img
                  className="w-28 h-28 border-1 p-1 rounded-2xl"
                  src={player.player_image}
                  alt="Selected Players Image"
                ></img>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-[#131313]">
                  {player.player_name}
                </h3>
                <p className="text-lg font-semibold text-gray-600">
                  {player.player_role}
                </p>
                <p className="text-lg font-semibold text-gray-600">
                  Price: {player.bidding_price}
                </p>
              </div>
            </div>
            <div
              onClick={() => handleRemovePlayer(player.player_id)}
              className="border-2 border-solid border-yellow-300 px-5 py-3 rounded-xl hover:bg-yellow-400"
            >
              <button className="flex items-center space-x-2">
                <a>Remove</a>
                <i className="fa-solid fa-trash text-red-500"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 ">
        <button
          onClick={() => handleIsActiveBtn("available")}
          className="bg-yellow-400 rounded-xl py-3 px-5 hover:bg-yellow-500"
        >
          <a className="text-lg font-bold">Add More Player</a>
        </button>
      </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  handleIsActiveBtn: PropTypes.func,
  playerQueue: PropTypes.object,
  handleRemovePlayer: PropTypes.func,
};

export default SelectedPlayers;
