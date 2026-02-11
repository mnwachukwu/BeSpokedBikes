import { useEffect, useState } from "react";
import SalespersonListCard from "../components/SalespersonListCard";
import './css/SalespersonList.css';
import useError from "../hooks/useError";
import ErrorToast from "../components/ErrorToast";
import Navbar from '../components/Navbar';

const SalespeopleListPage = () => {
    const [salespeople, setSalespeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const { error, showError } = useError();

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

    return (
        <div className="main-bg">
            <Navbar />
            <ErrorToast message={error} />
            <div className="salesperson-list main-card">
                <h1>The Sales Team</h1>
                <h2 className="subtitle">Our people are what makes us great</h2>

                <div className="salespeople-container">
                    {salespeople.length > 0 ? (
                        salespeople.map((sp) => (
                            <SalespersonListCard key={sp.id} salesperson={sp} />
                        ))
                    ) : (
                        <p>No salespeople available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SalespeopleListPage;
