import express from "express";
import cors from "cors";

const app=new express();

app.listen("5100",()=>{
    console.log("Server Started Successfully");
});

app.use(cors());

app.use(express.json());

app.use("/user",(req,res,next)=>{
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=10&videoCategoryId=10&key=AIzaSyD3NMIaphPtnGqnwwjvxmVhVsSMLD_Azss",{
        method:"get"
    })
    .then((data)=>data.json(data))
    .then((data)=>{
        res.send(data)
        console.log(data)
    })
    .catch((err)=>{
        console.clear();
        console.log("error:",err)
    })
})