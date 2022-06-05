import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import './header.styles.css';


const Header = () => {
  const mystyle = {
    color: "grey",
    textDecoration: "none",
    position:"center",
    
    paddingTop: "25%",
    marginTop: "20%"
    

  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light   fixed-top header-container">
            
                <span className='r' style={{color: "red"}}>R</span>
                <span style={{color: "rgb(186, 249, 91)"}} className='g'>News</span>
            <span className="space"></span>
            
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
                   
                    
                </ul>
            </div>
        </nav>
    
  );
};

export default Header;
