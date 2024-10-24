import { Link } from "react-router-dom";

interface ButtonNavigationInterface{
    classNames: string,
    label: string;
    href: string
}

export default function ButtonNavigation({label, classNames, href}:ButtonNavigationInterface) {
    return (
        <Link to={href} className={"btn px-6 py-1 rounded font-semibold uppercase " + classNames}>
            {label}
        </Link>
    );
}