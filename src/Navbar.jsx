 
 import { Link } from "react-router-dom";

function Navbar() {
  return (
     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        < Link  to="/" className="navbar-brand">Predstave</Link>

        < Link  to="/pregledi" className="nav-link">Moje rezervacije</Link>
 


        </nav>


     
  );
}

export default Navbar;
