
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        productId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },



        color: {
            type: String,
            required: true,
        },
        discount: {
            type: Number,
            required: true,
        },

        images: {
            type: String,
            required: true,
        },

        originalPrice: {
            type: Number,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        sizes: {
            type: [String],
            required: true,
        },

        productType: {
            type: String,
            required: true,
        },

               name: {
            type: String,
            required: true,
        },
               brand: {
            type: String,
            required: true,
        },


                quantity: {
            type: Number,
            required: true,
        },

 
    },
    { timestamps: true }
);





const WishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
