import Wishlist from "../models/Wishlist.js";

 
export const RemoveWishlist = async (req, res) => {
  try {
    const { productId, productType } = req.body;
    const userId = req.user.id;

    const wishlist = await Wishlist.findOneAndDelete({
      userId,
      productId,
      productType,
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