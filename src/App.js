import './App.css';
import {FaShoppingCart} from 'react-icons/fa'
import { useState } from 'react';

function App() {

  const[cart,setCart] = useState([])

  const [tuotteet, setTuotteet] = useState([
    {name: "Takki",price: 100},
    {name: "Maito",price: 150},
    {name: "Patja",price: 180}
   ])

  const buy = (e, index) => {
    e.preventDefault()
    const product = tuotteet[index]
    setCart([...cart,product])

  }


  return (
    <div id="container">
      <h1>Miljoonia tuottava verkkokauppani</h1>
      <p><FaShoppingCart/> {cart.length}</p>
      {
        tuotteet.map((product,index) =>(
          <div key={index}>
            <form onSubmit={(e) => buy(e,index)}>
              <h3>{product.name}</h3>
              <p>{product.price}€</p>
              <button>Lisää ostoskoriin</button>
            </form>
          </div>
        ))
      }
    </div>
  );
}

export default App;
