
import Wishlist_product from "../models/Wishlist.js";

import MenProduct from "../models/AdminModel/MenProduct.js";
import KidProduct from "../models/AdminModel/KidProduct.js";
import WomenProduct from "../models/AdminModel/WomenProduct.js";

const GetWishlist = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get wishlist
    const wishlist = await Wishlist_product.find({
      userId,
    })
      .sort({ _id: -1 })
      .lean();

    // Search product using productId
    const wishlistProducts = await Promise.all(
      wishlist.map(async (item) => {

        const productId = item.productId;

        // Search in all product collections
        let productDetails = await MenProduct.findById(productId).lean();

        if (!productDetails) {
          productDetails = await WomenProduct.findById(productId).lean();
        }

        if (!productDetails) {
          productDetails = await KidProduct.findById(productId).lean();
        }

        return {
          ...item,
          productDetails: productDetails || null,
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
