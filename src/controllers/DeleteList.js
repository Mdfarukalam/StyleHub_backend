 
import Cart from "../models/Cart.js";

const DeleteCartProductfunction = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        message: "Cart Product ID is required",
      });
    }

    const deletedProduct = await Cart.findOneAndDelete({
      _id: id,
      userId: req.user.id,
    });

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Cart Product not found",
      });
    }

    return res.status(200).json({
      message: "Cart Product deleted successfully",
      CartProduct: deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export default DeleteCartProductfunction;