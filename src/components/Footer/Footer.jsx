import FooterLogo from "../../assets/logo-footer.png"

const Footer = () => {
    return (
        <div className="">
            <div className="container w-11/12 mx-auto bg-cover bg-no-repeat rounded-3xl md:h-[20rem] mb-8 mt-8" style={{backgroundImage: "url(https://i.ibb.co.com/fvVDKf7/bg-shadow.png)"}}>
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

            <div className="w-full pt-60 pb-12 bg-black">
                <div className="flex justify-center items-center">
                <img className="" src={FooterLogo} alt="Footer Logo"></img>
                </div>
                <div className="container w-11/12 mx-auto pt-16 flex lg:justify-between lg:flex-row flex-col gap-8 lg:px-0 px-6">
                    <div className="left-side-content flex flex-col gap-2 items-start">
                        <div className="info mt-4 flex flex-col gap-2">
                            <h3 className="text-white text-lg font-semibold">About Us</h3>
                            <p className="text-sm text-gray-500 font-medium w-2/4">We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                    </div>

                    <div className="middle-content flex flex-col items-start lg:mr-16">
                        <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>
                        <ul className="flex flex-col gap-2 list-disc ml-6">
                            <li><a className="hover:text-white text-gray-500 hover:font-medium cursor-pointer">Home</a></li>
                            <li><a className="hover:text-white text-gray-500 hover:font-medium cursor-pointer">Services</a></li>
                            <li><a className="hover:text-white text-gray-500 hover:font-medium cursor-pointer">About</a></li>
                            <li><a className="hover:text-white text-gray-500 hover:font-medium cursor-pointer">Contact</a></li>
                        </ul>
                    </div>

                    <div className="right-side-content flex flex-col gap-2 items-start">
                        <h2 className="text-lg text-white font-semibold mb-4">Subscribe</h2>
                        <p className="text-sm text-gray-500 font-medium w-3/4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="mt-8 flex items-center">
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
                                <input type="text" className="grow w-[10rem]" placeholder="Enter your email" />
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