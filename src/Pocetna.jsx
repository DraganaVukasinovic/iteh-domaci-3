import { useState } from "react";
import Kartica from "./Kartica";

 
 

 function Pocetna({predstave,rezervisi}) {
    const [sort, setSort] = useState(true);
    function sortiraj(){
    
        setSort(!sort);
      }
 

    return (
  
         <div className="pocetna">
      <button className="btn primary" onClick={sortiraj}>Sortiraj </button>
            {sort === true ? 
                    
                    predstave
                    .sort((a, b) => a.cena < b.cena ? -1 : 1)
                    .map((p)=><Kartica key={p.id} p={p} rezervisi={rezervisi}></Kartica>)
            :
                    predstave
                    .sort((a, b) => a.cena > b.cena ? -1 : 1)
                    .map((p)=><Kartica key={p.id} p={p} rezervisi={rezervisi}></Kartica>)
            }






             
         </div>
       
    );
  }
  
  export default Pocetna;
  