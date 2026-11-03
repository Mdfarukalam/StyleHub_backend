
import Cart from "../../models/Cart.js";

const AddCart = async (req, res) => {
  try {
    const {
        name,
        brand,
      productId,
      productType,
      color,
      discount,
      images,
      originalPrice,
      price,
      sizes,
      quantity
    } = req.body;

    // Required fields validation
    if (
           !name||
        brand ||
      !productId ||
      !productType ||
      !color ||
      discount == null ||
      quantity == null ||
      !images ||
      originalPrice == null ||
      price == null ||
      !Array.isArray(sizes) ||
      sizes.length === 0
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Save Cart
    const CreateCartProduct = await Cart.create({
      userId: req.user.id,
      productId,
      productType: "men",
      quantity:1,
      color,
      discount,
      images,
      originalPrice,
      price,
      sizes,
      name,
      brand
    });

    return res.status(201).json({
      message: "Cart saved successfully",
      CartProduct: CreateCartProduct,
    });

  } catch (error) {
    console.error("Add Cart Error:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export default AddCart;
