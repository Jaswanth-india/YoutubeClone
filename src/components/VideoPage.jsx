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
        userData.split(" ")[1]?null:document.querySelector("#addCommentButton").disabled=true;
    },[])

    function handleCommentConfirm(){
        document.querySelector("#videoPage input").value?(fetch("http://localhost:5100/addComment",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "authorization":"JWT " + userData.split(" ")[0]
            },
            body:JSON.stringify({
                videoId:videoId.id,
                comment:document.querySelector("#videoPage input").value
            })
        }).then(res=>res.json()).then(res=>{if(res.status){document.querySelector("#alert").style.display="unset"}})):null;
    }

    function handleDeleteComment(comment){
        console.log(comment);
        fetch("http://localhost:5100/deleteComment",{
            method:"delete",
            headers:{
                "Content-Type":"application/json",
                "authorization":"JWT " +userData.split(" ")[1]
            },
            body:JSON.stringify({comment:comment,videoId:videoId.id})
        }).then(res=>res.json())
        .then(res=>{
            if(res.status){
                document.querySelector("#alert").style.display="unset";
            }
        })
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
                    <div id="alert">Please go back and come to this page again to see changes</div>
                    {data.comments && data.comments.map((comment,index)=>{
                        return(
                            comment && <div className="comments" key={index}>
                                <div>{comment.userName[0].toUpperCase()}</div>
                                <div>
                                    <div>{comment.userName}</div>
                                    <div>{comment.comment}</div>
                                </div>
                                {(userData.split(" ")[1]==comment.userName)?<button onClick={()=>{handleDeleteComment(comment)}}><img src={deleteImage}/></button>:null}
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