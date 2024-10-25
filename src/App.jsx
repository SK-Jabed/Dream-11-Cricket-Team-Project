import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Header/Banner";
import Navbar from "./components/Header/Navbar";
import Buttons from "./components/Main/Buttons/Buttons";

const App = () => {
  const [isActive, setIsActive] = useState({
    player: true,
    status: "available"
  });

  const [playerQueue, setPlayerQueue] = useState([]);

  const [coin, setCoin] = useState(0);

  const handleCreditCoin = () => {
    setCoin(coin + 5000000);
  }

  const addPlayerToQueue = player => {
    const isExist = playerQueue.find(
      previousPlayer => previousPlayer.player_id === player.player_id
    );
    if (!isExist) {
      setPlayerQueue([...playerQueue, player])
    }
    else {
      alert("This player is already selected")
    }
  } 

  const handleRemovePlayer = id => {
    const updatedPlayerQueue = playerQueue.filter(player => player.player_id !== id)
    setPlayerQueue(updatedPlayerQueue)
  }

  const handleIsActiveBtn = (status) => {
    if (status == "available") {
      setIsActive({
        player: true,
        status: "available"
      })
    }
    else {
      setIsActive({
        player: false,
        status: "selected"
      })
    }
  }

  

  return (
    <div className="">
      {/* Header Section Starts Here */}
      <Navbar coin={coin}></Navbar>
      <Banner handleCreditCoin={handleCreditCoin}></Banner>
      
      {/* Header Section Ends Here */}
      {/* Main Section Starts Here */}
      <Buttons 
      isActive={isActive} 
      handleIsActiveBtn={handleIsActiveBtn} 
      addPlayerToQueue={addPlayerToQueue} 
      playerQueue={playerQueue}
      handleRemovePlayer ={handleRemovePlayer}
      ></Buttons>
      {/* Main Section Ends Here */}
      {/* Footer Section Starts Here */}
      <Footer></Footer>
      {/* Footer Section Ends Here */}
    </div>
  );
};

export default App;