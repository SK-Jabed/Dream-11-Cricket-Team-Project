import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Header/Banner";
import Navbar from "./components/Header/Navbar";
import Buttons from "./components/Main/Buttons/Buttons";
import { toast } from "react-toastify";


const App = () => {
  const [isActive, setIsActive] = useState({
    player: true,
    status: "available"
  });

  const [playerQueue, setPlayerQueue] = useState([]);

  const [coin, setCoin] = useState(0);

  const handleCreditCoin = () => {
    setCoin(coin + 5000000);
    toast.success('Insufficient coins to select this player.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
            });
            return;
  }

  

  const addPlayerToQueue = player => {
    const isExist = playerQueue.find(
      previousPlayer => previousPlayer.player_id === player.player_id
    );

    if (playerQueue.length >= 6) {
            toast.warning('You cannot select more than 6 players.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
            });
            return;
        }

         if (coin >= player.bidding_price) {
            // setPlayerQueue([...playerQueue, player])
            
            // toast.success('Player selected successfully!');
        } else {
            toast.error('Insufficient coins to select this player.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
            });
            return;
        }


    if (!isExist) {     
      setPlayerQueue([...playerQueue, player])
      setCoin(coin - player.bidding_price);
      // handleDecreaseCoin(player.bidding_price) 
      toast.success('The player is added to your squad', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
            });
            return;
    }
    else {
      toast.error('This Player is Already Slected', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
            });
            return;
    }
  } 

  

  const handleRemovePlayer = (id) => {
    const playerToRemove = playerQueue.find(player => player.player_id === id);
    const updatedPlayerQueue = playerQueue.filter(player => player.player_id !== id)
    setPlayerQueue(updatedPlayerQueue)
    setCoin(coin + playerToRemove.bidding_price);
    toast.info('You removed this player from your squad', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
            });
            return;
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