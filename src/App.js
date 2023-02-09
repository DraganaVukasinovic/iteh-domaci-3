 
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import { useState } from 'react';
import Kartica from './Kartica';
import './App.css';
import Pocetna from './Pocetna';

function App() {


  const [predstave,setPredstave] = useState([
        {
          id:1,
          naziv:"IVICA I MARICA",
          rezija:" Isidora Goncić",
          datum: "11.02.2023.",
          vreme: "12h",
          cena:350, 
           
        },
        {
          id:2,
          naziv:"ALADINOVA ČAROBNA LAMPA",
          rezija:" Nikola Zavišić",
          datum: "11.02.2023.",
          vreme: "17h",
          cena:550, 
       
        },
        {
          id:3,
          naziv:"ČUDNA ŠUMA",
          rezija:" Ivana Koraksić",
          datum: "12.02.2023.",
          vreme: "12h",
          cena:450, 
          

        },
        {
          id:4,
          naziv:"TRI PRASETA",
          rezija:" Borislav Mrkšić",
          datum: "12.02.2023.",
          vreme: "17h",
          cena: 650, 
  

        },
  ]);
  function rezervisi(id){
    console.log(id)
  }

  return (
    <div className="App">
    <BrowserRouter>
          <Navbar   ></Navbar>
          

          <Routes>
            <Route path="/" element={<Pocetna predstave={predstave} rezervisi={rezervisi}></Pocetna>}></Route>
 
          


          </Routes>
        
          <Footer></Footer>

          </BrowserRouter>
    </div>
  );
}

export default App;
