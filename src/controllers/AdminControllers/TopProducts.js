import TopProduct from "../../models/AdminModel/TopProduct.js";

const AddTopProduct = async(req,res)=>{
   
try{
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

    // Validate each color variant
    const invalidVariant = colorVariants.some(
      (variant) =>
        !variant.color?.trim() ||
            !variant.price ||
              !variant.originalPrice||
                !variant.discount ||
        !variant.images ||
        !Array.isArray(variant.sizes) ||
        variant.sizes.length === 0
    );

    if (invalidVariant) {
      return res.status(400).json({
        message: "Every color must have an image and price and originalPrice and  discount at least one size",
      });
    }

 
  const CreateMenProduct= await TopProduct.create({
 
    brand,
    category,
     stock,
    rating,
    isActive,
    description,
    colorVariants
  }) 

     return res.status(201).json({
            message: "TopProduct created successfully",
            TopProduct: CreateMenProduct
        });

}
catch(error){
    return res.status(500).json({
            message: "Server error",
        })
}
}
export default AddTopProduct