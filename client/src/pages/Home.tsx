import Header from "../layouts/Header";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation()
    console.log(location.pathname)
    return (
        <>
            <main className="max-w-[1280px] mx-auto px-4">
                <Header />
                <Outlet/>
                {location.pathname === '/contact' ? null : <Contact />}   
            </main>
            <Footer />
        </>
    );
};

export default Home;
