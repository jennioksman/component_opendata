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
  return( //Voi palauttaa vain yhden elementin eli h1 ja p on laitettava "divin" sisään
      <div>
        <h3>Select product</h3>
        <p>Product: </p>
        <p>Quantity: </p>
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
