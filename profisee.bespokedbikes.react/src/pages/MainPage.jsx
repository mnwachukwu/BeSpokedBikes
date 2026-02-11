import "./css/Main.css";
import useError from "../hooks/useError";
import ErrorToast from "../components/ErrorToast";
import Navbar from '../components/Navbar';

const MainPage = () => {
    const { error, showError } = useError();
    const navLinks = [
        { label: "Dashboard", href: "/main" },
        { label: "Salespeople", href: "/salespeople" },
        { label: "Products", href: "/products" },
        { label: "Customers", href: "/customers" },
        { label: "Sales", href: "/sales" },
    ];

    return (
        <div className="main-bg">
            <Navbar links={navLinks} />
            <ErrorToast message={error} />
            <div className="main-card">
                <h1>BeSpoked Bikes</h1>
                <h1 className="subtitle">Operations Dashboard</h1>

                <div className="groups-container">
                    {/* Personnel */}
                    <div className="group">
                        <h2>Personnel Operations</h2>
                        <button onClick={() => console.log("List Salespeople")}>
                            List Salespeople
                        </button>
                        <button onClick={() => console.log("Add Salesperson")}>
                            Add Salesperson
                        </button>

                        <hr className="group-divider" />

                        <button onClick={() => console.log("Quarterly Commission Report")}>
                            Quarterly Commission Report
                        </button>
                    </div>

                    {/* Sales Operations */}
                    <div className="group">
                        <h2>Sales Operations</h2>
                        <button onClick={() => console.log("List Products")}>List Products</button>
                        <button onClick={() => console.log("Add Product")}>Add Product</button>

                        <hr className="group-divider" />

                        <button onClick={() => console.log("List Sales")}>List Sales</button>
                        <button onClick={() => console.log("New Sale")}>New Sale</button>
                    </div>

                    {/* Customer Operations */}
                    <div className="group">
                        <h2>Customer Operations</h2>
                        <button onClick={() => console.log("List Customers")}>List Customers</button>
                        <button onClick={() => console.log("New Customer")}>New Customer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
