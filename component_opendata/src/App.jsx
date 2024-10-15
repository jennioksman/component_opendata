import { FindDrink, Header2, OpenData } from './components/coctailcorner'

function App() {

  return ( 
    <>
      <Header2/>
      <div className='component-container'>
        <OpenData/>
        <FindDrink/>
      </div>
    </>
  )
}

export default App
