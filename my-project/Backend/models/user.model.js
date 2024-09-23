import mongoose, { Mongoose, model } from "mongoose";

const cartItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, default: 1 },
    imageLink:{type:String ,required:true},
    price:{type:Number ,required:true},
    name:{type:String ,required:true}
  });
  
  const userSchema = new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    username:{type:String},
    otp:{type:String},
    newPassword:{type:String},
    cart: [cartItemSchema] 
  });



export default mongoose.model.users || mongoose.model('user',userSchema)