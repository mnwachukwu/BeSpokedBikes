import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import useError from "../hooks/useError";
import ErrorToast from "../components/ErrorToast";
import Navbar from '../components/Navbar';
import "./css/QuarterlyCommissionReport.css";

const QuarterlyCommissionReportPage = () => {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);
    const { error, showError } = useError();
    const { apiUrl } = useAppContext();

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

    const reportData = Object.values(
        sales.reduce((acc, sale) => {
            const sp = sale.salesperson;
            if (!sp) return acc;

            const key = sp.id;

            if (!acc[key]) {
                acc[key] = {
                    id: sp.id,
                    name: `${sp.firstName} ${sp.lastName}`,
                    itemsSold: 0,
                    revenue: 0,
                    commission: 0
                };
            }

            acc[key].itemsSold += sale.itemsSold || 0;
            acc[key].revenue += sale.totalSalePrice || 0;
            acc[key].commission += sale.totalCommission || 0;

            return acc;
        }, {})
    );

    const topSalesperson = reportData.reduce(
        (top, current) =>
            !top || current.commission > top.commission ? current : top,
        null
    );

    return (
        <div className="main-bg commission-report">
            <Navbar />
            <ErrorToast message={error} />

            <h1>Quarterly Commission Report</h1>

            {topSalesperson && (
                <div className="top-performer">
                    <div className="badge">Top Performer</div>

                    <div className="top-content">
                        <div className="top-name">
                            {topSalesperson.name}
                        </div>

                        <div className="top-metrics">
                            <div>
                                <span className="label">Items Sold</span>
                                <dashboard>{topSalesperson.itemsSold}</dashboard>
                            </div>

                            <div>
                                <span className="label">Revenue</span>
                                <dashboard>
                                    ${topSalesperson.revenue.toLocaleString()}
                                </dashboard>
                            </div>

                            <div>
                                <span className="label">Commission</span>
                                <dashboard className="highlight">
                                    ${topSalesperson.commission.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                </dashboard>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="commission-list commission-report main-card">
                <div className="commission-header">
                    <span>Salesperson</span>
                    <span>Items Sold</span>
                    <span>Revenue</span>
                    <span>Commission</span>
                </div>

                {reportData.map(row => (
                    <div className="commission-row" key={row.id}>
                        <span className="name">{row.name}</span>
                        <span>{row.itemsSold}</span>
                        <span>${row.revenue.toLocaleString()}</span>
                        <span className="highlight">
                            ${row.commission.toLocaleString(undefined, {
                                minimumFractionDigits: 2
                            })}
                        </span>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default QuarterlyCommissionReportPage;
