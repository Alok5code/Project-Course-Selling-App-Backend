const {JWT_ADMIN_PASSWORD} = require("../config");
const jwt=require("jsonwebtoken");

async function adminMiddleware(req,res,next){
    try{
        const token=req.headers.token;
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
          }
        const decoded=await jwt.verify(token,JWT_ADMIN_PASSWORD);
        req.adminId=decoded.id;
        next();
    } catch(e) {
        return res.json({
            message:"Invalid token"
        })
    }
}
module.exports={
    adminMiddleware
}