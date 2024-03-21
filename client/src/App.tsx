import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import LookBook from "./pages/LookBook";
import Shop from "./pages/Shop";
import HomeScreen from "./pages/HomeScreen";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./layouts/Contact";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    index: true,
                    element: <HomeScreen />,
                },
                {
                    path: "/shop",
                    element: <Shop />,
                },
                {
                  path: "/services",
                  element: <Services />,
              },
                {
                    path: "/lookbook",
                    element: <LookBook />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },    
                {
                    path: "/about-us",
                    element: <AboutUs />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
