import { Link } from "react-router-dom";

import "./hamBurger.css";
function HamBurger(){
    return(
        <section id="hamBurger">
            <div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b><Link to="/">Home</Link></b></div></div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b>Shorts</b></div></div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b>Subscriptions</b></div></div>
            </div>
            <div>
                <div className="hamBurgerHeadings"><h4>You</h4></div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b>Your channel</b></div></div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b>History</b></div></div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b>Playlists</b></div></div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b>Your videos</b></div></div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b>Watch later</b></div></div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b>Liked videos</b></div></div>
            </div>
            <div>
                <div className="hamBurgerHeadings"><h4>Explore</h4></div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b>Trending</b></div></div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b>Shopping</b></div></div>
                <div className="hamBurgerItemContainers"><div><img src="{}"/></div><div><b>Gaming</b></div></div>
            </div>
        </section>
    )
}

export default HamBurger;