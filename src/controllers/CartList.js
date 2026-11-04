import Cart from "../models/Cart.js";

const UserCartProduct = async (req, res) => {
  try {
    const { search } = req.query;

    // Only logged-in user's cart
    let filter = {
      userId: req.user.id,
    };

    if (search && search.trim()) {
      const searchRegex = new RegExp(
        search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i"
      );

      filter.$or = [
        { name: searchRegex },
        { brand: searchRegex },
        { color: searchRegex },
      ];
    }

    const UserGetCartProdut = await Cart.find(filter).sort({
      _id: -1,
    });

    return res.status(200).json({
      message: "Cart Products fetched successfully",
      CartProdut: UserGetCartProdut,
    });

  } catch (error) {
    console.error("User Cart Error:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export default UserCartProduct;