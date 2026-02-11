import { useState } from "react";
import useError from "../hooks/useError";
import ErrorToast from "../components/ErrorToast";
import "./css/Login.css"
import bike from "../assets/Bike.png"

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const { error, showError } = useError();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Fake delay — replace with real auth
        await new Promise((r) => setTimeout(r, 1200));
        setLoading(false);
        showError("Failed to log in");
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

                    <button type="submit" disabled={loading}>
                        {loading ? "Signing in…" : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
