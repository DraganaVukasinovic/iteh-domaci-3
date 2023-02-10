 

 
 

 function Rezervacije({rezervacije}) {
 

    return (
      <div className="rezervacije">
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
      
                    
      </div>




             
        
       
    );
  }
  
  export default Rezervacije;
  