import { useState,useContext,useRef,useEffect } from "react";
import userDataContext from "../utils/userDataContext";
import "./channelDashboard.css"
import UserVideo from "./UserVideo.jsx";

function ChannelDashboard(){
    let userData=useContext(userDataContext);
    let handle=useRef("");
    let [userVideos,setUserVideos]=useState([]);
    
    useEffect(()=>{
        if(userData.userData.split(" ")[2]==="true"){
            fetch("http://localhost:5100/userVideos",{
                method:"get",
                headers:{
                    "Content-Type":"application/json",
                    "authorization":"JWT " + userData.userData.split(" ")[0]
                }
            }).then((res)=>res.json())
            .then(res=>{
                setUserVideos(res);
            })
        }
    },[userData.userData.split(" ")[2]])

    function handleClick(e){
        e.target.blur();
        fetch("http://localhost:5100/createChannel",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "authorization":"JWT "+userData.userData.split(" ")[0]
            }
        }).then((data=>data.json()))
        .then(data=>{
            if(data.status){
                handle.current=document.querySelector("#handleInput").value;
                userData.setUserData(userData.userData.split(" ")[0]+" " + userData.userData.split(" ")[1]+" true");
            }
        })
    }

    function handleOpen(){
        document.querySelector("#addVideoWindow").style.display="flex";
    }

    function handleClose(){
        document.querySelector("#addVideoWindow").style.display="none";
    }

    function handleAddVideo(){
        fetch("http://localhost:5100/addVideo",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "authorization":"JWT " + userData.userData.split(" ")[0]
            },
            body:JSON.stringify({
                id:0,
                title:document.querySelector("#titleInput").value,
                thumbnail:document.querySelector("#thumbnailURL").value,
                channelTitle:userData.userData.split(" ")[1],
                categoryId:document.querySelector("#videoCategory").value,
                comments:[]
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.status){
                document.querySelector("#addVideoWindow").style.display="none";
            }
        })
    }
    
    return(
        <main id="channelDashboard">
            {(userData.userData.split(" ")[2]==="false")?(
                <section id="createChannel">
                    <table>
                        <tbody>
                            <tr>
                                <td>UserName</td>
                                <td>:</td>
                                <td>{userData.userData.split(" ")[1]}</td>
                            </tr>
                            <tr>
                                <td>Handle</td>
                                <td>:</td>
                                <td><input placeholder="eg:Jaswanth123" id="handleInput"/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={(e)=>{handleClick(e)}}>Create Channel</button>
                </section>
                ):(
                    <section id="channelHomePage">
                        <div>Your Channel Banner</div>
                        <div>
                            <div>{userData.userData.split(" ")[1][0].toUpperCase()}</div>
                            <div>
                                <div>{userData.userData.split(" ")[1]}</div>
                                <div>@{handle.current}</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>Videos</div>
                                <div></div>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            {userVideos.map(video=>{
                                return <UserVideo key={video.id} video={video}/>
                            })}
                            <button onClick={handleOpen}>
                                <div>+</div>
                                <div>Add</div>
                            </button>
                        </div>
                        <section id="addVideoWindow">
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Title</td>
                                            <td><input id="titleInput"/></td>
                                        </tr>
                                        <tr>
                                            <td>Video Thumbnail URL</td>
                                            <td><input id="thumbnailURL"/></td>
                                        </tr>
                                        <tr>
                                            <td>Video Category</td>
                                            <td><input id="videoCategory"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <button id="addVideo" onClick={handleAddVideo}>Add Video</button>
                                </div>
                                <button onClick={handleClose}>×</button>
                            </div>
                        </section>
                    </section>)}
            <section></section>
        </main>
    )
}

export default ChannelDashboard;