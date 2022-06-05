import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.styles.css';

const Header = ({ user }) => {
    const mystyle = {
        color: "grey",
        textDecoration: "none",
        position:"center",
        
        paddingTop: "25%",
        marginTop: "20%"
        
    
      };
    
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light   fixed-top header-container">
            <NavLink className="navbar-brand" to="/home">
                <span className='r' style={{color: "red"}}>R</span><span style={{color: "rgb(186, 249, 91)"}} className='g'>News</span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    
                    <li className="nav-item">

                    <a href="http://127.0.0.1:3001/home" style={mystyle} >Home</a>
                    </li>

                    <li className="nav-item">

                    <a href="http://127.0.0.1:3001/sources" style={mystyle} >Sources</a>
                    </li>
                    <li className="nav-item">
                        <a href="http://127.0.0.1:3002" style={mystyle} >Search</a>
                    </li>
                    <li className="nav-item">
                        <a href="http://127.0.0.1:5000" style={mystyle}>fake news detection</a>
                    </li>
                    <li className="nav-item">
                        <a href="http://127.0.0.1:3000" style={mystyle}>twitter news</a>
                    </li>
                    {!user &&
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login" style={mystyle}>Login</NavLink>
                        </li>
                    }
                    {user && <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {user.name}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" to="/">Home</NavLink>
                            <NavLink className="dropdown-item" to="/sources">Sources</NavLink>
                            <div className="dropdown-divider"></div>
                            <NavLink className="dropdown-item" to="/logout">Logout</NavLink>
                        </div>
                    </li>}
                </ul>
            </div>
        </nav>
    );
}

export default Header;