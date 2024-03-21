import MprBg from '../assets/images/mpr-bg.png'
import { Link } from "react-router-dom";

const Hero = () => {
    const fontClamp = 'clamp(39px,8vw,48px)'
    return (
        <div style={{ backgroundImage: `url(${MprBg})` }} className="flex justify-center bg-no-repeat bg-cover bg-center items-center text-center h-screen relative mobile:bg-right-bottom">
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-60"></div>
            <div className="p-6 z-10">
                <h1 style={{fontSize: fontClamp}} className="p-2 text-5xl font-bold max-w-[900px] text-white z-10">
                    <span className="text-red-600">Express</span> Yourself with Custom Creations - Your Imagination, Our <span className="text-red-600">Print.</span>
                </h1>
                <Link to={'/shop'} className="px-5 py-2 mt-2 bg-red-600 text-white rounded-sm uppercase transition duration-150 ease-out hover:ease-in-out hover:bg-black">View Shop</Link>
            </div>
        </div>
    );
};

export default Hero;
