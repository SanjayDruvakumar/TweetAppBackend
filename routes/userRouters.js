import {Router} from "express"
import { register,login, timeline } from "../controllers/userControllers.js";
import { auth } from "../middlewares/auth.js";

let userRouter=Router()

userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.get("/:id/timeline",auth,timeline)

export default userRouter;