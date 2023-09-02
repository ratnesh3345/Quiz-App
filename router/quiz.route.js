import express from "express";
import quizzes from "../db/quizzes.js";
import verifyUser from "../middleware/authVerify.js";

const quizRouter = express.Router();

quizRouter.route("/")
    .get(verifyUser,(req,res)=>{
        res.json(quizzes)
    })
export default quizRouter;