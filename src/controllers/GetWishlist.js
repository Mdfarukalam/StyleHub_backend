import Wishlist_product from "../models/Wishlist.js";
import Cart from "../models/Cart.js";

const GetWishlist = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get wishlist data
    const wishlist = await Wishlist_product.find({
      userId,
    })
      .sort({ _id: -1 })
      .lean();

    // Check productId in Cart collection
    const wishlistProducts = await Promise.all(
      wishlist.map(async (item) => {

        const cartProduct = await Cart.findOne({
          userId,
          productId: item.productId,
        }).lean();

        return {
          ...item,
          cartDetails: cartProduct || null,
        };
      })
    );

    return res.status(200).json({
      success: true,
      message: "Wishlist fetched successfully",
      wishlist: wishlistProducts,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default GetWishlist;