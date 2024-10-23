import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navbar/Navigation";

const RootLayout = () => {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;