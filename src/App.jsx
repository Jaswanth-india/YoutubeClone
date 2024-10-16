import './App.css';
import Header from "./components/Header.jsx";
import HamBurger from "./components/HamBurger.jsx";
import { Outlet } from 'react-router-dom';
import { useState } from "react"

import searchInputContext from "./utils/searchInput.js";
import jwtTokenContext from "./utils/jwtTokenContext.js";

function App() {
  let [searchInput,setSearchInput]= useState("a");
  let [jwtToken,setJwtToken]= useState("")
  return (
    <searchInputContext.Provider value={{searchInput,setSearchInput}}>
      <jwtTokenContext.Provider value={{jwtToken,setJwtToken}}>
        <Header/>
        <section id="bodyContainer">
          <HamBurger/>
            <Outlet/>    
        </section>
      </jwtTokenContext.Provider>
    </searchInputContext.Provider>
  )
}

export default App
