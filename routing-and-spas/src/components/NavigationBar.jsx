import { Link, NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-danger" href="#">Marvel</a>
                <button className="navbar-toggler bg-info border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <NavLink to='/' className='nav-link' activeclassname='active'>Home</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <NavLink to='/browse-characters' className='nav-link' activeclassname='active'>Browse Characters</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <NavLink to='/character-details/1017100' className='nav-link' activeclassname='active'>Character Details</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                        <NavLink to='/comics' className='nav-link' activeclassname='active'>Comics</NavLink>
                        </li>
                    </ul>
                </div> 
            </div>
        </nav>
    );
}

export default NavigationBar;