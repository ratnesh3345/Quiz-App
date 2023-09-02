import express from "express";
import quizzes from "../db/quizzes.js";

const categoryRouter = express.Router();

categoryRouter.route("/").get((req,res)=>{
    res.json(quizzes);
})

export default categoryRouter;