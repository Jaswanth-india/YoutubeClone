import menuIcon from "../assets/menu.png";
import youtubeIcon from "../assets/youtube.png";
import searchIcon from "../assets/search.png";
import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

import searchInputContext from "../utils/searchInput.js";

function Header(){
    let setSearchInput=useContext(searchInputContext).setSearchInput;
    function handleClick(){
        if(document.querySelector("#hamBurger")){
            const hamBurgerItemContainers=document.querySelectorAll(".hamBurgerItemContainers")
            if(hamBurgerItemContainers[0].children[1].style.display!=="flex"){
                for(let i=0;i<hamBurgerItemContainers.length;i++){
                    hamBurgerItemContainers[i].children[1].style.width="100%";
                    hamBurgerItemContainers[i].children[0].style.width="100%";
                    hamBurgerItemContainers[i].children[1].style.fontSize="0.8em";
                    hamBurgerItemContainers[i].children[0].style.display="flex";
                    hamBurgerItemContainers[i].children[1].style.display="flex";
                    hamBurgerItemContainers[i].children[0].style.justifyContent="center";
                    hamBurgerItemContainers[i].children[1].style.justifyContent="center";
                    hamBurgerItemContainers[i].style.padding="8px 0px";
                    hamBurgerItemContainers[i].children[0].children[0].style.marginRight="0px";
                    hamBurgerItemContainers[i].children[1].style.paddingTop="5px";
                    hamBurgerItemContainers[i].style.flexWrap="wrap";
                }
            }else{
                for(let i=0;i<hamBurgerItemContainers.length;i++){
                    hamBurgerItemContainers[i].children[1].style.width="fit-content";
                    hamBurgerItemContainers[i].children[0].style.width="fit-content";
                    hamBurgerItemContainers[i].children[1].style.fontSize="1em";
                    hamBurgerItemContainers[i].children[0].style.display="block";
                    hamBurgerItemContainers[i].children[1].style.display="block";
                    hamBurgerItemContainers[i].children[0].style.justifyContent="center";
                    hamBurgerItemContainers[i].children[1].style.justifyContent="center";
                    hamBurgerItemContainers[i].style.padding="8px 10px";
                    hamBurgerItemContainers[i].children[0].children[0].style.marginRight="20px";
                    hamBurgerItemContainers[i].children[1].style.paddingTop="0px";
                    hamBurgerItemContainers[i].style.flexWrap="nowrap";
                }
            }
        }
    }

    function handleOnChange(e){
        setSearchInput(e.target.value);
    }
    return(
        <header>
            <div><button onClick={handleClick} id="menuButton"><img src={menuIcon} title="open menu icons"/></button></div>
            <div><img src={youtubeIcon}/></div>
            <div><h3>Youtube<sup> IN</sup></h3></div>
            <div><div id="searchContainer">
                    <input type="text" placeholder="Search" onChange={(e)=>{handleOnChange(e)}}/>
                    <button id="searchButton"><img src={searchIcon}/></button>
                </div></div>
            <div><Link to="/login">{}</Link></div>
        </header>
    )
}

export default Header;