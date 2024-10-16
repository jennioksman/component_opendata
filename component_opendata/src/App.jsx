import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import { FindDrink, Header2, OpenData } from './components/coctailcorner'
import { Header1, ProductForm } from './components/productpage'
import './App.css' 

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
      <ProductForm/>
      <Link to={'/coctailcorner'}>Go to Coctail Corner</Link>
    </div>
  )
}
function CoctailCorner() { 
  return( 
    <div>
      <Header2/>
      <OpenData/>
      <FindDrink/>
      <Link to={'/'}>Go tback home</Link>
  </div>
  )
}
export default App
