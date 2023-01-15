const express = require("express");
const noteModel = require("../Model/Note_Model");
const noteRouter = express.Router();

noteRouter.get("/", async (req,res)=>{
    res.send("All notes")
})

noteRouter.post("/create", async (req,res)=>{
    const payload= req.body
    try{
const newNotes = new noteModel(payload)
await newNotes.save()
        res.send("Created notes")
    }
    catch(e){
        res.send({message:e.message})

    }
})

noteRouter.patch("/update/:id", async (req,res)=>{
    const payload= req.body
    const _id= req.params.id
    try{
        const newNotes = new noteModel.findByIdAndUpdate({_id},{payload})
        res.send("updated")
    }
    catch(e){
        res.send(e.message)
    }
    res.send("All notes are updated")
})

noteRouter.delete("/delete/:id", async (req,res)=>{
    
    res.send("deleted note")
})




module.exports = noteRouter