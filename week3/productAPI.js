import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
import { compare } from 'bcryptjs' 
import jwt from 'jsonwebtoken'
import { verifiedToken } from '../middlewares/verifiedToken.js'
const {sign}=jwt
export const productApp=exp.Router()
//to create products
productApp.post("/products",async(req,res)=>{
    const newProduct=req.body
    const newProductDocument=new ProductModel(newProduct)
    const result=await newProductDocument.save()
     console.log(result)
     res.status(200).json({message:"Product Created"})
})

//to authorize the products
productApp.post("/auth",async(req,res)=>{
    const {productid,productName}=req.body
    const product=await ProductModel.findOne({productid:productid})
    if(product==null){
      return res.status(400).json({message:"Invalid Product"})
    }
      const result=await compare(productName,product.productName)

  if(result==false){
   return res.status(400).json({message:"Invalid product Name"}) };
const signedToken=sign({productid:product.productid},"product",{expiresIn:"1h"})
    //send token in res
    //store token as http only cookie
    res.cookie("token",signedToken,{
      httpOnly:true,
      sameSite:"lax",
      secure:false
    })


    res.status(200).json({message:"Product Inserted",payload:product})
   }) 

//to read products
//protected route
productApp.get("/products",verifiedToken,async(req,res)=>{
    let productList=await ProductModel.find()
    res.status(200).json({message:"Products",payload:productList})
})
//to read the products by id
productApp.get("/products/:productid",verifiedToken,async(req,res)=>{

    const uid=req.params.productid
    const productObj=await ProductModel.findOne({productid:uid})
    if(!productObj){
        return res.status(404).json({message:"Product Not Found"})
    }
    res.status(200).json({message:"User",payload:productObj})
})
//to update products by id
productApp.put("/products/:productid",async (req, res) => {
  const modifiedProduct = req.body
  const uid = req.params.productid
  const updatedProduct = await ProductModel.findOneAndUpdate({ productid: uid },{ $set: { ...modifiedProduct } },{ new: true, runValidators: true })
  
  if (!updatedProduct) {
    return res.status(404).json({ message: "Product Not Found" })
  }
  
  res.status(200).json({ message: "Product Modified", payload: updatedProduct })
})
//to delete products by id
productApp.delete("/products/:productid",verifiedToken,async(req,res)=>{
    const uid=req.params.productid
    const deletedProduct=await ProductModel.findOneAndDelete({productid:uid}) 
    if(!deletedProduct){
        return res.status(404).json({message:"Product Not Found"})
    }
    res.status(200).json({message:"Product Deleted",payload:deletedProduct})
})

