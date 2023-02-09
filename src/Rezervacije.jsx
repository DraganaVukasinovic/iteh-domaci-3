import { useState } from "react";
import Kartica from "./Kartica";

 
 

 function Rezervacije({rezervacije}) {
 

    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Naziv</th>
            <th scope="col">Rezija</th>
            <th scope="col">Datum vreme</th>
          </tr>
        </thead>
        <tbody>
            {

                rezervacije.map((p)=> <tr>
                                        <th scope="row">{p.id}</th>
                                        <td>{p.naziv}</td>
                                        <td>{p.rezija}</td>
                                        <td>{p.datum}  {p.vreme}</td>
                                    </tr>
              )
                

            }
         
     
        </tbody>
      </table>
      
                    
      




             
        
       
    );
  }
  
  export default Rezervacije;
  