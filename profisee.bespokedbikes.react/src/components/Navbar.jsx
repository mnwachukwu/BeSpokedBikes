import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./css/Navbar.css";

const Navbar = () => {
    const { user, logout } = useAppContext();
    const links = [
        { id: 1, label: "Dashboard", href: "/main" },
        { id: 2, label: "Salespeople", href: "/salesperson/list" },
        { id: 3, label: "Products", href: "/product/list" },
        { id: 4, label: "Customers", href: "/customer/list" },
        { id: 5, label: "Sales", href: "/sale/list" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="navbar-brand">
                    BeSpoked Bikes
                </div>

                <div className="navbar-links">
                    {links.map((link) => (
                        <NavLink key={link.id} to={link.href} className="navbar-link">
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
