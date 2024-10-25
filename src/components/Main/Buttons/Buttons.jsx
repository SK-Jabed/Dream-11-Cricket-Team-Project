import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import PropTypes from "prop-types";
import "./Buttons.css"

const Buttons = ({handleIsActiveBtn, isActive}) => {
    
    return (
        <div className="container w-11/12 mx-auto flex flex-col">
            <div className="flex justify-between items-center">
                {
                isActive.player ? <h2 className="text-2xl font-bold">Available Players</h2> : <h2 className="text-2xl font-bold">Selected Players</h2>
                }
                <div>                   
                <div onClick={() => handleIsActiveBtn("available")} className={`${isActive.player ? "btn active" : "btn"}`}>Available</div>
                <div onClick={() => handleIsActiveBtn("selected")} className={`${isActive.player ? "btn" : "btn active"}`}>Selected</div>
                </div>
            </div>
            
            {
                isActive.player ? <AvailablePlayers></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>
            }
                      
        </div>

        
    );
};

Buttons.propTypes = {
    handleIsActiveBtn: PropTypes.func,
    isActive: PropTypes.object
}

export default Buttons;