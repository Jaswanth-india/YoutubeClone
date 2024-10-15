import { Link } from "react-router-dom"
function VideoTile(props){
    let color="rgb("+Math.floor(Math.random()*255)+"," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255)+")"
    return(
        <div className="videoTileContainer">
            <Link to="/videoPage">
                <img src={props.data.thumbnail}/>
            </Link>
            <div>
                <div style={{backgroundColor:color}}>{props.data.channelTitle[0].toUpperCase()}</div>
                <div>
                    <Link to="/videoPage">  
                        {props.data.title}
                    </Link>
                    <div>{props.data.channelTitle}</div>
                </div>
            </div>
        </div>
    )
}

export default VideoTile;