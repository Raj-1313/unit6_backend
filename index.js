const express = require('express');
// const cors= require('cors');
const connect= require('./config/connect');
const Auth_Signup = require("./src/Routes/authantication")
const noteRoute = require("./src/Routes/note_Route")
const authaeticate_middleware = require("./src/middleware/authanticate_middleware")

const app = express();
app.use(express.json());
app.use("/auth",Auth_Signup);
app.use(authaeticate_middleware)
app.use("/note",noteRoute);


app.get('/',(req,res) => {
res.send("I an onn")
})



app.listen(8080 , async ( ) => {
    try{
        await connect
    console.log("listning on port 8080")
    }catch(e){
        console.log(e.message)
    }
})