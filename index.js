const express=require("express");
// const axios=require("axios");
// const jwt=require("jsonwebtoken");
require('dotenv').config()
const mongoose=require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin")
const app=express();
const port=5000;

app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

// to avoid race condition , that is after connecting to the server only then listen to the port.
async function main(){  

    await mongoose.connect(process.env.MONGO_URL);

    app.listen(port,()=>{
        console.log(`The server is running on port :${port}`)
    });
    
} 

main(); 