import './css/ErrorToast.css';

const ErrorToast = ({ message }) => {
    if (!message) return null;

    return (
        <div className="error-toast">
            {message}
        </div>
    );
};

export default ErrorToast;