require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());
const User=require("./userSchema.js")

const PORT=3000

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("database connected"))
    .catch(()=>console.log("ERROR in fetching the data"));

app.post("/user",async(req,res)=>{
    try{
        const newUser=new User(req.body);
        newUser.save;
        res.status(201).json({message:"Data Created",newUser})
    }
    catch(error){
        res.status(400).json({message:"Error creating Object"});
    }
});
app.get("/user/get",async(req,res)=>{
    try{
      const user=await User.find();
      res.json(books); 
    }
    catch(error){
        res.status(500).json({message:"Error",error})
    }
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));