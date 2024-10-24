import logo from "../../assets/logo.png"
import coin from "../../assets/coin.png"

const Navbar = () => {
    return (
        <div className="container w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center mt-4 md:mt-8">
            <div className="flex items-center justify-start space-x-1">
                <img src={logo} alt="Project Logo"></img>
                <h2 className="text-2xl font-bold">DREAM <span className="text-red-500">11</span></h2>
            </div>
            <div className="flex items-center gap-3 md:gap-12">
                <ul className="hidden lg:flex items-center gap-12">
                    <li className="text-lg font-medium text-gray-400 hover:text-black hover:font-semibold"><a href="#">Home</a></li>
                    <li className="text-lg font-medium text-gray-400 hover:text-black hover:font-semibold"><a href="#">Fixture</a></li>
                    <li className="text-lg font-medium text-gray-400 hover:text-black hover:font-semibold"><a href="#">Teams</a></li>
                    <li className="text-lg font-medium text-gray-400 hover:text-black hover:font-semibold"><a href="#">Schedules</a></li>
                </ul>
                <div className="flex items-center space-x-2 border-2 border-solid border-yellow-300 py-3 px-5 rounded-xl">
                <p className="text-lg font-semibold "><span>0</span> Coin</p>
                <img src={coin} alt="Coin Image"></img>
                </div>
                <div className="bg-yellow-200 flex items-center justify-center w-12 h-12 rounded-full">
                <a href="#"><i className="fa-regular fa-circle-user text-2xl"></i></a>
                </div>

                <div className="dropdown lg:hidden relative ml-2">
                 {/* eslint-disable-next-line react/no-unknown-property */}
                <div tabindex="0" role="button" className="btn p-4 bg-userBorderColor border-2 border-solid rounded-full lg:hidden hover:bg-userBorderColor">
                  <i className="fa-solid fa-bars"></i>
                </div>
                {/* eslint-disable-next-line react/no-unknown-property */}
                <ul tabindex="0" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute right-0">
                  <li><a className="text-xl hover:font-bold hover:transition duration-300 hover:ease-in-out" href="#index.html">Home</a></li>
                  <li><a className="text-xl text-primaryTextColor hover:transition duration-300 ease-in-out hover:font-bold hover:primaryTextColor" href="#">Fixture</a></li>
                  <li><a className="text-xl text-primaryTextColor hover:transition duration-300 ease-in-out hover:font-bold hover:primaryTextColor" href="#">Teams</a></li>
                  <li><a className="text-xl text-primaryTextColor hover:transition duration-300 ease-in-out hover:font-bold hover:primaryTextColor" href="#">Schedules</a></li>              
                </ul>
              </div>
            </div>
        </div>
    );
};

export default Navbar;