import React, { useState } from 'react';
import applewatch from "./Applewatching.png"
import JBL from "./JBL.png"
import iphone from "./Iphone.png"
import notebook from "./Notebook.png"
import headset from "./HeadSet.png"
import foneblue from "./Fone blue.png"
import applehome from "./Apple home.png"
import ipad from "./Ipad.png"
import Carrinho from "./Carrinho.png"
import './App.css';


function App() {

  const [total, setTotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const products = [
    { id: 1, name: "Apple Watch Series 4 GPS", price: 399, image: applewatch },
    { id: 2, name: "JBL Speaker", price: 199, image: JBL },
    { id: 3, name: "Apple iPhoneX 128GB", price: 899, image: iphone },
    { id: 4, name: "Beats Headphones", price: 459, image: headset },
    { id: 5, name: "Apple Macbook Pro", price: 2499, image: notebook },
    { id: 6, name: "Apple iPad Pro 64GB", price: 899, image: ipad },
    { id: 7, name: "Apple Homepod", price: 399, image: applehome },
    { id: 8, name: "JBuds Air Wireless", price: 249, image: foneblue },
  ];

  const addToCart = (price) => {
    setTotal(total + price);
    setItemCount(itemCount + 1);
  };


  function opencarrinho(menu) {
    var menucarrinho = document.querySelector(".menu");
    
    menucarrinho.style.display = "block"
  }

  function closeCarrinho() {
    var menucarrinho = document.querySelector('.menu');
    
    menucarrinho.style.display = 'none';
  }


  return (
    <div className="App">
      <header className="App-header">

      <div className="menu">
      
      <span className='closecarrinho' onClick={closeCarrinho}> X </span>
        <h1> Carrinho de compras </h1>
        <h2> Total: </h2>
        <button> Finalizar compra </button>
       </div>

       

       

       
       
      <div className="logo">
       <h1> MKS </h1> 
       <p> Sistemas </p>
       </div>

       <div className="Carrinho" onClick={opencarrinho}>
        <img src={Carrinho} alt="carrinho" /> 
        <p> 0 </p>
       </div>

      


      </header>

      <main className="produtos">

        <div className="produto1">
          <img src={applewatch} alt="Applewatch"/>
          <h1> Apple Watch Series 4 GPS </h1>
          <span> Redesigned from scratch and completely revised. </span>


          <div className="preço">
            <tr> R$399 </tr>

            
          </div>

          <button type="submit" onClick={addToCart}> COMPRAR </button>
          
        </div>

        <div className="produto2">
        <img src={JBL} alt="JBL"/>
          <h1> JBL Speaker </h1>
          <span> Redesigned from scratch and completely revised. </span>


          <div className="preço">
            <tr> R$199 </tr>
          </div>

          <button type="submit"> COMPRAR </button>

        </div>

        <div className="produto3">
        <img src={iphone} alt="IphoneX"/>
          <h1> Apple iPhoneX 128GB </h1>
          <span> Redesigned from scratch and completely revised. </span>


          <div className="preço">
            <tr> R$899 </tr>
          </div>

          <button type="submit"> COMPRAR </button>

        </div>

        <div className="produto4">
        <img src={headset} alt="HeadSet"/>
          <h1> Beats Headphones </h1>
          <span> Redesigned from scratch and completely revised. </span>


          <div className="preço">
            <tr> R$459 </tr>
          </div>

          <button type="submit"> COMPRAR </button>

        </div>

        <div className="produto5">

        <img src={notebook} alt="Notebook"/>
          <h1> Apple Macbook Pro </h1>
          <span> Redesigned from scratch and completely revised. </span>


          <div className="preço">
            <tr> R$2.499 </tr>
          </div>

          <button type="submit"> COMPRAR </button>

        </div>

        <div className="produto6">

        <img src={ipad} alt="Ipad"/>
          <h1> Apple iPad Pro 64GB </h1>
          <span> Redesigned from scratch and completely revised. </span>


          <div className="preço">
            <tr> R$899 </tr>
          </div>

          <button type="submit"> COMPRAR </button>
          
        </div>

        <div className="produto7">

        <img src={applehome} alt="Applewatch"/>
          <h1> Apple Homepod </h1>
          <span> Redesigned from scratch and completely revised. </span>


          <div className="preço">
            <tr> R$399 </tr>
          </div>

          <button type="submit"> COMPRAR </button>

        </div>

        <div className="produto8">

        <img src={foneblue} alt="Fone bluethooth"/>
          <h1> JBuds Air Wireless </h1>
          <span> Redesigned from scratch and completely revised. </span>


          <div className="preço">
            <tr> R$249 </tr>
          </div>

          <button type="submit"> COMPRAR </button>
          
        </div>

      </main>

      <footer>
        <span> MKS sistemas © Todos os direitos reservados </span>
      </footer>
    </div>
  );
}





export default App;
