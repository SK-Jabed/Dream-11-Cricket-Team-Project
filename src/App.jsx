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
      <Navbar></Navbar>
      <Banner></Banner>
      
      {/* Header Section Ends Here */}
      {/* Main Section Starts Here */}
      <Buttons isActive={isActive} handleIsActiveBtn={handleIsActiveBtn}></Buttons>
      {/* Main Section Ends Here */}
      {/* Footer Section Starts Here */}
      <Footer></Footer>
      {/* Footer Section Ends Here */}
    </div>
  );
};

export default App;