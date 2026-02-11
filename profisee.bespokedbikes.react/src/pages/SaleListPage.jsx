import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import useError from "../hooks/useError";
import Navbar from '../components/Navbar';
import ErrorToast from "../components/ErrorToast";
import "./css/SaleList.css";

const SaleListPage = () => {
    const { apiUrl } = useAppContext();
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);
    const { error, showError } = useError();

    const fetchSales = async () => {
        try {
            const response = await fetch(`${apiUrl}/Sale/List`);

            if (!response.ok) {
                throw new Error(`Failed to load sales (HTTP ${response.status})`);
            }

            const data = await response.json();
            setSales(data);
        } catch (err) {
            showError(err.message || "Unable to load sales");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSales();
    }, [showError]);

    // Aggregate metrics
    const totalItemsSold = sales.reduce(
        (sum, sale) => sum + (sale.itemsSold || 0),
        0
    );

    const totalRevenue = sales.reduce(
        (sum, sale) => sum + (sale.totalSalePrice || 0),
        0
    );

    const totalProfit = sales.reduce((sum, sale) => {
        const profitPerSale = sale.saleProducts.reduce((saleProductSum, saleProduct) => {
            return (
                saleProductSum +
                (saleProduct.soldPrice - saleProduct.product.purchasePrice - saleProduct.commissionCost) * saleProduct.quantity
            );
        }, 0);

        return sum + profitPerSale;
    }, 0);

    return (
        <div className="main-bg">
            <Navbar />
            <ErrorToast message={error} />

            <div className="main-card sales-list">
                <h1>Sales Overview</h1>
                <h2 className="subtitle">A snapshot of the company's performance</h2>

                {/* Sales Summary */}
                <div className="sales-summary">
                    <div className="summary-box blue">
                        <span className="summary-label">Items Sold</span>
                        <span className="summary-value">{totalItemsSold}</span>
                    </div>

                    <div className="summary-box light-green">
                        <span className="summary-label">Total Revenue</span>
                        <span className="summary-value">
                            ${totalRevenue.toLocaleString()}
                        </span>
                    </div>

                    <div className="summary-box dark-green">
                        <span className="summary-label">Total Profit</span>
                        <span className="summary-value">
                            ${totalProfit.toLocaleString()}
                        </span>
                    </div>
                </div>

                {/* Sales List */}
                <div className="sales-list">
                    <div className="sales-header">
                        <span>Items</span>
                        <span>Total</span>
                        <span>Commission</span>
                        <span>Salesperson</span>
                        <span>Customer</span>
                        <span>Date</span>
                    </div>

                    {sales.map(sale => (
                        <div className="sales-row" key={sale.id}>
                            <span>{sale.itemsSold}</span>
                            <span>${sale.totalSalePrice.toLocaleString()}</span>
                            <span>${sale.totalCommission.toLocaleString()}</span>
                            <span>
                                {sale.salesperson.firstName}{" "}
                                {sale.salesperson.lastName}
                            </span>
                            <span>
                                {sale.customer.firstName}{" "}
                                {sale.customer.lastName}
                            </span>
                            <span>
                                {new Date(sale.saleDate).toLocaleDateString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SaleListPage;
