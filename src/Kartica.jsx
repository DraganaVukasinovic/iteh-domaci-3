import { BsFillCartFill } from 'react-icons/bs';

 

 function Kartica({p}) {
    return (
        <div class="wrapper">
        <div class="outer">
            <div class="content animated fadeInLeft">
                <span class="bg animated fadeInDown">{p.datum}  {p.vreme}</span>
                <h1>{p.naziv}<br/>  </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis vitae explicabo dolorum quod est illum beatae, praesentium at temporibus nemo tempore quam deserunt dolorem fuga, repellat eveniet repudiandae enim?</p>
                
                <div class="button">
                    <a class="cart-btn" href="#"><BsFillCartFill class="cart-icon ion-bag"></BsFillCartFill>ADD TO CART</a>
                </div>
                
            </div>
            
        </div>
       
    </div>
       
       
    );
  }
  
  export default Kartica;
  