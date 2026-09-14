import mongoose from 'mongoose';

export default mongoose.model('Product', new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0, default: 0 },
  minimumStock: { type: Number, required: true, min: 0, default: 0 }
}, {
  timestamps: true
}));