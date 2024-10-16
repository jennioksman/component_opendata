import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import { FindDrink, Header2, OpenData } from './components/coctailcorner'
import { Header1, ProductForm } from './components/productpage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/productpage',
    element: <Productpage/>
  },
  {
    path: '/coctailcorner',
    element: <CoctailCorner/>
  }
])

function App() {

  return ( 
    
    <div>
        <RouterProvider router={router}/>
    </div>
  
  )
}

function Home() {
  return(
    <div>
      <h2>Welcome!</h2>
      <Link to={'/productpage'}>Go to Coctail Corner</Link>
    </div>
  )
}
function Productpage() { 
  return( 
    <div>
      <Header1/>
      <div className='productpage'>
        <ProductForm/>
        <Link to={'/coctailcorner'}>Go to Coctail Corner</Link>
      </div>
    </div>
  )
}
function CoctailCorner() { 
  return( 
    <div>
      <Header2/>
      <div className='component-container'>
        <div className='drink'>
          <OpenData/>
        </div>
        <FindDrink/>
        <Link to={'/'}>Go tback home</Link>
      </div>
  </div>
  )
}
export default App
