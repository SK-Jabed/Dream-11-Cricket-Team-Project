import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import PropTypes from "prop-types";
import "./Buttons.css"
import SelectedPlayers from "../../SelectedPlayers/SelectedPlayers";

const Buttons = ({handleIsActiveBtn, isActive, addPlayerToQueue, playerQueue, handleRemovePlayer}) => {
    
    return (
        <div className="container w-11/12 mx-auto flex flex-col  lg:mt-20">
            <div className="flex flex-col md:flex-row gap-2 lg:gap-0 justify-between items-center">
                {
                isActive.player ? <h2 className="text-2xl lg:text-3xl font-bold">Available Players</h2> : <h2 className="text-2xl font-bold lg:text-3xl">Selected Players ({playerQueue.length}/6)</h2>
                }
                <div className="flex">                   
                <button onClick={() => handleIsActiveBtn("available")} className={`${isActive.player ? "bg-[#E7FE29] text-[#131313] font-bold rounded-tl-lg rounded-bl-lg px-7 py-3 border border-[#1313131a] border-r-0" : "text-[#13131399] bg-white border border-[#1313131a] border-r-0 px-7 py-3 rounded-tl-lg rounded-bl-lg"}`}>Available</button>

                <button onClick={() => handleIsActiveBtn("selected")} className={`${isActive.player ? "text-[#13131399] bg-white border border-[#1313131a] border-l-0 px-7 py-3 rounded-tr-lg rounded-br-lg" : "bg-[#E7FE29] text-[#131313] font-bold px-7 py-3 border border-[#1313131a] border-l-0 rounded-br-lg rounded-tr-lg"}`}>Selected ({playerQueue.length})</button>
                </div>
            </div>
            
            {
                isActive.player ? <AvailablePlayers addPlayerToQueue={addPlayerToQueue}></AvailablePlayers> : <SelectedPlayers playerQueue={playerQueue} handleRemovePlayer={handleRemovePlayer} handleIsActiveBtn={handleIsActiveBtn}></SelectedPlayers>           
            }                     
        </div>   
    );
};

Buttons.propTypes = {
    handleIsActiveBtn: PropTypes.func,
    isActive: PropTypes.object,
    addPlayerToQueue: PropTypes.func,
    playerQueue: PropTypes.object,
    handleRemovePlayer: PropTypes.func
}

export default Buttons;