import { userModel } from "../Model/user.model.js";
import jwt from "jsonwebtoken";

function userRoutes(app){
    app.post("/login",(req,res)=>{
        userModel.find({userName:req.body.userName}).then(data=>{
            if(data.length && data[0].password===req.body.password){
                res.send({loginStatus:true,token:jwt.sign(data[0].userName,"secretKey")})
            }else{
                res.send({loginStatus:false})
            }
        });
    });
    
    app.post("/register",(req,res)=>{
        let newUser=new userModel({
            userName:req.body.userName,
            password:req.body.password
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

    app.post("/addComment",(req,res)=>{

    });
}

export default userRoutes;