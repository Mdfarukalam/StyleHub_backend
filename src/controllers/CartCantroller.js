
import Cart from "../models/Cart.js";

 const AddCart = async (req, res) => {
   try {
     const { productId, productType } = req.body;
     const userId = req.user.id;
 
     // Validate required fields
     if (!productId || !productType) {
       return res.status(400).json({
         success: false,
         message: "Product ID and Product Type are required",
       });
     }
 
     // Check existing wishlist
     const existingProduct = await Cart.findOne({
       userId,
       productId,
       productType,
     });
 
     if (existingProduct) {
       return res.status(400).json({
         success: false,
         message: "Product already in Cart",
       });
     }
 
     // Add product to wishlist
     const wishlist = await Cart.create({
       userId,
       productId,
       productType,
     });
 
     return res.status(201).json({
       success: true,
       message: "Product added to Cart successfully",
       wishlist,
     });
 
   } catch (error) {
     return res.status(500).json({
       success: false,
       message: error.message,
     });
   }
 };

export default AddCart;
