
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Menu } from 'lucide-react'
import { Page } from './components/coctailcorner'
import { Header, ProductForm } from './components/productpage'
import logoDefault from '../src/assets/bored.webp'
import logoCoctail from '../src/assets/cclogo.webp'
import logoProduct from '../src/assets/MBMIlogo.png';



const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigationBar />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/productpage',
        element: <Productpage />
      },
      {
        path: '/coctailcorner',
        element: <CoctailCorner />
      }
    ]
  }
])


function App() {

  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}


function NavigationBar() {
  const location = useLocation()

  // Valitse kuva reitin mukaan
  let logo;
  switch (location.pathname) {
    case '/productpage':
      logo = logoProduct;
      break;
    case '/coctailcorner':
      logo = logoCoctail;
      break;
    default:
      logo = logoDefault;
  }
  return (
    <div className='nav'>
      <Navbar expand="md" className="bg-*" data-bs-theme="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/productpage">Product page</Nav.Link>
            <Nav.Link as={Link} to="/coctailcorner">Coctail Corner</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Welcome to my page!</h1>
    </div>
  )
}
function Productpage() {
  return (
    <div>
      <Header />
      <div className='productpage'>
        <ProductForm />
      </div>
    </div>
  )
}
function CoctailCorner() {
  return (
    <div >
      <Page />
    </div>
  )
}

function Footer() {
  return (
    <div className='footer'>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <hr className="clearfix w-100 d-md-none pb-0" />
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2025 Copyright:
          <p>Jenni Oksman</p>
        </div>
      </footer>
    </div>
  )
}

export default App
