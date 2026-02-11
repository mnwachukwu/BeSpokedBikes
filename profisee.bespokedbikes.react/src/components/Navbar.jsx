import "./css/Navbar.css";

const Navbar = ({ links = [] }) => {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="navbar-brand">
                    BeSpoked Bikes
                </div>

                <div className="navbar-links">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="navbar-link"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a key="logout"
                        href="/"
                        className="navbar-link">
                        Logout
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
