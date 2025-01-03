import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h2>404 - Not Found</h2>
            <p>This is not the page you're looking for.</p>
            <p>
                <Link to={"/"}>Return to home.</Link>
            </p>
        </div>
    )
}

export default NotFound;