import Wishlist from "../models/Wishlist.js";

 
export const AddWishlist = async (req, res) => {
  try {
    const { productId, productType } = req.body;
    const userId = req.user.id;

    const existingProduct = await Wishlist.findOne({
      userId,
      productId,
      productType,
    });

    if (existingProduct) {
      return res.status(400).json({
        success: false,
        message: "Product already in wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      userId,
      productId,
      productType,
    });

    return res.status(201).json({
      success: true,
      message: "Product added to wishlist",
      wishlist,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


 
 