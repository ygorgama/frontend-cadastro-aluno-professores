import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <header className="py-5 px-6 bg-sky-300/75">
            <div className="flex justify-between">
                <span>Logo</span>
                <nav>
                    <ul className="flex">
                        <li><NavLink to={"/alunos"} className={`mr-4 navigation-link`}>Students</NavLink></li>
                        <li><NavLink to={"/professores"} className={`mr-4 navigation-link`}>Teachers</NavLink></li>
                        <li><NavLink to={"/rooms"} className={`mr-4 navigation-link`}>Rooms</NavLink></li>
                        <li><NavLink to={"/register-user"} className={'navigation-link'}>Register User</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navigation;