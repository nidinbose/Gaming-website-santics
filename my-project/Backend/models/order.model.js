import mongoose from "mongoose";
const paymentOrderSchema = new mongoose.Schema({
    razorpayOrderId: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: 'INR',
    },
    receipt: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['created', 'paid', 'failed'],
      default: 'created',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  export default mongoose.model.orders || mongoose.model('order',paymentOrderSchema)