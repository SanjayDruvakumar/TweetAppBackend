import express from 'express'
import {auth} from "../middlewares/auth.js"
import { tweets } from '../controllers/tweetcontrollers.js'
//router instance-- to have routes
let tweetRouter=express.Router()


//router level middleware
//todoRouter.use()


tweetRouter.post("/",auth,tweets)

export default tweetRouter;