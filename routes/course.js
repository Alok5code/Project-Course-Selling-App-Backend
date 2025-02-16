const { Router }=require("express");
const bodyParser = require("body-parser");
const { userMiddleware } = require("../middleware/user");
const { courseModel ,purchaseModel } = require("../db");
const courseRouter=Router();
courseRouter.use(bodyParser.json());

courseRouter.get("/preview",async function(req,res){
    const courses = await courseModel.find({});
    res.json({
        courses:courses
    })

});
courseRouter.post("/purchase",userMiddleware,async function(req,res){
    const userId=req.userId;
    const courseId=req.body.courseId;
    let payment=true; // assuming our courses are free for now .
    if(payment){
        await purchaseModel.create({
            userId,
            courseId
        })   
        res.json({
            message:"Payment Successfull"
        })     
    }
    else{
        res.json({
            message:"Payment Failed !"
        })
    }
     
});

module.exports= { 
    courseRouter:courseRouter
}