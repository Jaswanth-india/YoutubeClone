import { useState,useEffect,useContext } from "react";

// Styles
import "./Home.css"

// Components
import VideoTile from "./VideoTile.jsx";

import searchInputContext from "../utils/searchInput.js";

function Home(){
    let searchInput=useContext(searchInputContext).searchInput;
    let [data,setData]=useState([]);
    let filteredData=[];
    for(let i=0;i<data.length;i++){
        if(data[i].title.toLowerCase().includes(searchInput)){
            filteredData.push(data[i])
        }
    }
    useEffect(()=>{
        fetch("http://localhost:5100/home").then((data)=>data.json()).then(data=>{
            setData(data);
            document.querySelector("#loader").style.display="none";
        })
    },[])
    return (
        <main id="home">
            {filteredData.map((data,index)=><VideoTile key={index} data={data}/>)}
            <section id="loader">Loading....</section>
        </main>
    )
}

export default Home;