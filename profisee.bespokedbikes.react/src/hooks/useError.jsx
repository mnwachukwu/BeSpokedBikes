import { useState, useCallback } from "react";

const useError = (timeout = 4000) => {
    const [error, setError] = useState("");

    // Show an error, and automatically hide it after the timeout in ms
    const showError = useCallback(
        (message) => {
            setError(message);
            setTimeout(() => setError(""), timeout);
        },
        [timeout]
    );

    return { error, showError };
}

export default useError;