import { useState,useEffect,useContext } from "react";

// Styles
import "./Home.css"

// Components
import VideoTile from "./VideoTile.jsx";

import searchInputContext from "../utils/searchInput.js";
import userDataContext from "../utils/userDataContext.js";

function Home(){
    let userData=useContext(userDataContext).userData;
    let searchInput=useContext(searchInputContext).searchInput;
    let [data,setData]=useState([]);
    let [category,setCategory]=useState("")
    let categories=[];
    for(let i=0;i<data.length;i++){
        let neverMatched=true;
        for(let j=0;j<categories.length;j++){
            if(categories[j]==data[i].categoryId){
                neverMatched=false;
            }
        }
        if(neverMatched){
            categories.push(data[i].categoryId);
        }
    }
    let searchFilteredData=[];
    for(let i=0;i<data.length;i++){
        if(data[i].title.toLowerCase().includes(searchInput.toLowerCase())){
            searchFilteredData.push(data[i])
        }
    }
    let filteredData=[];
    for(let i=0;i<searchFilteredData.length;i++){
        if(searchFilteredData[i].categoryId==category){
            filteredData.push(searchFilteredData[i])
        }
    }

    if(!category){
        filteredData=searchFilteredData;
    }
    useEffect(()=>{
        fetch("http://localhost:5100/home").then((data)=>data.json()).then(data=>{
            setData(data);
            document.querySelector("#loader").style.display="none";
        })
    },[])

    function handleClick(e){
        setCategory(e.target.innerText);
    }

    function handleAllCategories(){
        setCategory("")
    }
    return (
        <main id="home">
            <section>Category:
                <div onClick={handleAllCategories}>All</div>
                {categories.map((category)=>{
                return <div key = { category} onClick={(e)=>{handleClick(e)}} className="category">{category}</div>
            })}</section>
            {filteredData.map((data,index)=><VideoTile key={index} data={data}/>)}
            <section id="loader">Loading....</section>
        </main>
    )
}

export default Home;