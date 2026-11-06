
import mongoose from "mongoose";

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

const Wishlist_product = mongoose.model(
  "Wishlist",
  WishlistSchema
);

export default Wishlist_product;
