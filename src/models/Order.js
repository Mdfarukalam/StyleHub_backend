import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    deliveryAddress: {
      fullName: String,
      phoneNumber: String,
      addressLine: String,
      city: String,
      state: String,
      pincode: String,
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        name: String,
        brand: String,
        image: String,
        price: Number,
        quantity: Number,
        size: String,
        color: String,
      },
    ],

    paymentMethod: {
      type: String,
      default: "COD",
    },

    paymentStatus: {
      type: String,
      default: "Pending",
    },

    subtotal: Number,
    shipping: Number,
    totalAmount: Number,

    orderStatus: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);