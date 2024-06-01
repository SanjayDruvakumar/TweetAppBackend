import express from "express"
import {db} from "./config/db.js"
import userRouter from "./routes/userRouters.js"
import tweetRouter from "./routes/tweetRouters.js";
db()

let app=express()

app.use(express.json())
app.use("/app/v1/tweets",tweetRouter)
app.use("/app/v1/user",userRouter)

export default app