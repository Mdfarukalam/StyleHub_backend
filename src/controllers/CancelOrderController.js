
import mongoose from "mongoose";
import Order from "../models/Order.js";

const cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.query;
    const userId = req.user.id;

    // Validate Order ID
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Order ID",
      });
    }

    // Find order belonging to logged-in user
    const order = await Order.findOne({
      _id: orderId,
      userId,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Only Pending orders can be cancelled
    if (order.orderStatus !== "Pending") {
      return res.status(400).json({
        success: false,
        message: `Order cannot be cancelled. Current status: ${order.orderStatus}`,
      });
    }

    // Update order status
    order.orderStatus = "Cancelled";

    await order.save();

    return res.status(200).json({
      success: true,
      message: "Order cancelled successfully",
      order,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default cancelOrder;
