
import WomenProduct from "../../models/AdminModel/WomenProduct.js";

const AddWomenProduct = async (req, res) => {
  try {
    const {
      name,
      brand,
      category,
      price,
      originalPrice,
      discount,
      description,
      colorVariants,
      stock,
      rating,
      isActive,
    } = req.body;

    // Required fields validation
    if (
      !name ||
      !brand ||
      !category ||
      price == null ||
      originalPrice == null ||
      discount == null ||
      stock == null ||
      rating == null ||
      !Array.isArray(colorVariants) ||
      colorVariants.length === 0
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Validate each color variant
    const invalidVariant = colorVariants.some(
      (variant) =>
        !variant.color?.trim() ||
        !variant.images ||
        !Array.isArray(variant.sizes) ||
        variant.sizes.length === 0
    );

    if (invalidVariant) {
      return res.status(400).json({
        message: "Every color must have an image and at least one size",
      });
    }

    const CreateWomenProduct = await WomenProduct.create({
      name,
      brand,
      category,
      price,
      originalPrice,
      discount,
      description,
      colorVariants,
      stock,
      rating,
      isActive,
    });

    return res.status(201).json({
      message: "Women Product created successfully",
      WomenProduct: CreateWomenProduct,
    });
  } catch (error) {
    console.error("AddWomenProduct Error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

export default AddWomenProduct;
