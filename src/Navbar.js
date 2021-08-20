import {Link} from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

  const [Click, setClick] = useState(false);
  const handleClick= () => setClick(!Click);
  const closeMobileMenu= () => setClick(false)
  
  return (
  <nav className="NavBar">
    <div className="container">
      <div className="navCon">
        <h3 className="Title"> Kalon </h3>
        <div className="openHamMenu" onClick={handleClick}>
           <i className={Click ? "fa fa-times" : "fas fa-gem"} />  
        </div>
        
        <div className={Click? "NavList active" : "NavList"}>
          <span className="Home navLinks"><Link to="/"onClick={closeMobileMenu}>Home</Link></span>
          <span className="AboutUs navLinks"><Link to="/about"onClick={closeMobileMenu}>About Us</Link></span>
          <span className="Products navLinks"><Link to="/products"onClick={closeMobileMenu}>Products</Link></span>
          <span className="ContactUs navLinks"><Link to="/contactus"onClick={closeMobileMenu}>Contact Us</Link></span>
        </div>         
      </div>
    </div>
  </nav>
);
}
 
export default Navbar;