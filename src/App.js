 
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
function App() {





  return (
    <div className="App">
    <BrowserRouter>
          <Navbar   ></Navbar>
          <Routes>
 
        


          </Routes>
        
          <Footer></Footer>

          </BrowserRouter>
    </div>
  );
}

export default App;
