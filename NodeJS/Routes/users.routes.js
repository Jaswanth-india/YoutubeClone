import { userModel } from "../Model/user.model.js";

function userRoutes(app){
    app.post("/login",(req,res)=>{
        
    });
    
    app.post("/register",(req,res)=>{
        let newUser=new userModel({
            userName:req.body.userName,
            password:req.body.password
        });
        newUser.save().then(mongoDBResponse=>{
            console.log(mongoDBResponse);
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