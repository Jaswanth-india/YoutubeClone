import { useState,useEffect } from "react";

// Styles
import "./Home.css"

// Components
import VideoTile from "./VideoTile.jsx";

function Home(){
    let [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5100/home").then((data)=>data.json()).then(data=>{
            setData(data);
            document.querySelector("#loader").style.display="none";
        })
    },[])
    return (
        <main id="home">
            {data.map((data,index)=><VideoTile key={index} data={data}/>)}
            <section id="loader">Loading....</section>
        </main>
    )
}

export default Home;