import FooterLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="absolute w-full">
      <div className="bg-[#ffffff15] bg-opacity-15 border-2 border-white rounded-3xl lg:w-11/12 w-full mx-auto lg:p-6 p-3 border-solid relative top-48 z-10 ">
        <div
          className="bg-cover bg-no-repeat bg-center object-cover border-2 border-[#13131310] bg-white rounded-3xl md:h-[21rem] relative"
          style={{
            backgroundImage: "url(https://i.ibb.co.com/fvVDKf7/bg-shadow.png)",
          }}
        >
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mt-16">
              Subscribe to our Newsletter
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-400 mt-4">
              Get the latest updates and news right in your inbox!
            </p>
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-error bg-white border-2 w-[10rem] md:w-[18rem] lg:w-[30rem]"
              />
              <button className="bg-gradient-to-l from-[#fff568] to-[#ff4281] rounded-xl py-3 px-5">
                <a className="text-lg font-bold">Subscribe</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-60 bg-[#06091A]">
        <div className="flex justify-center items-center">
          <img className="" src={FooterLogo} alt="Footer Logo"></img>
        </div>
        <div className="container lg:w-11/12 w-full mx-auto pt-16 pb-[72px] px-5 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-48">
          <div className="left-side-content flex flex-col gap-2 items-start">
            <div className="info mt-4 flex flex-col gap-2">
              <h3 className="text-white text-lg font-semibold">About Us</h3>
              <p className="text-sm text-gray-500 font-medium">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <h3 className="font-semibold mt-2 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="middle-content flex flex-col items-start lg:mr-16">
            <h3 className="text-white text-lg font-semibold mb-4">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-2 list-disc ml-6">
              <li>
                <a className="hover:text-white text-gray-500 hover:font-medium cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-white text-gray-500 hover:font-medium cursor-pointer">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-white text-gray-500 hover:font-medium cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-white text-gray-500 hover:font-medium cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="right-side-content flex flex-col gap-2 items-start">
            <h2 className="text-lg text-white font-semibold mb-4">Subscribe</h2>
            <p className="text-sm text-gray-500 font-medium w-3/4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <fieldset className="form-control w-80">
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input rounded-xl join-item w-[8rem] md:w-[10rem] lg:w-[12rem]"
                  />
                  <button className="btn join-item bg-gradient-to-l from-[#fff568] to-[#ff4281] rounded-xl border-none py-3 px-5">
                    <a className="text-lg font-bold">Subscribe</a>
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
          {/* Footer Bottom */}
        </div>
        <hr></hr>
        <div className="mt-4 text-center text-gray-500 pb-6">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
