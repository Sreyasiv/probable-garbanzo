const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    number:{
        type:String,
        unique:true,
        required:true,
    }

});
const User=new mongoose.model("User",userSchema);
module.export=User;