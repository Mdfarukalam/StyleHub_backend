import Wishlist from "../models/Wishlist";

// ADD TO WISHLIST
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


// GET WISHLIST
export const GetWishlist = async (req, res) => {
  try {
    const userId = req.user.id;

    const wishlist = await Wishlist.find({ userId }).sort({
      _id: -1,
    });

    return res.status(200).json({
      success: true,
      message: "Wishlist fetched successfully",
      wishlist,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// REMOVE FROM WISHLIST
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