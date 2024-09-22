import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: false
    },
    productimagelink: {
        type: String,
        // required: true,
        // unique: false
    },
    productPrice: {
        type: String,
        required: true,
        unique: false
    },
    productName: {
        type: String,
        required: true,
        unique: false
    },
    userId: {
        type: String,
        // required: true,
        // unique: false
    },
    count: {
        type: Number,
        required: true,
        default: 1
    }
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
