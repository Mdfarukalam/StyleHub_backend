import mongoose from "mongoose";


const WomenProductSchema = new mongoose.Schema({
 
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
      
        enum: [  "T-Shirts",
  "Jeans",
  "Shirts",
  "Jackets",
  "Kurtis",
  "Tops",
  "Sarees",
  "Dresses",
  "Skirts",
  "Leggings",
  "Palazzos",
  "Ethnic Wear",
  "Western Wear",
  "Suits",
  "Lehenga",
  "Dupatta",
  "Shorts",
  "Co-Ord Sets",
  "Sweaters",
  "Sweatshirts"]

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

const WomenProduct = mongoose.model('WomenProduct', WomenProductSchema)
export default WomenProduct