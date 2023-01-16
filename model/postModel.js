const mongoose=   require('mongoose');

const PostSchema= mongoose.Schema({
    title :{type:String},
    body :{type:String},
    device :{type:String},
    userID:{type:String}
})


const PosthModel = mongoose.model('post',PostSchema);
module.exports = PosthModel;