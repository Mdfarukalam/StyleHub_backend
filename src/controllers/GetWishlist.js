
import Wishlist_product from "../models/Wishlist.js";

import MenProduct from "../models/AdminModel/MenProduct.js";
import KidProduct from "../models/AdminModel/KidProduct.js";
import WomenProduct from "../models/AdminModel/WomenProduct.js";

const GetWishlist = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get wishlist data
    const wishlist = await Wishlist_product.find({
      userId,
    }).sort({ _id: -1 }).lean();

    // Match productId with all 3 collections
    const wishlistProducts = await Promise.all(
      wishlist.map(async (item) => {

        const productId = item.productId;

        const [menProduct, kidProduct, womenProduct] =
          await Promise.all([
            MenProduct.findById(productId).lean(),
            KidProduct.findById(productId).lean(),
            WomenProduct.findById(productId).lean(),
          ]);

        // Get matched product
        const productDetails =
          menProduct || kidProduct || womenProduct || null;

        return {
          ...item,
          productDetails,
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
