import express from "express";
import jwt from "jsonwebtoken";
import users from "../db/userData.js";
import {v4 as uuid} from "uuid";
import dotenv from "dotenv";
dotenv.config();



const signUpHandler = (req,res) =>{
    const {username, password} = req.body; // this is basically what the user has typed
    const isUserPresent = users.data.some(user=> user.username === username);
    if(isUserPresent) {
        res.status(422).json({message: "user already exists"}) 
    }else{
        const id = uuid()
        const newData = {id, username, password}
        users.data =  [...users.data, newData] ;
        const token = jwt.sign({id: username}, process.env.SECRET_KEY);
        res.send(`user created successfully --> ${username}::${token}`);
    }
}

const loginHandler = (req,res)=>{
    const {username, password} = req.body;
       const isVerified = users.data.some(user=>user.username === username && user.password === password);
       const token = jwt.sign({id:username},process.env.SECRET_KEY);
       if(isVerified){
        res.send({
            username,
            token,
            message : "Verified" 
        })
       }else{
        res.status(401).json({message: "Failed to find the user, Please Sign Up"})
       }
}

export {loginHandler, signUpHandler};