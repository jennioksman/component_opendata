import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {

  return ( 
    <>
      <OpenData/>
      <FindDrink/>
    </>
  )
}

function Header() {
  return ( 
    <div className='header'>
      <img src="./src/assets/MBMIlogo.png" alt="logo" />
      <h1>Welcome to product page!</h1>
    </div>
  )
}

function Header2() {
  return ( 
    <div className='header'>
      <img src="./src/assets/cclogo.webp" alt="logo" />
      <h1>Welcome to Coctail Corner!</h1>
    </div>
  )
}

function ProductForm() {

  const [product, setProduct] = useState(' ')
  const [price, setPrice] = useState(null)
  const [st, setSt] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const products = [
    { name: "Wooden Hook 3mm", price: 7.90 },
    { name: "Wooden Needles 4mm", price: 10.80 },
    { name: "Cotton-merino 50g", price: 4.90 },
    { name: "Kid-Silk 50g", price: 6.90 },
    { name: "Merino Extra Fine 50g", price: 4.90 }
  ]

  const handleChange = (event) => {
    const selectedProduct = products.find(p => p.name === event.target.value)
    setProduct(selectedProduct.name)
    setPrice(selectedProduct.price)
    setSt(1)
  }

  useEffect(() => {
    setTotalPrice(price * st)
  }, [price, st]);

  return (
    <div>
      <h3>Select product</h3>
      <div className='product'>
        <p>Product: </p>
        <select value={product} onChange={handleChange}>
          <option value=" " disabled>Choose a product</option>
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
      {product !== " " && (
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
                <td>{totalPrice.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function OpenData() {

  const [drink, setDrink] = useState(null)
  const [img, setImg] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [reciep, setReciep] = useState(null)
  const [text, setText] = useState('')

  async function getDrink() {
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      const data = response.data.drinks[0]
      setDrink(data.strDrink)
      setImg(data.strDrinkThumb)
      setReciep(data.strInstructions)

      // Käydään läpi ainesosat (strIngredient1 - strIngredient15)
      const ingredientList = []
      for (let i = 1; i <= 15; i++) {
        const ingredient = data[`strIngredient${i}`]
        const measure = data[`strMeasure${i}`]
        if (ingredient) {
          ingredientList.push(`${measure ? measure : ''} ${ingredient}`)
        }
      }
      setIngredients(ingredientList)
      setText('How about: ')

    } catch (error) {
      console.error('ei löytynnä mittään', error)
    }  
  }

  return(
    <div>
      <div className='drink'>
        <h3>I am so bored!</h3>
        <button onClick={getDrink}>Get me a drink!</button>
      </div>
      <h3>{text} {drink}</h3>
      <img src={img} />
      <ul>
        {
          ingredients.map((ingr, index) => (
          <li key={index}>{ingr}</li>
          ))
        }
      </ul>
      <p>{reciep}</p>
    </div>
  )
}

function FindDrink() {

  const [search, setSearch] = useState('')
  const [coctail, setCoctail] = useState(null)
  const [img, setImg] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [reciep, setReciep] = useState(null)

  async function getCoctail(){

    try{
      console.log({search})
      const response = await axios('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+search);
      const data = response.data.drinks[0]
      setCoctail(data.strDrink)
      setImg(data.strDrinkThumb)
      setReciep(data.strInstructions)

      // Käydään läpi ainesosat (strIngredient1 - strIngredient15)
      const ingredientList = []
      for (let i = 1; i <= 15; i++) {
        const ingredient = data[`strIngredient${i}`]
        const measure = data[`strMeasure${i}`]
        if (ingredient) {
          ingredientList.push(`${measure ? measure : ''} ${ingredient}`)
        }
      }
      setIngredients(ingredientList)
      
    }catch(e){
      setCoctail('ei löytynnä')
    }
  }

  return (
    <div>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
      <button onClick={getCoctail}>Search</button>
      <h1>{coctail}</h1>
      <img src={img} />
      <ul>
        {
          ingredients.map((ingr, index) => (
          <li key={index}>{ingr}</li>
          ))
        }
      </ul>
      <p>{reciep}</p>
    </div>
)

}

export default App
