import image from "../assets/maxresdefault.jpg";
import deleteImage from "../assets/delete.png";
import userDataContext from "../utils/userDataContext.js";
import { useContext } from "react";

function UserVideo(props){
    let userToken=useContext(userDataContext).userData.split(" ")[0];

    function handleDelete(){
        fetch("http://localhost:5100/deleteUserVideo",{
            method:"delete",
            headers:{
                "Content-Type":"application/json",
                "authorization":"JWT " + userToken
            },
            body:JSON.stringify({videoId:props.video.id})
        }).then(res=>res.json()).then((res)=>{
            if(res.status){
                document.querySelector(".userVideo div:nth-of-type(3)").style.display="flex"
            }
        })
    }
    return(
        <div className="userVideo">
            <div>
                <img src={image}/>
            </div>
            <div>
                <div>
                    <div>{props.video.title}</div>
                    <div>{props.video.channelTitle}</div>
                </div>
                <button onClick={handleDelete}><img src={deleteImage}/></button>
            </div>
            <div>Deleted. Comeback again to this page</div>
        </div>
    )
}

export default UserVideo;