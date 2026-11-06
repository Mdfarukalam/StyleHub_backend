 
import Wishlist from "../models/Wishlist.js";


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
