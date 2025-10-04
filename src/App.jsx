import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards';
import Head from './components/Head';
import Colors from './components/Colors';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />
      <div className="cards flex mt-[33px]">
        <Cards check="Go Check" />
      <Cards check="Go Check" />
      <Cards check="Go Checkkk"/>
      <Colors />
      </div>
      
    </>
  )
}

export default App
