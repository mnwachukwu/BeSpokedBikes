import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import useError from "../hooks/useError";
import ErrorToast from "../components/ErrorToast";
import Navbar from '../components/Navbar';
import "./css/Main.css";

const MainPage = () => {
    const { error, showError } = useError();
    const { isManager } = useAppContext();
    const navigate = useNavigate();

    const handleQuarterlyReport = (e) => {
        e.preventDefault();

        if (!isManager) {
            showError("You need to be a Manager to use this operation.");
            return;
        }

        navigate("/report");
    }

    return (
        <div className="main-bg">
            <Navbar />
            <ErrorToast message={error} />
            <div className="login-page main-card">
                <h1>BeSpoked Bikes</h1>
                <h2 className="subtitle">Operations Dashboard</h2>

                <div className="groups-container">
                    {/* Personnel */}
                    <div className="group">
                        <h2>Personnel Operations</h2>
                        <button onClick={() => navigate("/salesperson/list")}>
                            List Salespeople
                        </button>
                        <button onClick={() => navigate("/salesperson/form")}>
                            Add Salesperson
                        </button>

                        <hr className="group-divider" />

                        <button onClick={handleQuarterlyReport}>
                            Quarterly Commission Report
                        </button>
                    </div>

                    {/* Sales Operations */}
                    <div className="group">
                        <h2>Sales Operations</h2>
                        <button onClick={() => console.log("List Products")}>List Products</button>
                        <button onClick={() => console.log("Add Product")}>Add Product</button>

                        <hr className="group-divider" />

                        <button onClick={() => navigate("/sale/list")}>List Sales</button>
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
