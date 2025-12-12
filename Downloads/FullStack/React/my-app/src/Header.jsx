// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming your CSS is correct for styling

function Header() {
    return (
        <div className="main">
            <div className="parent">
                <nav>
                    {/* Link path now matches the route path: /Adddata */}
                    <Link to="/Adddata" className="add">Add data</Link> 
                    
                    {/* Link path now matches the route path: /Viewdata */}
                    <Link to="/Viewdata" className="view">View data</Link>
                </nav>
            </div>
        </div>
    );
}
export default Header;