
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
    }).sort({ _id: -1 }).lean();

    // Product model mapping
    const productModels = {
      men: MenProduct,
      women: WomenProduct,
      kids: KidProduct,
    };

    // Get complete product details
    const wishlistProducts = await Promise.all(
      wishlist.map(async (item) => {

        const ProductModel =
          productModels[item.productType?.toLowerCase()];

        if (!ProductModel) {
          return {
            ...item,
            productDetails: null,
          };
        }

        const productDetails = await ProductModel.findById(
          item.productId
        ).lean();

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
