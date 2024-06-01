import User from "../models/User.js"
import { genToken } from "../utils/genToken.js";
import { tweets } from "./tweetcontrollers.js";



export const register=async (req,res,next)=>{
    try{
        const {name,email,password,confirmedPassword}=req.body;

        let existingUser=await User.findOne({email})

        if(existingUser){
            return res.status(400).json({
                message:"Email exists already, Try to login!"
            })
        }

        let newUser=await User.create({
            name,
            email,
            password,
            confirmedPassword
        })
    let token=await genToken(newUser._id)
    res.status(201).json({
        newUser,
        token
    })
    }catch(error){
    res.status(400).json({
        message:error.message
    })
    }
}

export const login=async (req,res)=>{
    try{
        const{email,password}=req.body;
        const existingUser=await User.findOne({email})
        if(!existingUser || !(await existingUser.verifyPassword(
            password,existingUser.password
        ))){
            return res.status(400).json({
            message:"Username and Password are inavild"
        })
    }
    let token=await genToken(existingUser._id)
    res.status(200).json({
        existingUser,
        token
    })
    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }
}

export const timeline=async (req,res)=>{
    try{
    let userId=req.params._id;
    let userTweets=await tweets.filter(tweet=>tweet.userId===userId);
    res.status(200).json(userTweets)
    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }

}

