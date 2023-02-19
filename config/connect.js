const mongoose= require('mongoose');


mongoose.set('strictQuery', true);

const connect=  mongoose.connect(process.env.db_url)





module.exports= connect;