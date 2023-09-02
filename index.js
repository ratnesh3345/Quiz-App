import express from "express";
import cors from "cors";
import {loginRouter, signUpRouter} from "./router/auth.route.js";
import quizRouter from "./router/quiz.route.js";
import routeNotFound from "./middleware/routenotfound.js";
import categoryRouter from "./router/category.route.js";

const app = express();
const port = 3000;
app.use(cors())// this basically to allow cross - origin resource sharing to take place.    
app.use(express.json()); //for basically sending JSON as response


app.get("/", (req,res)=>res.send("<h1>Hello From Ratnesh - The Best</h1>"))
app.use("/category", categoryRouter)
app.use("/quiz", quizRouter)
app.use("/auth/login", loginRouter);
app.use("/auth/signup", signUpRouter);
app.use(routeNotFound);

app.listen(port, ()=>{
    console.log(`Server is running on Port Number ${port}`)
})