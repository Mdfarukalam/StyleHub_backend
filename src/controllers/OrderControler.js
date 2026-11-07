import Order from "../models/Order.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      deliveryAddress,
      items,
      paymentMethod = "COD",
      subtotal,
      shipping = 0,
      totalAmount,
    } = req.body;

    const order = await Order.create({
      userId,
      deliveryAddress,
      items,
      paymentMethod,
      paymentStatus: "Pending",
      subtotal,
      shipping,
      totalAmount,
      orderStatus: "Pending",
    });

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


// GET MY ORDERS
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      orders,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET SINGLE ORDER
export const getSingleOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOne({
      _id: orderId,
      userId: req.user.id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order details fetched successfully",
      order,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};