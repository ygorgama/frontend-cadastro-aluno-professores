import { NavLink, useRouteLoaderData } from "react-router-dom";

const Navigation = () => {
    const token = useRouteLoaderData('root');

    return (
        <>
        {token && (
                <header className="py-5 px-6 bg-sky-300/75">
                    <div className="flex justify-between">
                        <span>Logo</span>
                        <nav>
                            <ul className="flex">
                                <li><NavLink to={"/students"} className={`mr-4 navigation-link`}>Students</NavLink></li>
                                <li><NavLink to={"/teachers"} className={`mr-4 navigation-link`}>Teachers</NavLink></li>
                                <li><NavLink to={"/rooms"} className={`mr-4 navigation-link`}>Rooms</NavLink></li>
                                <li><NavLink to={"/register-user"} className={'navigation-link'}>Register User</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            )
        }
        </>
    )
}

export default Navigation;