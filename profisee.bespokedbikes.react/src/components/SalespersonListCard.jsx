import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "./css/SalespersonListCard.css";

const SalespersonListCard = ({ salesperson }) => {
    const {
        firstName,
        lastName,
        address,
        phoneNumber,
        startDate,
        terminationDate,
        manager
    } = salesperson;

    const navigate = useNavigate();
    const { isManager } = useAppContext();

    const handleEdit = () => {
        navigate("/salesperson/form", {
            state: { salesperson }
        });
    };

    return (
        <div className="salesperson-card">
            <div className="card-header">
                <div className="header-left">
                    <div className="avatar">
                        <span>
                            {firstName?.[0]}
                            {lastName?.[0]}
                        </span>
                    </div>

                    <div className="header-text">
                        <h3>{firstName} {lastName}</h3>
                        <p className="subtle">
                            {manager
                                ? `Reports to ${manager.firstName} ${manager.lastName}`
                                : "Manager"}
                        </p>
                    </div>
                </div>

                {/* Edit icon */}
                {isManager &&
                    <button
                        className="edit-btn"
                        onClick={handleEdit}
                        title="Edit Salesperson"
                    >
                        ✏️
                    </button>
                }
            </div>

            <div className="card-body">
                <div className="row">
                    <span className="label">Address</span>
                    <span className="value">
                        {address?.formattedAddress || "N/A"}
                    </span>
                </div>

                <div className="row">
                    <span className="label">Phone Number</span>
                    <span className="value">
                        {phoneNumber || "N/A"}
                    </span>
                </div>

                <div className="row">
                    <span className="label">Start Date</span>
                    <span className="value">
                        {startDate
                            ? new Date(startDate).toLocaleDateString()
                            : "N/A"}
                    </span>
                </div>

                <div className="row">
                    <span className="label">Employment Status</span>
                    <span className={`value ${terminationDate ? "terminated" : "active"}`}>
                        {terminationDate
                            ? new Date(terminationDate).toLocaleDateString()
                            : "Active"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SalespersonListCard;
