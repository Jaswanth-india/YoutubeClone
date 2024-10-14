import './App.css';
import Header from "./components/Header.jsx";
import HamBurger from "./components/HamBurger.jsx";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <section id="bodyContainer">
        <HamBurger/>
        <Outlet/>
      </section>
    </>
  )
}

export default App
