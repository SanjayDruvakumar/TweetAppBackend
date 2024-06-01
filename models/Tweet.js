import mongoose, { Schema,model } from "mongoose";
import User from "../models/User.js"
//as mongodb is schamaless defining schema is rewcommended
let tweetSchema=new Schema({
        _id:mongoose.Schema.Types.ObjectId,
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        text:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now
    }
})

//model the todo collection using model function
let Tweet=model("Tweet",tweetSchema)
export default Tweet;