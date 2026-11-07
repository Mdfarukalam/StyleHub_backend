
import MenProduct from "../../models/AdminModel/MenProduct.js";

const AddMenProduct = async (req, res) => {
  try {
    const {
 
      brand,
      category,
      description,
      colorVariants,
      stock,
      rating,
      isActive,
    } = req.body;

    // Required fields validation
    if (
 
      !brand ||
      !category ||
      stock == null ||
      rating == null ||
      !Array.isArray(colorVariants) ||
      colorVariants.length === 0
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Validate color variants
    const invalidVariant = colorVariants.some((variant) => {
      const price = Number(variant.price);
      const originalPrice = Number(variant.originalPrice);
      const discount = Number(variant.discount);

      return (
        !variant.color?.trim() ||
        !variant.images ||
        !Array.isArray(variant.sizes) ||
        variant.sizes.length === 0 ||
        variant.price === "" ||
        variant.originalPrice === "" ||
        !Number.isFinite(price) ||
        !Number.isFinite(originalPrice) ||
        !Number.isFinite(discount) ||
        price < 0 ||
        originalPrice <= 0 ||
        price > originalPrice ||
        discount < 0 ||
        discount > 100
      );
    });

    if (invalidVariant) {
      return res.status(400).json({
        message: "Please provide valid color, image, sizes and price details",
      });
    }

    // Create product
    const CreateMenProduct = await MenProduct.create({
 
      brand,
      category,
      description,
      colorVariants,
      stock,
      rating,
      isActive,
    });

    return res.status(201).json({
      message: "Product created successfully",
      MenProduct: CreateMenProduct,
    });

  } catch (error) {
    console.error("Add Men Product Error:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export default AddMenProduct;
