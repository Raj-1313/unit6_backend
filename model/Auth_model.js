const mongoose=   require('mongoose');

const AuthSchema= mongoose.Schema({
    name :{type:String},
    email :{type:String},
    gender :{type:String},
    password :{type:String},
})

const AuthModel = mongoose.model('Auth',AuthSchema);
module.exports = AuthModel;