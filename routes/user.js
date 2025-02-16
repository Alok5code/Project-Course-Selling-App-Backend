const { Router } = require("express"); 
const { userModel, courseModel, purchaseModel } = require("../db");
const bodyParser = require("body-parser")
const {z} = require("zod");
const {JWT_USER_PASSWORD} = require("../config");
const { userMiddleware } = require("../middleware/user");
const jwt = require("jsonwebtoken");
// same as const express=require("express")
//         const Router=express.Router
const userRouter=Router();
userRouter.use(bodyParser.json());

    userRouter.post("/signup",async function(req,res){
        const {email,password,firstName,lastName}=req.body;
        //adding validation (zod), hashing the password
        
        const requiredBody=z.object({
            email:z.string().min(10).max(50).email(),
            password:z.string().min(3).max(50),
            firstName:z.string().min(2).max(50),
            lastName:z.string().min(2).max(50),
        })
        const parsedData=requiredBody.safeParse(req.body);
        if(!parsedData.success){
            res.json({
                message:"Invalid Format",
                error:parsedData.error
            })
            return;
        }
        const hashedPassword=await bcrypt.hash(password,5);
        //now rap them in try catch 
       try{
            await userModel.create({
                email,
                password:hashedPassword,
                firstName,
                lastName
            })
       } catch(e){
            res.status(403).json({
                message:"User already Exist !"
            })
       }
    })
    userRouter.post("/signin",async function(req,res){
        const {email,password}=req.body;
        const user=await userModel.findOne({
            email:email
        });
        if(!user){
            res.json({
                message:"User is not Signedup !"
            })
        }
        const verifyUser=await bcrypt.compare(user.password,password);
        if(!verifyUser){
            res.json({
                message:"Invalid credientials"
            })
        }
        const token=jwt.sign({
            id:user._id.toString()
        },JWT_USER_PASSWORD);
        res.json({
            token:token
        })
    })
    userRouter.get("/purchases",userMiddleware,async function(req,res){
        const userId=req.userId;
        const purchasesArr = await purchaseModel.find({userId});
        const courses = await courseModel.find({
            _id: { $in: purchasesArr.map(x => x.courseId) } // finding the ids from the mongodb.
        }) 
        res.json({
            courses
        })
    });
    
    module.exports = {
    userRouter:userRouter
}
        
