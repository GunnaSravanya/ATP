import exp from 'express'
import {hash,compare} from 'bcryptjs';
import { UserModel } from '../models/UserModel.js';
import { verifyToken } from '../middlewares/verifyToken.js';
import {config} from "dotenv";
import jwt from "jsonwebtoken";
const {sign}=jwt
config();
export const commonApp= exp.Router() 

//Route for register
commonApp.post("/users",async(req,res)=>{
    //get user from the req
    const newUser=req.body;
    //check role
    let allowedRoles=["USER","AUTHOR"]
    if(!allowedRoles.includes(newUser.role)){
        return res.status(400).json({message:"Invalid role"});
    }
    //run validators manually
    
    //hash password and replace plain code with hashed
    newUser.password=await hash(newUser.password,12)
    //create new user document
    const newUserDoc=new UserModel(newUser)
    //save the document 
    await newUserDoc.save()
    //send res
    res.status(201).json({message:"User Created"})
});
//route for login
//login-submitting credentials and getting token
commonApp.post("/login",async(req,res)=>
{
    //get user data
    const {email,password}=req.body;
    //find user by email
    const user=await UserModel.findOne({email:email});
    //if user not found
    if(!user)
    {
        return res.status(400).json({message:"Invalid email"})
    }
    //compare password
    const isMatched=await compare(password,user.password)
    //if passwords are not matched
    if(!isMatched){
        return res.status(400).json({message:"Invalid password"})
    }
    //create jwt token
    const signedToken=await sign({id:user._id,email:email,role:user.role},process.env.SECRET_KEY,{expiresIn:"1h"})
    //store token in the cookie
res.cookie("token", signedToken, {
  httpOnly: true,
  secure: true,
  sameSite: "none"
});
    )
    //remove password from user document
    const userObj=user.toObject();
    delete userObj.password;
    //send res
    res.status(200).json({message:"login successfull",payload:userObj})
})
//token can be acessed only by server not by client
//Route for logout
commonApp.get("/logout",(req,res)=>
{
    //delete the token
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    });
    //send response
    res.status(200).json({message:"Logout success"})
})
//to change password
commonApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>
{
    //check current password and new password are same
    const clientPasswords=req.body;
    if(clientPasswords.currentPassword===clientPasswords.newPassword)
    {
        return res.status(400).json({message:"current password and new password are same"});
    }
    //get current password of user/author/admin
    const id=req.user?.id;
    const currentPasswordOfRole=await UserModel.findById(id)
    //check the current password of request and user are not same
    const status = await compare(clientPasswords.currentPassword,currentPasswordOfRole.password,
    );
    if(!status)
    {
        return res.status(401).json({message:"Invalid current password"})
    }
    //hash new password
    const hashedPassword=await hash(clientPasswords.newPassword,12);
    //replace current password of user with hashed new password
    await UserModel.findByIdAndUpdate({_id:id},{password:hashedPassword},{new:true});
    res.status(200).json({message:"password updated"});
})
//to check Auth
commonApp.get("/check-auth", (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "No token",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    res.status(200).json({
      message: "Authenticated",
      payload: decoded,
    });
  } catch (err) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
})
