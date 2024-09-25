import mongoose, { Mongoose, model } from "mongoose";



  const addressSchema = new mongoose.Schema({
    name:{type:String},
    userId:{type:String},
    Lastname:{type:String},
    addressLine:{type:String},
    city:{type:String},
    state:{type:String},
    zipCode:{type:Number},
    phone:{type:Number}
  
  });



export default mongoose.model.address || mongoose.model('address',addressSchema)