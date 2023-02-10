 
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import { useState } from 'react';

import './App.css';
import Pocetna from './Pocetna';
import Rezervacije from './Rezervacije';

function App() {

  const [rezervacije,setRezervacije] = useState([]);
  const [predstave] = useState([
        {
          id:1,
          naziv:"IVICA I MARICA",
          rezija:" Isidora Goncić",
          datum: "11.02.2023.",
          vreme: "12h",
          cena:350, 
          rezervisano:0
           
        },
        {
          id:2,
          naziv:"ALADINOVA ČAROBNA LAMPA",
          rezija:" Nikola Zavišić",
          datum: "11.02.2023.",
          vreme: "17h",
          cena:550, 
          rezervisano:0

       
        },
        {
          id:3,
          naziv:"ČUDNA ŠUMA",
          rezija:" Ivana Koraksić",
          datum: "12.02.2023.",
          vreme: "12h",
          cena:450, 
          rezervisano:0
          

        },
        {
          id:4,
          naziv:"TRI PRASETA",
          rezija:" Borislav Mrkšić",
          datum: "12.02.2023.",
          vreme: "17h",
          cena: 650, 
          rezervisano:0
  

        },
        //
  ]);
  function rezervisi(id){

    for(var i=0;i<predstave.length;i++){
      if(predstave[i].id==id){
        predstave[i].rezervisano=1;
      }
    }

     var niz = predstave.filter((p)=>p.rezervisano==1);
     setRezervacije(niz);
 
     console.log(rezervacije)
  }

  return (
    <div className="App">
    <BrowserRouter>
          <Navbar   ></Navbar>
          

          <Routes>
            <Route path="/" element={<Pocetna predstave={predstave} rezervisi={rezervisi}></Pocetna>}></Route>
            <Route path="/rezervacije" element={<Rezervacije rezervacije={rezervacije} ></Rezervacije>}></Route>
 
          


          </Routes>
        
          <Footer></Footer>

          </BrowserRouter>
    </div>
  );
}

export default App;
