import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Products', required: true },
    quantity: { type: Number, required: true },
    // Add other inventory-related fields as needed
}, {
    timestamps: true,
    collection: 'inventory'
});

export default mongoose.model('Inventory', ProductsSchema);