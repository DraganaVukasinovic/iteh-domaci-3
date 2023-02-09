import Kartica from "./Kartica";

 
 

 function Pocetna({predstave,rezervisi}) {
    return (
       
         <div className="pocetna">
                {predstave.map((p)=><Kartica key={p.id} p={p} rezervisi={rezervisi}></Kartica>)}
      
         </div>
       
    );
  }
  
  export default Pocetna;
  