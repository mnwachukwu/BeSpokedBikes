import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./css/Navbar.css";

const Navbar = () => {
    const { user, logout } = useAppContext();
    const links = [
        { label: "Dashboard", href: "/main" },
        { label: "Salespeople", href: "/salesperson/list" },
        { label: "Products", href: "/products" },
        { label: "Customers", href: "/customers" },
        { label: "Sales", href: "/sales" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="navbar-brand">
                    BeSpoked Bikes
                </div>

                <div className="navbar-links">
                    {links.map((link) => (
                        <NavLink to={link.href} className="navbar-link">
                            {link.label}
                        </NavLink>
                    ))}

                    <a key="logout"
                        href="/"
                        className="navbar-link"
                        onClick={logout}
                    >
                        Logout
                        {user && <span>
                            ,&nbsp;{user.firstName} {user.lastName}
                        </span>}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
