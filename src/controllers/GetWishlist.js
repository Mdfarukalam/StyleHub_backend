
import Wishlist_product from "../models/Wishlist.js";

import MenProduct from "../models/AdminModel/MenProduct.js";
import KidProduct from "../models/AdminModel/KidProduct.js";
import WomenProduct from "../models/AdminModel/WomenProduct.js";

const GetWishlist = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get user's wishlist
    const wishlist = await Wishlist_product.find({ userId })
      .sort({ _id: -1 })
      .lean();

    // Fetch matching products
    const wishlistProducts = await Promise.all(
      wishlist.map(async (item) => {

        const productId = item.productId;

        // Select collection using productType
        let ProductModel;

        switch (item.productType?.toLowerCase()) {
          case "men":
            ProductModel = MenProduct;
            break;

          case "women":
            ProductModel = WomenProduct;
            break;

          case "kids":
          case "kid":
            ProductModel = KidProduct;
            break;

          default:
            return null;
        }

        // Match productId inside colorVariants array
        const product = await ProductModel.findOne({
          "colorVariants._id": productId,
        }).lean();

        if (!product) {
          return null;
        }

        // Find exact matching color variant
        const matchedVariant = product.colorVariants?.find(
          (variant) =>
            variant._id.toString() === productId.toString()
        );

        if (!matchedVariant) {
          return null;
        }

        // Return only matching color variant
        const productDetails = {
          ...product,
          colorVariants: [matchedVariant],
        };

        return {
          ...item,
          productDetails,
          matchedVariant,
        };
      })
    );

    return res.status(200).json({
      success: true,
      message: "Wishlist fetched successfully",
      wishlist: wishlistProducts.filter(Boolean),
    });

  } catch (error) {
    console.error("GetWishlist Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default GetWishlist;
