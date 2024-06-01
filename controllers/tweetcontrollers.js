import Tweet from "../models/Tweet.js"

//create a Todo
//@POST
//@path--/app/v1/todo
let tweets=async (req,res)=>{
    try{
       const {text}=req.body;
    //    const newTweet={userId:req.userId,text,createdAt:new Date()};
    //    tweets.save(newTweet);
         let newTweet=await Tweet.create({userId:req.user._Id,text,createdAt:new Date()})
       res.status(201).json(newTweet);
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })

    }
    
}


export {
    tweets
}
