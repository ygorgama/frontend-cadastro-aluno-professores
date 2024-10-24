import { Outlet, useSubmit } from "react-router-dom";
import Navigation from "../Components/Navbar/Navigation";
import { getToken, getTokenExpiration } from "../Util/auth";
import { useEffect } from "react";

const RootLayout = () => {
    const submit = useSubmit();
    const token = getToken();
    const tokenDuration = getTokenExpiration();
    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === "EXPIRED TOKEN") {
            submit(null, {action: '/logout', method: 'post'});
            return;
        }

        if (tokenDuration) {
            setTimeout(() => {
                submit(null, {action: '/logout', method: 'post'});
            }, tokenDuration); 
        }        
    }, [token, submit, tokenDuration]);


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