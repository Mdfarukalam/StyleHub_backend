import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import NewAddress from "../models/NewAddress.js";
import Product from "../models/Product.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      deliveryAddress,
      paymentMethod = "COD",
    } = req.body || {};

    // Check delivery address
    if (!deliveryAddress?._id) {
      return res.status(400).json({
        success: false,
        message: "Delivery address is required",
      });
    }

    // Get user's saved address
    const address = await NewAddress.findOne({
      _id: deliveryAddress._id,
      userId,
    });

    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Delivery address not found",
      });
    }

    // Get user's cart
    const cart = await Cart.findOne({ userId });

    if (!cart || !cart.items || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Your cart is empty",
      });
    }

    // Fetch latest product prices
    let subtotal = 0;

    const orderItems = [];

    for (const item of cart.items) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      const quantity = Number(item.quantity || 1);
      const price = Number(product.price);

      if (!Number.isFinite(quantity) || quantity < 1) {
        return res.status(400).json({
          success: false,
          message: "Invalid product quantity",
        });
      }

      subtotal += price * quantity;

      orderItems.push({
        productId: product._id,
        name: product.name,
        brand: product.brand,
        image: item.image || product.images?.[0],
        price,
        quantity,
        size: item.size,
        color: item.color,
      });
    }

    const shipping = 0;
    const totalAmount = subtotal + shipping;

    // Create order
    const newOrder = await Order.create({
      userId,

      deliveryAddress: {
        fullName: address.fullName,
        phoneNumber: address.phoneNumber,
        addressLine: address.addressLine,
        city: address.city,
        state: address.state,
        pincode: address.pincode,
      },

      items: orderItems,

      paymentMethod,
      paymentStatus: "Pending",

      subtotal,
      shipping,
      totalAmount,

      orderStatus: "Pending",
    });

    // Clear cart after successful order
    cart.items = [];
    await cart.save();

    return res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });

  } catch (error) {
    console.log("Create Order Error:", error);

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
    const userId = req.user.id;

    const orders = await Order.find({ userId })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      orders,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


// GET SINGLE ORDER
export const getSingleOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { orderId } = req.params;

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

    return res.status(200).json({
      success: true,
      message: "Order details fetched successfully",
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