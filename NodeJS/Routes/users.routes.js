import { userModel } from "../Model/user.model.js";
import jwt from "jsonwebtoken";

function userRoutes(app){
    app.post("/login",(req,res)=>{
        userModel.find({userName:req.body.userName}).then(data=>{
            if(data.length && data[0].password===req.body.password){
                res.send({loginStatus:true,userName:data[0].userName,token:jwt.sign(data[0].userName,"secretKey"),channelCreated:data[0].channelCreated})
            }else{
                res.send({loginStatus:false})
            }
        });
    });
    
    app.post("/register",(req,res)=>{
        let newUser=new userModel({
            userName:req.body.userName,
            password:req.body.password,
            channelCreated:false,
            videos:[]
        });
        newUser.save().then(()=>{
            res.send({userAdded:true});
        }).catch(error=>{
            if(error.code==11000){
                console.log("Registration Denied: UserName already exists");
            }
            res.send({code:11000})
        })
    });

    app.get("/channelDashboard",(req,res)=>{
        
    });

    app.put("/createChannel",(req,res)=>{
        jwt.verify(req.headers.authorization.split(" ")[1],"secretKey",(err,user)=>{
            if(!err){
                userModel.updateOne({userName:user},{$set:{channelCreated:true}}).then((data=>{
                    if(data.acknowledged){
                        res.send({status:true});
                    }else{
                        res.send({status:false});
                    }
                }))
            }
        })
    });
}

export default userRoutes;