// import mongoose from 'mongoose';

// const cartSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   items: [{
//     productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//     name: { type: String, required: true },
//     linkvf: { type: String, required: true },
//     price: { type: Number, required: true },
//     quantity: { type: Number, required: true },
//   }],
// });

// const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);

// export default Cart;



import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: false
    },
  
    userId: {
        type: String,
        required: true,
        unique: false
    },
    count:{
        type: Number,
        required: true,
        unique: false
    }
});

export default mongoose.model.Carts || mongoose.model("Cart", cartSchema);