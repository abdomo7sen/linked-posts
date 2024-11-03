import { Router } from "express";
import { signIn, signUp } from "./userController.js";
import { checkSignInEmail, checkSignUpEmail } from "../../middleware/checkEmailExist.js";

const userRouter=Router()

userRouter.post("/signup",checkSignUpEmail,signUp)
userRouter.get("/signin",checkSignInEmail,signIn)



export default userRouter