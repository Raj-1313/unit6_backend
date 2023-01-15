const jwt = require("jsonwebtoken")

const authaeticate = (req,res,next) => {
const  token = req.headers.authorization;

if(token){
    const decoded = jwt.decode(token,"robbing");

if(decoded){
    const UserId= decoded.userID
    req.body.userID= UserId
    next()
}else{
    res.send({"message":"Please Login First"});
}
}else{
    res.send({"message":"Please Login First"});
    
}
}

module.exports = authaeticate