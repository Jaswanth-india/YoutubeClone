import { useParams } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import "./videoPage.css";
import userDataContext from "../utils/userDataContext.js";
import deleteImage from "../assets/delete.png";

function VideoPage(){
    let userData=useContext(userDataContext).userData;
    let [data,setData]=useState({});
    let videoId=useParams();
    useEffect(()=>{
        fetch("http://localhost:5100/videoById/"+videoId.id,{
            method:"get",
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setData(res);
        })
        userData.split(" ")[1]?null:document.querySelector("#addCommentButton").disable=true;
    },[])
    function handleCommentConfirm(){

    }
    return(
        <main id="videoPage">
            <div>
                <div><img src={data.thumbnail}/></div>
                <div>
                    <div>{userData.split(" ")[1]?userData.split(" ")[1][0].toUpperCase(0):null}</div>
                    <div>
                        <input placeholder="Add Comment"/>
                        <div><button id="addCommentButton" onClick={handleCommentConfirm}>Comment</button></div>
                    </div>
                </div>
                <div>
                    {data.comments.map((comment)=>{
                        return(
                            <div className="comments">
                                <div>{comment.userName.toUpperCase()}</div>
                                <div>
                                    <div>{comment.userName}</div>
                                    <div>{comment.comment}</div>
                                    <button><img src={deleteImage}/></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                {[1,2,3,4,5,6,7,8,9,10].map((number)=>{
                    return (
                        <div key={number} className="sampleVideo">
                            <div>
                                Image{number}
                            </div>
                            <div>
                                <div>Video Title</div>
                                <div>Channel Title</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default VideoPage;