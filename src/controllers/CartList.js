import Cart from "../models/Cart";

const UserCartProduct = async(req,res)=>{
    try
    {


                   const { search } = req.query;

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
 const UserGetCartProdut = await Cart.find(filter).sort({_id:-1})
 return res.status(200).json({
        message: "Cart Produts fetched successfully",
    
      CartProdut:UserGetCartProdut
 })
    }
    catch(error){
    return res.status(500).json({
      message: "Server error"
    });
    }
}
export default UserCartProduct