import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const paymentOrderSchema = new mongoose.Schema({
  razorpayOrderId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  receipt: { type: String, required: true },
  status: { type: String, default: 'created' },
  createdAt: { type: Date, default: Date.now },
  items: [itemSchema], 
});

export default mongoose.models.order || mongoose.model('order', paymentOrderSchema);
