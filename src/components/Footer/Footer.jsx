const Footer = () => {
    return (
        <div className="" >
            <div className="bg-cover bg-no-repeat rounded-3xl md:w-full md:h-[20rem] mb-8 mt-8" style={{backgroundImage: "url(https://i.ibb.co.com/fvVDKf7/bg-shadow.png)"}}>
            <div className="flex flex-col items-center text-center">
                <h2 className="text-4xl font-extrabold mt-16">Subscribe to our Newsletter</h2>
                <p className="text-2xl font-semibold text-gray-400 mt-4">Get the latest updates and news right in your inbox!</p>
                <div className="mt-8 flex items-center gap-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow w-[18rem]" placeholder="Enter your email" />
                    </label>
                <button className="bg-yellow-400 rounded-xl py-3 px-5 hover:bg-yellow-500"><a className="text-lg font-bold" href="#">Subscribe</a></button>
                </div>
            </div>
            </div>


            <div className="w-full py-6">
      <div className="container pt-16 flex lg:justify-between lg:flex-row flex-col gap-12 lg:px-0 px-10">
          <div className="left-side-content flex flex-col gap-2 items-start">
            <div className="info mt-4 flex flex-col gap-2">
              <p className="text-sm">Location: av. Washington 165, NY CA 54003</p>
              <p className="text-sm">Phone: +31 85 964 47 25</p>
              <p className="text-sm">Email: info@yourdomain.com</p>
              <p className="text-sm">Openings hours: 9.00 AM - 5.00 PM</p>
            </div>
          </div>
          <div className="middle-content flex flex-col items-start">
              <h2 className="text-xl font-bold text-primaryColor mb-4">Useful Links</h2>
              <ul className="flex flex-col gap-2">
                <li><a className="hover:text-white hover:font-semibold cursor-pointer">Home</a></li>
                <li><a className="hover:text-white hover:font-semibold cursor-pointer">About Us</a></li>
                <li><a className="hover:text-white hover:font-semibold cursor-pointer">Animals</a></li>
                <li><a className="hover:text-white hover:font-semibold cursor-pointer">Foundation</a></li>
                <li><a className="hover:text-white hover:font-semibold cursor-pointer">Contact</a></li>
              </ul>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <h2 className="text-lg font-bold mb-4">Drop a Message</h2>
            <div className="mt-8 flex items-center gap-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow w-[18rem]" placeholder="Enter your email" />
                    </label>
                <button className="bg-yellow-400 rounded-xl py-3 px-5 hover:bg-yellow-500"><a className="text-lg font-bold" href="#">Subscribe</a></button>
                </div>
          </div>
      </div>
    </div>
        </div>

        
    );
};

export default Footer;