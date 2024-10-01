import { useState } from 'react'
import './App.css'

function App() {

  return( //Koodia on kätevä toistaa, koska voi käyttää samaa komponenttia toistamatta koodia
    <>
       <Header/>
       <ProductForm/>
       <OrderInfo/>
    </>   
)
}

function Header(){
return( //Voi palauttaa vain yhden elementin eli h1 ja p on laitettava "divin" sisään
    <div className='header'>
      <div><img src="./src/assets/MBMIlogo.png" alt="logo" /></div>
      <div><h1>Welcome to product page!</h1></div>
    </div>
)
}

function ProductForm(){

    const [product, setProduct] = useState("choose");
    const [st, setSt] = useState(0)
  
    const handleChange = (event) => {
      setProduct(event.target.value)
    }
  
    return (
      <div>
        <h3>Select product</h3>
        <div className='product'>
          <p>Product: </p>
          <form>
            <select value={product} onChange={handleChange}>
              <option value="choose">Choose option</option>
              <option value="hook">Hook 3mm</option>
              <option value="needels">Needles 6mm</option>
              <option value="yarn">Drops Merino Exrta Fine Beige</option>
            </select>
          </form>
        </div>
        <div className='quantity'>
          <p>Quantity: </p>
          <button onClick={()=> setSt(prev => prev-1)}>-</button>
          <p>{st}</p>
          <button onClick={()=> setSt(prev => prev+1)}>+</button>
        </div>
      </div>
  )
}

  function OrderInfo(){
    return( //Voi palauttaa vain yhden elementin eli h1 ja p on laitettava "divin" sisään
        <div>
          <h3>Order Info</h3>
          <div className='array'>
            <h5>Here is going to be array</h5>
          </div>
        </div>
    )
    }

export default App
