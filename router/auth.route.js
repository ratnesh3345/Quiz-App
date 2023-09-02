import express from "express";
import dotenv from "dotenv";
import {loginHandler, signUpHandler} from "../controllers/authController.js";

const configEnv = dotenv.config();
const loginRouter = express.Router();
const signUpRouter = express.Router();

signUpRouter.route("/")
    .post(signUpHandler)

loginRouter.route("/")  
    .post(loginHandler)



export  {loginRouter, signUpRouter};