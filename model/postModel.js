const mongoose=   require('mongoose');

const PostSchema= mongoose.Schema({
    email :{type:String},
    name :{type:String},
    description:{type:String},
})


const PosthModel = mongoose.model('post',PostSchema);
module.exports = PosthModel;