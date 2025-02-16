const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.Schema.ObjectId;



const userSchema=new Schema({
    UserId:{
        type:ObjectId,
    },
    email:{
        type:ObjectId,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    }
})
const adminSchema=new Schema({
    UserId:{
        type:ObjectId,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    }
})
const courseSchema=new Schema({
    creatorId:{
        type:ObjectId,
    },
    title:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    imageUrl:{
        type:String
    },
})
const purchaseSchema=new Schema({
    id:{
        type:ObjectId,
    },
    courseId:{
        type:ObjectId,
    },
    userId:{
        type:ObjectId,
    }

})

const userModel=mongoose.model("user",userSchema);
const adminModel=mongoose.model("admin",adminSchema);
const courseModel=mongoose.model("course",courseSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel 
}