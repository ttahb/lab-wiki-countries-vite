import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
            <ul>
                <Link className="navbar-brand" to={"/"}>WikiCountries</Link>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;
