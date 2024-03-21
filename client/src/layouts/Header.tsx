import {useState} from "react";
import MPRLogo from "../assets/mpr.jpg";
import {Link, NavLink} from "react-router-dom";

interface dataProps {
    id: number;
    title: string;
    pathname: string;
}
const data: dataProps[] = [
    {
        id: 1,
        title: "Homepage",
        pathname: "/",
    },
    {
        id: 2,
        title: "All Products",
        pathname: "/shop",
    },
    {
        id: 3,
        title: "Services that we offer",
        pathname: "/services",
    },
    {
        id: 4,
        title: "Look Book",
        pathname: "/lookbook",
    },
    {
        id: 5,
        title: "Contact",
        pathname: "/contact",
    },
    {
        id: 6,
        title: "About us",
        pathname: "/about-us",
    },
];
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <div className='sticky left-0 right-0 top-0 bg-white z-20 transition duration-150 ease-out'>
            <div className=' border-b'>
                <div className='px-2 py-5 max-w-[1280px] mx-auto flex justify-between'>
                    <Link to={"/"}>
                        <img className='w-[55px]' src={MPRLogo} alt='Mprlogo' />
                        <span className='font-bold select-none text-red-400 text-xs'>Masagana Print Republik</span>
                    </Link>
                    <div className='relative'>
                        <div className='text-2xl flex gap-3'>
                            <a href='https://www.facebook.com/MASAGANAPRINTREPUBLIK'>
                                <i className='bx bxl-facebook-square text-[#1877f2]'></i>
                            </a>

                            <a href='mailto:MaganaPR@gmail.com'>
                                <i className='bx bxl-gmail text-red-600'></i>
                            </a>
                        </div>
                        <button className='bg-red-500 text-white rounded-md py-2 px-4 mt-2 tablet:hidden'>
                            Sign in
                        </button>
                        <div
                            onClick={() => {
                                setMenuOpen(true);
                            }}
                            className='absolute right-0 bottom-0 cursor-pointer hidden tablet:block'
                        >
                            <i className='bx bx-menu text-3xl'></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center font-[400] p-3 tablet:hidden'>
                <ul className='flex gap-6 text-lg uppercase'>
                    {data?.map((link: dataProps) => {
                        return (
                            <NavLink
                                key={link?.id}
                                to={link.pathname}
                                className={({isActive}) => (isActive ? "text-red-400 font-bold" : "")}
                            >
                                {link.title}
                            </NavLink>
                        );
                    })}
                </ul>
            </div>
            <div
                style={{display: menuOpen ? "block" : ""}}
                className='fixed top-0 right-0 bg-white p-4 h-screen w-[60%] z-20 hidden lg:hidden'
            >
                <div className='my-3 flex justify-between'>
                    <Link to={"/"}>
                        <img className='w-[55px]' src={MPRLogo} alt='Mprlogo' />
                        <span className='text-sm select-none'>Masagana Print Republik</span>
                    </Link>
                    <div
                        className='cursor-pointer'
                        onClick={() => {
                            setMenuOpen(false);
                        }}
                    >
                        <i className='bx bx-x text-3xl'></i>
                    </div>
                </div>
                <ul className='flex flex-col gap-6 text-lg uppercase mt-8'>
                    {data?.map((link) => {
                        return (
                            <NavLink
                                key={link?.id}
                                to={link.pathname}
                                onClick={closeMenu}
                                className={({isActive}) => (isActive ? "text-red-400 font-bold" : "")}
                            >
                                {link.title}
                            </NavLink>
                        );
                    })}
                </ul>
            </div>
            <div
                style={{display: menuOpen ? "block" : ""}}
                className='fixed top-0 right-0 bottom-0 left-0 z-10 backdrop-blur-sm hidden'
            ></div>
        </div>
    );
};

export default Header;
