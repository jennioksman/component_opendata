import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import logo from '../assets/MBMIlogo.png'

function HomePage() {
  return (
    <div className='container'>
      <div className='row d-flex flex-row text-center'>
        <h1 className='pt-5'>Wellcome</h1>
      </div>
      <div className='row py-5 justify-content-center'>
        <div className='col-12 col-md-6 col-lg-4 text-center text-md-start'>
          <Logo/>
        </div>
        <div className='col-12 col-md-6 col-lg-4 text-center text-md-start '>
            <h4 className='p-1'> This page is made for Dynamic Web Page Course which is part of my second year IT studies. 
                Because of the course requirements, there are two totally different things on this site.
            </h4>
            <h4 className='p-1'>
                On product page you'll find a very simple and minimal demonstration of choosing and counting products on an ecommerse.</h4> 
            <h4 className='p-1'>
                In Coctail Corner you can get recip for some random coctail or you can search a coctail by name. Page is using REST API.
            </h4>
        </div>
      </div>
    </div>
  )
}

function Logo() {
  return (
    <div className='pb-5'>
      <img src={logo} alt="logo" className='logo' />
    </div>
  )
}

export { HomePage }

