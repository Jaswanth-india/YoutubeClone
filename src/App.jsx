import './App.css'
import Header from "./components/Header.jsx";
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <section>
        <section id="hamBurger">
          <section></section>
          
        </section>
        <Outlet/>
      </section>
    </>
  )
}

export default App
