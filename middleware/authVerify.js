import express from "express";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyUser = (req,res,next)=>{
    const verifyToken = req.headers.authorization;
    try{
        const decodedToken = jwt.verify(verifyToken, process.env.SECRET_KEY);
        req.user = {userId: decodedToken.id}
        next();
    }catch{
        res.send(`Invalid Crendtials`)
    }
}

export default verifyUser;