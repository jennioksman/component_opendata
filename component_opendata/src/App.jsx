import { FindDrink, Header2, OpenData } from './components/coctailcorner'
import { Header, ProductForm } from './components/productpage'

function App() {

  return ( 
    <>
      <Header/>
      <ProductForm/>
      <Header2/>
      <div className='component-container'>
        <OpenData/>
        <FindDrink/>
      </div>
    </>
  )
}

export default App
