import './App.css'
import Cards from './components/Cards';
import Head from './components/Head';
import Colors from './components/colors';

function App() {
  return (
    <>
      <Head />
      <div className="cards flex mt-[33px]">
        <Cards check="Go Check" />
      <Cards check="Go Check" />
      <Cards check="Go Checkkk"/>
      </div>
      
    </>
  )
}

export default App
