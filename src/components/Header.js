import React from "react"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-default" >
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/customers'>Customers</Link></li>
                    </ul>
                </div>
            </div >
        </nav >
    );
}
export default Header;