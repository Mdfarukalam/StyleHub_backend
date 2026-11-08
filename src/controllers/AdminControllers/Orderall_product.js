// GET MY ORDERS

import Order from "../../models/Order.js";

const Orderall_product_data = async (req, res) => {
  try {
    const orders = await Order.find({})
      .sort({ createdAt: -1 })
      .populate("userId", "fullName Email phoneNumber");

    return res.status(200).json({
      success: true,
      message: "All orders fetched successfully",
      totalOrders: orders.length,
      orders,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default Orderall_product_data;
