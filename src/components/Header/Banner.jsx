import bannerImage from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div className="container w-11/12 mx-auto bg-cover bg-black bg-no-repeat rounded-3xl md:h-[32rem] mb-8 mt-8" style={{backgroundImage: "url(https://i.ibb.co.com/fvVDKf7/bg-shadow.png)"}}>
            <div className="flex flex-col items-center justify-center text-center">
                <img className="mt-12 mb-6" src={bannerImage} alt="Banner Image"></img>
                <h1 className="text-4xl font-extrabold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-2xl font-semibold text-gray-400 mt-4">Beyond Boundaries Beyond Limits</p>
                <div className="mt-8 border-2 border-solid border-yellow-300 rounded-xl p-1">
                <button className="bg-yellow-400 rounded-xl py-3 px-5 hover:bg-yellow-500"><a className="text-lg font-bold" href="#">Claim Free Credit</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;