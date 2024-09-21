import { useState } from 'react'
import './App.css'

function App() {

  return( //Koodia on kätevä toistaa, koska voi käyttää samaa komponenttia toistamatta koodia
    <>
       <Header/>
    </>   
)
}

function Header(){
return( //Voi palauttaa vain yhden elementin eli h1 ja p on laitettava "divin" sisään
    <div>
      <div><img src="./src/assets/MBMIlogo.png" alt="logo" /></div>
      <div><h1>Welcome to product page!</h1></div>
    </div>
)
}
export default App
