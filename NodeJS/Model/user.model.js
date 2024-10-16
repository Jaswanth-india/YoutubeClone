import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    userName:{
        unique:true,
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
});

export const userModel=mongoose.model("user",userSchema);