import mongoose from "mongoose";

let videoSchema=mongoose.Schema({
    id:{
        required:true,
        type:Number,
    },
    title:String,
    thumbnail:String,
    channelTitle:String,
    categoryId:String,
    comments:Array
});

export const videoModel=mongoose.model("video",videoSchema);