import './App.css';
import Header from "./components/Header.jsx";
import HamBurger from "./components/HamBurger.jsx";
import { Outlet } from 'react-router-dom';
import { useState } from "react"

import searchInputContext from "./utils/searchInput.js";

function App() {
  let [searchInput,setSearchInput]= useState("a");
  let [jwtToken,setJWTToken]= useState("")
  return (
    <searchInputContext.Provider value={{searchInput,setSearchInput}}>
      <Header/>
      <section id="bodyContainer">
        <HamBurger/>
          <Outlet/>    
      </section>
    </searchInputContext.Provider>
  )
}

export default App
