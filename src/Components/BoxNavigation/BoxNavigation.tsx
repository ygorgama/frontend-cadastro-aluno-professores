import { Link } from "react-router-dom";

interface BoxNavigationProps {
    title: string;
    classNames?: string;
    href: string
}

const BoxNavigation = ({title, classNames, href}: BoxNavigationProps) => {
    return (
        <Link to={href}>
            <article className={"box-links " + classNames}>
                <h3 className="text-gray-600">{title}</h3>
            </article>
        </Link>
    )
} 

export default BoxNavigation;