import Banner from "./components/Header/Banner";
import Navbar from "./components/Header/Navbar";

const App = () => {
  return (
    <div className="container w-11/12 mx-auto px-4">
      {/* Header Section Starts Here */}
      <Navbar></Navbar>
      <Banner></Banner>
      {/* Header Section Ends Here */}
    </div>
  );
};

export default App;