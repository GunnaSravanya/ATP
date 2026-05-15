import exp from "express";
import {config} from "dotenv";
import {connect} from "mongoose";
import cookieParser from "cookie-parser";
import {employee} from "./API/employee.js";
import cors from "cors";
config();
const app=exp()
app.use(
  cors({
    origin: ["https://atp-f1wi.vercel.app"],
    withCredentials:true,
  }),
);
app.use(exp.json())

app.use(cookieParser())
let port=process.env.PORT
app.use("/employee-api", employee);
async function connectDB(){
    try{
        await connect(process.env.DB_URL)
        console.log("mongodb connected")
        app.listen(port,()=>console.log(`server running on ${port}`))
        
    }
    catch(err){
        console.log(err)
    }
};
connectDB()
//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
