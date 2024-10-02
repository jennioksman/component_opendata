import { useState, useEffect } from 'react'
import './App.css'

function App() {

  return ( //Koodia on kätevä toistaa, koska voi käyttää samaa komponenttia toistamatta koodia
    <>
      <Header />
      <ProductForm />
    </>
  )
}

function Header() {
  return ( //Voi palauttaa vain yhden elementin eli h1 ja p on laitettava "divin" sisään
    <div className='header'>
      <div><img src="./src/assets/MBMIlogo.png" alt="logo" /></div>
      <div><h1>Welcome to product page!</h1></div>
    </div>
  )
}

function ProductForm() {

  const [product, setProduct] = useState("choose")
  const [price, setPrice] = useState(null)
  const [st, setSt] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0);

  const products = [
    { name: "Wooden Hook 3mm", price: 7.90 },
    { name: "Wooden Needles 4mm", price: 10.80 },
    { name: "Cotton-merino 50g", price: 4.90 },
    { name: "Kid-Silk 50g", price: 6.90 },
    { name: "Merino Extra Fine 50g", price: 4.90 }
  ]

  const handleChange = (event) => {
    const selectedProduct = products.find(p => p.name === event.target.value);
    setProduct(selectedProduct.name);
    setPrice(selectedProduct.price);
    setSt(1)
    console.log("Selected Product Price:", selectedProduct.price);
  }

  useEffect(() => {
    // Lasketaan kokonaishinta, kun tuote tai kappalemäärä muuttuu
    setTotalPrice(price * st);
    console.log(totalPrice)
  }, [price, st]);

  return (
    <div>
      <h3>Select product</h3>
      <div className='product'>
        <p>Product: </p>
        <select value={product} onChange={handleChange}>
          {
            products.map(p => <option key={p.name} value={p.name}>{p.name} ({p.price})€</option>)
          }
        </select>
      </div>
      <div className='quantity'>
        <p>Quantity: </p>
        <button onClick={() => setSt(prev => prev > 0 ? prev - 1 : 0)}>-</button>
        <p>{st}</p>
        <button onClick={() => setSt(prev => prev + 1)}>+</button>
      </div>
      <h3>Order Info</h3>
      <div className='array'>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product}</td>
              <td>{st}</td>
              <td>{totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
