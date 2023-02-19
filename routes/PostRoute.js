const express = require('express');
const PostModel= require("../model/postModel")
const post = express.Router()



post.get("/",async (req,res)=>{       
       try{
const postsData= await PostModel.find();
    res.send(postsData)
       }
       catch(e){
        res.send(e.message)
       }
})


post.post("/post",async (req,res)=>{

    const {email,name,description}= req.body
    try{
const postsData= await PostModel.create({email,name,description});
res.send({message:"posts created successfully"})
    }
    catch(e){
     res.send(e.message)
    }
})


post.delete("/delete/:id",async (req,res)=>{
    const _id = req.params.id
    console.log(_id)
    try{
const postsData= await PostModel.findByIdAndDelete({_id});
 res.send({message:"posts deleted SuccessFull"})
    }
    catch(e){
     res.send(e.message)
    }
})





module.exports= post