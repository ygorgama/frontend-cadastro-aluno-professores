import  { FormEvent, useRef, } from "react";
import axios from "axios";
import AuthInterface from "../Interfaces/AuthInterface";
import { json } from "react-router-dom";

const Login = () => {

    const emailRef  = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post('/v1/auth/login', {
            email,
            password
        }, {
            headers: [
                {"access-control-allow-origin": "*"}
            ]
        });
    
        if (!(response.status == 200)) {
            throw json({message: 'Could not authenticate user.'}, {status: 500});
        };
            const responseData: AuthInterface  =  response.data as AuthInterface;
    
            localStorage.setItem("token", responseData.token);
            const expiration = new Date();
            expiration.setHours(expiration.getHours() + 2);
            localStorage.setItem('expiration', expiration.toISOString());
            return location.href = "/";

    }

    return (
        <div className="bg-green-300/50 w-full h-screen overflow-hidden">
            <section className="flex w-full h-full justify-center items-center">
                <div className="bg-gray-600/50 w-96 h-96 relative rounded">
                    <form  onSubmit={submitHandler} className="absolute left-6 top-14 w-full">
                        <div className="mb-3">
                            <label className="block mb-2 text-md" htmlFor="">Email</label>
                            <input ref={emailRef} type="email" className="rounded border-none form-input w-80"/>
                        </div>
                        <div>
                            <label className="block mb-2 text-md" htmlFor="">Password</label>
                            <input ref={passwordRef} type="password" className="rounded border-none form-input w-80"/>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="btn bg-green-300 px-10 hover:bg-green-400 py-2" >Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login;