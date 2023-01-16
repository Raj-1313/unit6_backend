const express = require('express');
const PostModel= require("../model/postModel")
const post = express.Router()

post.get("/",async (req,res)=>{
       const userID = req.body.userID
       console.log(userID)
       try{
const postsData= await PostModel.find();
if(postsData.length>0){
    res.send(postsData)
}
else{
    res.send({message: 'No posts found'})
}
       }
       catch(e){
        res.send(e.message)
       }
})


post.post("/update",async (req,res)=>{
    const userID = req.body.userID
    const {title,body,device}= req.body
    try{
const postsData= await PostModel.create({userID,title,body,device});
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