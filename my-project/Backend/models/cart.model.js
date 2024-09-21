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
    count: {
        type: Number,
        required: true,
        default: 1 // Set a default value if count is not provided
    }
});

const Cart = mongoose.model("Cart", cartSchema); // Correctly create the Cart model
export default Cart; // Export the Cart model
