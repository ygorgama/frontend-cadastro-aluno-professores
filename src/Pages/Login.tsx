import  { FormEvent, useRef, } from "react";
import axios from "axios";
import AuthInterface from "../Interfaces/AuthInterface";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const emailRef  = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigation = useNavigate();

    const resetForm = () => {
        if (passwordRef.current) passwordRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
    };

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
    
        if (response.status == 200) {
            const responseData: AuthInterface  =  response.data as AuthInterface;
    
            localStorage.setItem("token", responseData.token);
            navigation('/');
            resetForm();
        }else{
            console.log("Ocurred an error")
        }

    }

    return (
        <main className="bg-green-300/50 w-full h-screen overflow-hidden">
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
        </main>
    )
}

export default Login;