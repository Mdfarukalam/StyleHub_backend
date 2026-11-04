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
      enum: ["men", "women", "kids", "top-product", "new-arrivals"],
      required: true,
    },
  },
  { timestamps: true }
);

// Same product cannot be added twice by the same user
WishlistSchema.index(
  { userId: 1, productId: 1, productType: 1 },
  { unique: true }
);

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

export default Wishlist;