import mongoose, { Mongoose, model } from "mongoose";

const adminSchema= new mongoose.Schema({
    
    email:{type:String},
    password:{type:String},
    username:{type:String},
    otp:{type:String}
   
})

export default mongoose.model.admin || mongoose.model('admin',adminSchema)