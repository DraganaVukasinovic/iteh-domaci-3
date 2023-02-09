 
 import { Link } from "react-router-dom";

function Navbar() {
  return (
     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        < Link  to="/" className="navbar-brand">Predstave</Link>

        < Link  to="/pregledi" className="nav-link">O nama</Link>
 


        </nav>


     
  );
}

export default Navbar;
