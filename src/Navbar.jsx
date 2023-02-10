 
 import { Link } from "react-router-dom";

function Navbar() {
  return (
     
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        < Link  to="/" className="navbar-brand">Pocetna</Link>

        < Link  to="/rezervacije" className="navbar-brand">Moje rezervacije</Link>
 


        </nav>


     
  );
}

export default Navbar;
