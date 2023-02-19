require("dotenv").config();
const jwt= require('jsonwebtoken');
const express = require('express');
const auth = express.Router()
const bcrypt = require('bcrypt');
const AuthModel = require('../model/Auth_model');



auth.post('/register', async (req,res)=>{
      const {name,email,password,gender}= req.body
      try{
            const isUserExist = await AuthModel.find({email})
            console.log(isUserExist)
            if(isUserExist.length>0){
                res.send("user Already Exist")
            }else{
                bcrypt.hash(password,3, async (err, hashedPassword)=>{
                  if(err){
                    console.log(err)
                 }else{
                    const isUserExist = await AuthModel.create({email,password:hashedPassword,name,gender})
                    res.send("Registration Successful")
                     }
                } )
            }
      }
      catch(e){
res.send(e.message)
      }

})

auth.post("/login",async (req,res)=>{
    const {email,password}= req.body
    try{
          const isUserExist = await AuthModel.find({email})
          console.log(isUserExist[0].password)
          if(isUserExist.length>0){        
              bcrypt.compare(password,isUserExist[0].password, async (err, output)=>{
                if(err){
                  console.log(err)
               }else{
                const token= jwt.sign({userID:isUserExist[0]._id},process.env.Code)        
                    
                 res.send({token,message:"Login successful"})
                 
                   }
              } )
          }else{
            res.send("Siggnup Please!!!")
          }
    }
    catch(e){
res.send(e.message)
    }
    })



module.exports= auth