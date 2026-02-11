import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const apiUrl = "https://localhost:44390";

    const login = (salesperson) => {
        setUser(salesperson);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AppContext.Provider value={{ user, login, logout, apiUrl }}>
            {children}
        </AppContext.Provider>
    );
};

// Convenience hook
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
