import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    _id:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    image:{type:String,required:true}  // image url is string
})

const User=mongoose.model('User',userSchema)  // 1st parameter-> modelname


export default User;