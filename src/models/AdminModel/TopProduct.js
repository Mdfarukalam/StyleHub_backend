import mongoose from "mongoose";


const TopProductSchema = new mongoose.Schema({
   
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
      
        enum: [  "T-Shirts",
  "Shirts",
  "Jeans",
  "Jackets",
  "Kurtis",
  "Tops",
  "Sarees",
  "Dresses",
  "Skirts",
  "Lehengas",
  "Kids Wear",
  "Shoes",
  "Accessories",
  "Other"]

    },



    description: {
        type: String,

    },
colorVariants: [
  {
    color: {
      type: String,
      required: true,
    },

    images: {
      type: String,
      required: true,
    },

    sizes: {
      type: [String],
      required: true,
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

        name: {
      type: String,
      required: true,
    },

  },
],
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

const TopProduct = mongoose.model('TopProduct', TopProductSchema)
export default TopProduct