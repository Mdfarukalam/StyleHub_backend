//  import MenProduct from "../models/AdminModel/MenProduct.js";
//  const UserListMenProduct = async(req,res)=>{
//      try
//      {

//               const { search } = req.query;

//     let filter = {};

//     if (search && search.trim()) {
//       const searchRegex = new RegExp(
//         search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
//         "i"
//       );

//       filter = {
//         $or: [
//           { name: searchRegex },
//           { brand: searchRegex },
//           { category: searchRegex },
//         ],
//       };
//     }
//   const UserGetMenProdut = await MenProduct.find(filter).sort({_id:-1})
//   return res.status(200).json({
//          message: "User Men Produts fetched successfully",
     
//        UserGetMenProduts:UserGetMenProdut
//   })
//      }
//      catch(error){
//      return res.status(500).json({
//        message: "Server error"
//      });
//      }
//  }
//  export default UserListMenProduct




import MenProduct from "../models/AdminModel/MenProduct.js";
import Wishlist_product from "../models/Wishlist.js";

const UserListMenProduct = async (req, res) => {
  try {
    const { search } = req.query;
    const userId = req.user?.id;

    let filter = {};

    if (search && search.trim()) {
      const searchRegex = new RegExp(
        search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i"
      );

      filter = {
        $or: [
          { name: searchRegex },
          { brand: searchRegex },
          { category: searchRegex },
        ],
      };
    }

    // Get Men Products
    const products = await MenProduct.find(filter)
      .sort({ _id: -1 })
      .lean();

    // Get logged-in user's wishlist
    const wishlist = userId
      ? await Wishlist_product.find({ userId })
          .select("productId")
          .lean()
      : [];

    // Store wishlist variant IDs
    const wishlistIds = new Set(
      wishlist.map((item) => item.productId.toString())
    );

    // Match colorVariants with wishlist
    const UserGetMenProducts = products.map((product) => ({
      ...product,

      colorVariants: (product.colorVariants || []).map((variant) => ({
        ...variant,

        isWishlisted: wishlistIds.has(
          variant._id.toString()
        ),
      })),
    }));

    return res.status(200).json({
      success: true,
      message: "User Men Products fetched successfully",
      UserGetMenProducts,
    });

  } catch (error) {
    console.error("UserListMenProduct Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default UserListMenProduct;
