import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [{
        productId: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        imageLink: { type: String, required: true }, 
        quantity: { type: Number, required: true, default: 1 }
    }]
});

export default mongoose.models.Cart || mongoose.model('Cart', cartSchema);
 