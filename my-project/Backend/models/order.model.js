import mongoose from "mongoose";

const PaymentOrderSchema = new mongoose.Schema({
  razorpayOrderId: { type: String, required: true },
  userId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  items: { type: Array, required: true },
  address: { type: Array, required: true },
  receipt: { type: String, required: true },
  status: { type: String, required: true },
});

export default mongoose.model("PaymentOrder", PaymentOrderSchema);
