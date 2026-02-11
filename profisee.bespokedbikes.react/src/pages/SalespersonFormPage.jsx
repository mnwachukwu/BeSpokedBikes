import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import useError from "../hooks/useError";
import ErrorToast from "../components/ErrorToast";
import Navbar from '../components/Navbar';
import "./css/SalespersonForm.css";

const SalespersonFormPage = ({ salesperson }) => {
    const emptySalesperson = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        startDate: "",
        terminationDate: null,
        address: {
            line1: "",
            line2: "",
            line3: "",
            city: "",
            state: "",
            zip: "",
            country: ""
        }
    };
    const location = useLocation();
    salesperson = location.state?.salesperson;
    const [salespeople, setSalespeople] = useState([]);
    const [salespersonForm, setSalesPersonForm] = useState(salesperson ?? emptySalesperson);
    const [loading, setLoading] = useState(true);
    const { error, showError } = useError();
    const { apiUrl } = useAppContext();
    const preexistingSalesperson = salespersonForm?.id && true;
    const navigate = useNavigate();

    const updateField = (field, value) => {
        setSalesPersonForm(prev => ({ ...prev, [field]: value }));
    };

    const updateAddress = (field, value) => {
        setSalesPersonForm(prev => ({
            ...prev,
            address: { ...prev.address, [field]: value }
        }));
    };

    const fetchSalespeople = async () => {
        try {
            const response = await fetch(`${apiUrl}/Salesperson/List`);

            if (!response.ok) {
                throw new Error(`Failed to load salespeople (HTTP ${response.status})`);
            }

            const data = await response.json();
            setSalespeople(data);
        } catch (err) {
            showError(err.message || "Unable to load salespeople");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSalespeople();
    }, [showError]);

    const fetchSalesperson = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/Salesperson/${id}`);

            if (!response.ok) {
                throw new Error(`Failed to load salesperson (HTTP ${response.status})`);
            }

            const data = await response.json();
            console.log("Fetched salesperson:", data);
            return data;
        } catch (err) {
            showError(err.message || "Unable to load salespeople");
            return null;
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${apiUrl}/Salesperson/Update`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(salespersonForm)
            });

            if (!response.ok) {
                throw new Error(`HTTP error; status: ${response.status}`);
            }

            const data = await response.json();

            if (!data.success) {
                throw new Error("The operation was not successful.");
            }

            console.log("Updated salesperson:", data);
            navigate("/main");
        } catch (error) {
            console.error("Failed to update salesperson:", error);
            showError("Failed to update salesperson. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleManagerChange = async (e) => {
        const id = e.target.value;

        setLoading(true);

        try {
            const manager = await fetchSalesperson(id);
            updateField("manager", manager);
        } catch (err) {
            console.error(err);
            showError("Failed to fetch manager");
        } finally {
            setLoading(false);
        }
    };

const formatDate = (dateString) =>
    dateString ? dateString.split("T")[0] : "";

    return (
        <div className="main-bg">
            <Navbar />
            <ErrorToast message={error} />

            <div className="main-card form-card">
                <h1>{preexistingSalesperson ? "Edit Salesperson" : "Add Salesperson"}</h1>
                <h2 className="subtitle">
                    {preexistingSalesperson ? "Update an existing record" : "Create a new record"}
                </h2>

                <form onSubmit={handleSubmit} className="salesperson-form">
                    {/* Basic Info */}
                    <div className="form-section">
                        <h2>Basic Information</h2>

                        <div className="field-row">
                            <div className="field-wrapper">
                                <label>First Name</label>
                                <input
                                    value={salespersonForm.firstName}
                                    onChange={e => updateField("firstName", e.target.value)}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label>Last Name</label>
                                <input
                                    value={salespersonForm.lastName}
                                    onChange={e => updateField("lastName", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="field-wrapper">
                            <label>Phone Number</label>
                            <input
                                value={salespersonForm.phoneNumber}
                                onChange={e => updateField("phoneNumber", e.target.value)}
                            />
                        </div>

                        <div className="field-row">
                            <div className="field-wrapper">
                                <label>Start Date</label>
                                <input
                                    type="date"
                                    value={formatDate(salespersonForm.startDate)}
                                    onChange={e => updateField("startDate", e.target.value)}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label>Termination Date</label>
                                <input
                                    type="date"
                                    value={(salespersonForm.terminationDate && formatDate(salespersonForm.terminationDate)) || ""}
                                    onChange={e => updateField("terminationDate", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="field-wrapper">
                            <label>Manager</label>
                            <select
                                value={salespersonForm.manager?.id}
                                onChange={handleManagerChange}
                            >
                                <option value={null}>No Manager</option>
                                {salespeople.map(sp => (
                                    <option key={sp.id} value={sp.id}>
                                        {sp.firstName} {sp.lastName}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <hr className="group-divider" />

                    {/* Address */}
                    <div className="form-section">
                        <h2>Address</h2>

                        <div className="field-wrapper">
                            <label>Line 1</label>
                            <input
                                value={salespersonForm.address.line1}
                                onChange={e => updateAddress("line1", e.target.value)}
                            />
                        </div>
                        <div className="field-wrapper">
                            <label>Line 2</label>
                            <input
                                value={salespersonForm.address.line2}
                                onChange={e => updateAddress("line2", e.target.value)}
                            />
                        </div>
                        <div className="field-wrapper">
                            <label>Line 3</label>
                            <input
                                value={salespersonForm.address.line3}
                                onChange={e => updateAddress("line3", e.target.value)}
                            />
                        </div>

                        <div className="field-row">
                            <div className="field-wrapper">
                                <label>City</label>
                                <input
                                    value={salespersonForm.address.city}
                                    onChange={e => updateAddress("city", e.target.value)}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label>State</label>
                                <input
                                    value={salespersonForm.address.state}
                                    onChange={e => updateAddress("state", e.target.value)}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label>Zip</label>
                                <input
                                    value={salespersonForm.address.zipCode}
                                    onChange={e => updateAddress("zipCode", e.target.value)}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label>Country</label>
                                <input
                                    value={salespersonForm.address.country}
                                    onChange={e => updateAddress("country", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" disabled={loading}>
                        {preexistingSalesperson ? "Save Changes" : "Create Salesperson"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SalespersonFormPage;
