import mongoose from "mongoose";


const MenProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
      
        enum: ["T-Shirts", "Jeans", "Shirts", "Jackets"]

    },


    price: {
        type: Number,
        required: true,
    },
    originalPrice: {
        type: Number,
        required: true,
    },

    discount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,

    },
    images: {
        type: String,
        required: true,
    },
    colors: {
        type: [String],
        required: true,
    },

    sizes: {
        type: [String],
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    rating: {
        type: Number,
        default: 0

    },
    isActive: {
        type: Boolean,
        default: false
    },
},
  {
    timestamps: true,
  })

const MenProduct = mongoose.model('MenProduct', MenProductSchema)
export default MenProduct