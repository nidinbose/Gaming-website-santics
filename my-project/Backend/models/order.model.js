import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userId: {type:String},
    items: {type:Array},
    amount: {type:Number},
    currency: {type:String},
    status: { type: String, default: 'Pending' },
    razorpayOrderId: {type:String},
    razorpayPaymentId:{type:String},
    razorpaySignature: {type:String},
}, { timestamps: true });

export default mongoose.model.order || mongoose.model("orders",orderSchema)