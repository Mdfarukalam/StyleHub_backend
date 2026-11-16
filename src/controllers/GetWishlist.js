
import Wishlist_product from "../models/Wishlist.js";

import MenProduct from "../models/AdminModel/MenProduct.js";
import KidProduct from "../models/AdminModel/KidProduct.js";
import WomenProduct from "../models/AdminModel/WomenProduct.js";

const GetWishlist = async (req, res) => {
  try {
    const userId = req.user.id;

    const wishlist = await Wishlist_product.find({
      userId,
    })
      .sort({ _id: -1 })
      .lean();

    const wishlistProducts = await Promise.all(
      wishlist.map(async (item) => {
        const productId = item.productId;

        // Match productId with colorVariants._id
        const [menProduct, kidProduct, womenProduct] =
          await Promise.all([
            MenProduct.findOne({
              "colorVariants._id": productId,
            }).lean(),

            KidProduct.findOne({
              "colorVariants._id": productId,
            }).lean(),

            WomenProduct.findOne({
              "colorVariants._id": productId,
            }).lean(),
          ]);

        const productDetails =
          menProduct || kidProduct || womenProduct || null;

        // Find matching color variant
        const matchedVariant = productDetails?.colorVariants?.find(
          (variant) => variant._id.toString() === productId.toString()
        ) || null;

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
