import Wishlist_product from "../models/Wishlist.js";

const RemoveWishlist = async (req, res) => {
  try {
    const { productId } = req.query;
    const userId = req.user.id;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    const wishlist = await Wishlist_product.findOneAndDelete({
      userId,
      productId,
    });

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Product not found in wishlist",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product removed from wishlist",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default RemoveWishlist;