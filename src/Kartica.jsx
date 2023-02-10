 

 

 function Kartica({p,rezervisi}) {
    
    return (
        
        <div className="outer">
            <div className="content animated fadeInLeft">
               
                <h1>{p.naziv}<br/>  </h1>
                <span class="bg animated fadeInDown">{p.datum}  {p.vreme}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.    </p>
                <p> Rezija: {p.rezija}</p>
                <p> Cena: {p.cena} RSD</p>

                
                <div className="button">
                    <a className="cart-btn"   onClick={()=>rezervisi(p.id)}>Rezervisi</a>
                </div>
                
            </div>
            
        </div>
       
    
       
       
    );
  }
  
  export default Kartica;
  