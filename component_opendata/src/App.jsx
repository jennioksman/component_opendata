import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'

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
        <h1>Welcome to my page</h1>
        <RouterProvider router={router}/>
    </div>
  
  )
}

function Home() { 
  return( 
    <>
      <h2>Home page</h2>
      <Link to={'../src/components/productpage'}>Go to the product page</Link>
    </> 
  )
}
function Productpage() { 
  return( 
  <>
    <h2>Productpage</h2>
    <Link to={'/coctailcorner'}>Go to Coctail Corner</Link> 
  </>
  )
}
function CoctailCorner() { 
  return( 
  <>
    <h2>Coctail Corner</h2>
    <Link to={'/'}>Go back home</Link> 
  </>
  )
}
export default App
