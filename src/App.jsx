import './App.css';
import Header from "./components/Header.jsx";
import HamBurger from "./components/HamBurger.jsx";
import { Outlet } from 'react-router-dom';
import { useState } from "react";

import searchInputContext from "./utils/searchInput.js";
import userDataContext from "./utils/userDataContext.js";

function App() {
  let [searchInput,setSearchInput]= useState("");
  let [userData,setUserData]= useState("");
  return (
    <searchInputContext.Provider value={{searchInput,setSearchInput}}>
      <userDataContext.Provider value={{userData,setUserData}}>
        <Header/>
        <section id="bodyContainer">
          <HamBurger/>
            <Outlet/>    
        </section>
      </userDataContext.Provider>
    </searchInputContext.Provider>
  )
}

export default App;
