import { redirect } from "react-router-dom";

export const loader = () => {
    return  localStorage.getItem("token");
}

export const chechAuthLoader = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        return redirect('/login');
    }

    return true;
}

export const getToken = () => {
    const token =  localStorage.getItem("token");

    const duration = getTokenExpiration();

    if (duration && duration < 0) {
        return "EXPIRED TOKEN";
    }

    return token;
}

export const getTokenExpiration = () => {
    const storedExpirationDate: string | null = localStorage.getItem('expiration') as string | null;

    if (storedExpirationDate) {
        const expirationDate = new Date(storedExpirationDate);
        const now = new Date();
        const duration = expirationDate.getTime() - now.getTime();
        return duration;
    }

    return;
}