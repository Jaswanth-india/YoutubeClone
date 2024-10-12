import menuIcon from "../assets/menu.png";
import youtubeIcon from "../assets/youtube.png";
import searchIcon from "../assets/search.png";
import "./header.css";

function Header(){
    function handleClick(){
        
    }
    return(
        <header>
            <div><button onClick={handleClick} id="menuButton"><img src={menuIcon} title="open menu icons"/></button></div>
            <div><img src={youtubeIcon}/></div>
            <div><h3>Youtube<sup> IN</sup></h3></div>
            <div><div id="searchContainer">
                    <input type="text" placeholder="Search"/>
                    <button id="searchButton"><img src={searchIcon}/></button>
                </div></div>
            <div>Sign in</div>
        </header>
    )
}

export default Header;