require('dotenv').config()
const express = require('express');
const cors= require('cors');
const connect = require('./config/connect');
const port= process.env.PORT || 8080;
const AuthRouter= require("./routes/AuthRoute")
const PostRouter= require("./routes/PostRoute");
const AuthMiddle = require('./middleware/AuthMiddleware');



const app = express();
app.use(express.json());
app.use(cors());
app.use("/users",AuthRouter)

app.use(AuthMiddle)
app.use("/posts",PostRouter)

app.get('/',(req,res) => {
res.send("I an onn")
})



app.listen(8080, async () => {
    try{
        await connect
    console.log("listning on port 8080")
    }catch(e){
        console.log(e.message)
    }
})