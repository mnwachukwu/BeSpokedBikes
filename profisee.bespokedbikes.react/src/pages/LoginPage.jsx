import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import useError from "../hooks/useError";
import ErrorToast from "../components/ErrorToast";
import bike from "../assets/Bike.png"
import "./css/Login.css"

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const { error, showError } = useError();
    const { login, apiUrl } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(
                `${apiUrl}/Auth/Login/${encodeURIComponent(username)}`,
                {
                    method: "POST"
                }
            );

            if (!response.ok) {
                throw new Error("Network error");
            }

            const result = await response.json();

            if (!result.success) {
                showError("Invalid username");
                return;
            }

            console.log("Logged in salesperson:", result.salesperson);

            login(result.salesperson);
            navigate("/main");
        } catch (err) {
            console.error(err);
            showError("Unable to reach server. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-bg">
            <ErrorToast message={error} />
            <div className="login-card">
                <div className="image-wrapper">
                    <img src={bike} />
                </div>
                <h1>BeSpoked Bikes</h1>
                <p className="subtitle">Use your first initial and last name to continue.</p>

                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <input
                            type="username"
                            placeholder="Username (no spaces)"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <button className="login-page" type="submit" disabled={loading}>
                        {loading ? "Signing in…" : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
