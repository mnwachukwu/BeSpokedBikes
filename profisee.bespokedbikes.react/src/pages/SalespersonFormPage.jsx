import { useState, useEffect } from "react";
import useError from "../hooks/useError";
import ErrorToast from "../components/ErrorToast";
import Navbar from '../components/Navbar';
import "./css/SalespersonForm.css";

const SalespersonFormPage = ({ salesperson, onSubmit }) => {
    const emptySalesperson = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        startDate: "",
        terminationDate: "",
        managerId: "",
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

    const navLinks = [
        { label: "Dashboard", href: "/main" },
        { label: "Salespeople", href: "/salespeople" },
        { label: "Products", href: "/products" },
        { label: "Customers", href: "/customers" },
        { label: "Sales", href: "/sales" },
    ];

    const [salespeople, setSalespeople] = useState([]);
    const [form, setForm] = useState(salesperson ?? emptySalesperson);
    const [loading, setLoading] = useState(true);
    const { error, showError } = useError();

    const updateField = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const updateAddress = (field, value) => {
        setForm(prev => ({
            ...prev,
            address: { ...prev.address, [field]: value }
        }));
    };

    const fetchSalespeople = async () => {
        try {
            const response = await fetch("https://localhost:44390/Salesperson/List");

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


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <div className="main-bg">
            <Navbar links={navLinks} />
            <ErrorToast message={error} />

            <div className="main-card form-card">
                <h1>{salesperson ? "Edit Salesperson" : "Add Salesperson"}</h1>
                <h2 className="subtitle">
                    {salesperson ? "Update an existing record" : "Create a new record"}
                </h2>

                <form onSubmit={handleSubmit} className="salesperson-form">
                    {/* Basic Info */}
                    <div className="form-section">
                        <h2>Basic Information</h2>

                        <div className="field-row">
                            <div className="field-wrapper">
                                <label>First Name</label>
                                <input
                                    value={form.firstName}
                                    onChange={e => updateField("firstName", e.target.value)}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label>Last Name</label>
                                <input
                                    value={form.lastName}
                                    onChange={e => updateField("lastName", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="field-wrapper">
                            <label>Phone Number</label>
                            <input
                                value={form.phoneNumber}
                                onChange={e => updateField("phoneNumber", e.target.value)}
                            />
                        </div>

                        <div className="field-row">
                            <div className="field-wrapper">
                                <label>Start Date</label>
                                <input
                                    type="date"
                                    value={form.startDate}
                                    onChange={e => updateField("startDate", e.target.value)}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label>Termination Date</label>
                                <input
                                    type="date"
                                    value={form.terminationDate || ""}
                                    onChange={e => updateField("terminationDate", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="field-wrapper">
                            <label>Manager</label>
                            <select
                                value={form.managerId}
                                onChange={e => updateField("managerId", e.target.value)}
                            >
                                <option value="">No Manager</option>
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
                                value={form.address.line1}
                                onChange={e => updateAddress("line1", e.target.value)}
                            />
                        </div>
                        <div className="field-wrapper">
                            <label>Line 2</label>
                            <input
                                value={form.address.line2}
                                onChange={e => updateAddress("line2", e.target.value)}
                            />
                        </div>
                        <div className="field-wrapper">
                            <label>Line 3</label>
                            <input
                                value={form.address.line3}
                                onChange={e => updateAddress("line3", e.target.value)}
                            />
                        </div>

                        <div className="field-row">
                            <div className="field-wrapper">
                                <label>City</label>
                                <input
                                    value={form.address.city}
                                    onChange={e => updateAddress("city", e.target.value)}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label>State</label>
                                <input
                                    value={form.address.state}
                                    onChange={e => updateAddress("state", e.target.value)}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label>Zip</label>
                                <input
                                    value={form.address.zip}
                                    onChange={e => updateAddress("zip", e.target.value)}
                                />
                            </div>
                            <div className="field-wrapper">
                                <label>Country</label>
                                <input
                                    value={form.address.country}
                                    onChange={e => updateAddress("country", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit">
                        {salesperson ? "Save Changes" : "Create Salesperson"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SalespersonFormPage;
