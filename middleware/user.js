const {JWT_USER_PASSWORD} = require("../config")
const jwt=require("jsonwebtoken");

function userMiddleware(res,req,next){
    const token=req.headers.token;
    try{
        const decoded=jwt.verify(token,JWT_USER_PASSWORD);
        req.userId=decoded.id;
        next();
    } catch(e) {
        res.json({
            message:"Invalid token"
        })
    }
}
module.exports={
    userMiddleware
}